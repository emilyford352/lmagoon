import React from 'react'
import {Route} from 'react-router'
import {HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Listen from '../components/Listen.jsx';
import Contact from '../components/Contact.jsx';
import Trainings from '../components/Trainings.jsx';
import Nav from '../components/Nav.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Style from '../LMagoon.css';


export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route path='/Home' component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Listen' component={Listen} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Trainings' component={Trainings} />
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<Nav />, document.getElementById('nav'));

ReactDOM.render(<App />, document.getElementById('app'));