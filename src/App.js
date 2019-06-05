import React, { Component } from "react";
import AppTodo from './components/AppTodo';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'

class App extends Component {


    render(){
        return(
            <div>
                <BrowserRouter>
                    <Navbar />
                  <Switch>
                  <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} /> 
                    <Route path="/AppTodo" component={AppTodo} />
                    <Route path="/:post_id" component={Post} />
                  </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}
export default App