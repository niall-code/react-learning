import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}. {props.greeting} I hear that you're {props.age} years old.</h1>;
}

export default FunctionalGreetingWithProps;
