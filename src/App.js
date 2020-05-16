import React from 'react';
import './App.css';
// import Task from './components/Task';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Workouts from './components/Workouts';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// import { Provider } from './contexts/TaskContext';

const App = () => {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  
  }


  return (
    // <Provider>
      <Router>
        <div className="App">
          <Header branding="Task Manager" />
          <div className="container">
            <div className={"work-wrapper"}>
            <h1>Work Tracker</h1>
            <br/>
            <br/>
            <div>      
                <span className="date">
                {dateBuilder(new Date())}
            </span>
            </div>
            </div>
            {/* <Workouts /> */}
            <Switch>
              <Route exact path="/" component={Workouts} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>

    // </Provider>

  )
}

export default App;
