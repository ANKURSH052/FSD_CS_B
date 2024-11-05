const div = document.createElement("div");
div.id = "div1";
div.style.backgroundColor = "black";
div.style.width = "2000px";
div.style.height = "2000px";
document.body.appendChild(div);

const para = document.createElement("p");
para.id = "para1";
para.style.color = "red";
para.innerText = "hello ayush saini from sarsawa";
div.appendChild(para);

const btn1 = document.createElement("button");
btn1.id = "btn-1";
btn1.innerText = "Add para";
div.prepend(btn1);
btn1.addEventListener(
  "click",
  () => {
    const para = document.createElement("p");
    para.id = "para1";
    para.style.color = "red";
    para.innerText = "hello ayush saini from sarsawa";
    div.appendChild(para);
  },
  true
);

btn1.addEventListener(
  "click",
  () => {
    const div1 = document.createElement("div");
    div1.id = "div-1";
    div1.style.backgroundColor = "green";
    para.innerText = "helloo";
    div.appendChild(div1);
  },
  true
);
