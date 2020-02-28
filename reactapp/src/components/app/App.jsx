import React from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import About from "../about/About";
import Search from "../search/Search";
import './app.scss';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom"

function App(){
    return (
        <div className="App">
                <Header/>
                <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Pagrindinis</Link>
                        </li>
                        <li>
                            <Link to="/about">Apie projektą</Link>
                        </li>
                        <li>
                            <Link to="/search">Paieška</Link>
                        </li>
                    </ul>
                </nav>

                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/search">
                            <Search/>
                        </Route>
                        <Route path="/">
                            <Main/>
                        </Route>
                    </Switch>
                </Router>
            <Footer/>
        </div>
    )
}

export default App;