const parent = document.getElementById("root");
const ele = React.createElement("h1", {}, "Shopping Cart");
const root = ReactDOM.createRoot(parent);

const ele1 = React.createElement("h1", {}, "My Items");

const item1 = React.createElement("li", {}, "Item1");
const item2 = React.createElement("li", {}, "Item2");

// Correct variable names (item1, item2)
const list = React.createElement("ul", {}, item1, item2);

const h2 = <h2>this is hradinm</h2>

// Render all the elements
root.render([ele, ele1, h2, list]);
