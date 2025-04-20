import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Namaste React");
// we can write the above using jsx syntax
const jsxheading = <h1 id="heading1">Namaste react using JSX !!!</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

// React Functional Component
/*
Injecting react component into react component.
injecting react element into react element.
*/
const Title = () =>(
    <h1 className="heading">
        Namaste React using Babel
    </h1>
)
const FunctionalComponent2 = () =>(
    <div id="container">
        <Title />
        <h2 className="heading2">
          React functional component is getting render using Babel ...
        </h2>
    </div>
)

const FunctionalComponent = ()=>{
    return <h1 className="functionalComponent">React Functional Component</h1>
};

const ShorthandWay = () => (
<h1 className="functionalComponent1"> 
    <FunctionalComponent />
    Shorthand way of Writing Functional Component</h1>
);
root.render(<ShorthandWay />);