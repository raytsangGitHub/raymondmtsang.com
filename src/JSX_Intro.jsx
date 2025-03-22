import React from "react";

//uses of JSX -Here are some significant uses of JSX:
//Embedding Expression
const name = 'Embedding expressions, is not a JSX component, But function is.';
const greeting = <h3>{name}!</h3>;
//Attributes in JSX
const element = <img src="" alt="A description" />;
//Passing Children in JSX
const Welcome = (props) =>
{
    return <div>{props.children}</div>;
};
const ChildrenPassing = () =>
{
    return (
        <Welcome>
            <h1>Hello, World!</h1>
            <p>Welcome to React.</p>
        </Welcome>
    );
};
//JSX Represents Object
const jsxElement = React.createElement(
    "button",
    {
        className: "btn",
        onClick: () => alert("Clicked!"),
    },
    "Click Me"
);
//Export multiple constants instead of using 'export default'
export { greeting, jsxElement, ChildrenPassing };

