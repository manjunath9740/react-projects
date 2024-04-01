/*
<div id="parent">
    <div id="child">
          <h1>I am h1 tag</h1>
    </div>
    <div id="child2">
          <h1>I am h2 tag</h1>
    </div>
</div>
ReactElement(Object) => HTML(Browser understands)
* */

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tage")])],
    [
        React.createElement("div", { id: "child2" },
            [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tage")])
        ]);

//const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)