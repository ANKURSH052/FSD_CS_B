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
    if (!name || !email || !role) {
      alert("Please fill all the fields.");
      return;
    }
    try {
      await axios.post("https://userapp-hbrx.onrender.com/adduser", {
        name,
        email,
        role,
      });
      alert("User added successfully");
      fetchuser();
      setName("");
      setEmail("");
      setRole("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (email) => {
    try {
      const confirmDelete = window.confirm("Are you sure?");
      if (confirmDelete) {
        await axios.delete(`https://userapp-hbrx.onrender.com/delete/${email}`);
        alert("User deleted successfully");
        fetchuser();
      }
    } catch (err) {
      setError(err.message);
    }
  };

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
              <td colSpan="6" style={{ color: "red" }}>{error}</td>
            </tr>
          )}
          <tr>
            <td>#</td>
            <td>
              <input
                type="text"
                name="uname"
                placeholder="Enter User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="Enter User Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </td>
            <td>
              <button className="btn btn-primary" onClick={handleAddUser}>
                ADD
              </button>
              &nbsp;
              <button
                className="btn btn-danger"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setRole("");
                }}
              >
                Cancel
              </button>
            </td>
          </tr>
          {users.map((user, index) => (
            <tr key={user.email}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-primary">Edit</button>&nbsp;
                <button className="btn btn-danger" onClick={() => handleDelete(user.email)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
