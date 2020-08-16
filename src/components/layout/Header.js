import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Header = props => {
  const { branding } = props;

  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();
  
  //   return `${day} ${date} ${month} ${year}`
  
  // }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <br/>
      <br/>
      <div>      
        <span className="date">
        {dateBuilder(new Date())}
      </span>
      </div> */}

    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
