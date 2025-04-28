import React, { useState, useEffect } from "react";
import axios from "axios";
const ViewUsers = () => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    fetchuser();
  }, []);
  const fetchuser = async () => {
    try {
      const res = await axios.get("https://userapp-hbrx.onrender.com/users");
      setUsers(res.data);
    } catch (err) {
      setError(err.message);
    }
  };
  const handleAddUser = async () => {
    try {
      await axios.post("https://userapp-hbrx.onrender.com/adduser", {
        name,
        email,
        role,
      });
      alert("user added successfully");
      fetchuser();
    } catch (err) {
      setError(err.message);
    }
};
    const handleDelete=async(email)=>{
         try {
            const confirm=window.confirm("r u sure")
            if(confirm){
                await axios.post(
                  `https://userapp-hbrx.onrender.com/delete/${email}`
                );

                alert("user deleted successfully");
                fetchuser();

            }
           
         } catch (err) {
           setError(err.message);
         }

    }




  
  return (
    <div className="content">
      <h1>List of Users</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>SR.NO.</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {error && (
            <tr>
              <td colspan="6">error</td>
            </tr>
          )}
          <tr>
            <td>#</td>
            <td>
              <input
                type="text"
                name="uname"
                placeholder="Enter User Name"
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="Enter User Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <select onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleAddUser()}
              >
                ADD
              </button>
              &nbsp;
              <button className="btn btn-danger">Cancel</button>
            </td>
          </tr>
          {users.map((user, index) => (
            <tr>
              <td>{++index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-primary">Edit</button>&nbsp;
                <button className="btn btn-danger" onClick={()=>handleDelete(user.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
