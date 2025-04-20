/*
<div id="parent">
<h1> I am h1 tag</h1>
</div>
*/

const heading = React.createElement("h1",{
    id:"heading" , name:"Namaste-react"
},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);