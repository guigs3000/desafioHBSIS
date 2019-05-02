import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddBook from './components/Pages/AddBook';
import Home from './components/Pages/Home';
import BookCopies from './components/Pages/BookCopies';
import EditBook from './components/Pages/EditBook';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">Biblioteca</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/AddBook'} className="nav-link">Create</Link>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </nav> <br />
                    
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/AddBook' component={AddBook} />                        
                        <Route exact path='/EditBook/:bookId' component={EditBook} />              
                        <Route exact path='/BookCopies/:bookId' component={BookCopies} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
