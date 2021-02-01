import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import TodoHistory from './components/TodoHistory'
import Todo from './components/Todo'
import Menu from './components/Menu'
import MaterialTableTest from './components/MaterialTests'

function App() {
    return (
        <div>
            <MaterialTableTest />
            {/* <Menu />
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
            </Router> */}
        </div>
    )
}

export default App;
