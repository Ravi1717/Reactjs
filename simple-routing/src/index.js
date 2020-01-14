import React from 'react'
import ReactDOM from 'react-dom'

import Home from "./screen/home"
import About from "./screen/about"
import Topic from "./screen/topic"

const MainComponent = (props) => {
    switch (props.path) {
        case '/about':
            return <About></About>
        case '/topic':
            return <Topic></Topic>
        default:
            return <Home></Home>
    }
}

const pathName = window.location.pathname
console.log(pathName)


ReactDOM.render(<MainComponent path={pathName} />, document.getElementById("root"))