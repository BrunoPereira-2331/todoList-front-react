import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from './components/Todo'
import TodoHistory from './components/TodoHistory'

export default props => {
    return (
        <Router>
            <div className="div">
                <Switch>
                    <Route path="/todoList">
                        <Todo />
                    </Route>
                    <Route path="/todoList">
                        <Todo />
                    </Route>
                    <Route path="/history">
                        <TodoHistory />
                    </Route>
                    <Redirect from="" to="/todoList"></Redirect>
                </Switch>
            </div>
        </Router>
    )
}