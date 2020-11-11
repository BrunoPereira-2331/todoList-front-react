import React from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import TodoHistory from './components/TodoHistory'
import Todo from './components/Todo'
import Menu from './components/Menu'

function App() {
    return (
        <div>
            <Menu />
            <Router>
                <Switch>
                    <Route path="/todoList">
                        <Todo />
                    </Route>
                    <Route path="/history">
                        <TodoHistory />
                    </Route>
                    <Redirect from="" to="/todoList"></Redirect>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
