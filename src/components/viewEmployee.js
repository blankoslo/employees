import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'md5';

class ViewEmployee extends Component {
    render() {
      const activeId = parseInt(this.props.params.id);
      const employee = this.props.employees.find(e => e.id === activeId);
      const gridClasses='mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop mdl-cell--12-col-phone';

        return (
          <div className='mdl-grid'>
            <div className={`mdl-cell mdl-cell--8-col mdl-cell--4-offset-desktop mdl-cell--4-col-phone center-text`}>
              <img className='profile-pic'
                src={`http://www.gravatar.com/avatar/${md5(employee.email)}`} />
            </div>
            <div className='mdl-cell mdl-cell--8-col mdl-cell--4-offset-desktop mdl-cell--4-col-phone center-text'>
              <h5>{employee.first_name} {employee.last_name}</h5>
              <span className='gray'>{employee.title}</span>
            </div>
            <div className='mdl-cell mdl-cell--8-col mdl-cell--4-offset-desktop mdl-cell--4-col-phone'>
              <hr />
            </div>
            <div className={gridClasses}>
              <div className='mdl-grid'>
                <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-phone mdl-cell--top pull-right'>
                  <i className='material-icons main-color'>phone</i>
                </div>
                <div className='mdl-cell mdl-cell--10-col mdl-cell--3-col-phone mdl-cell--top'>
                  {employee.phone}
                </div>
              </div>
            </div>
            <div className={gridClasses}>
              <div className='mdl-grid'>
                <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-phone mdl-cell--top pull-right'>
                  <div className='mdl-layout-spacer'></div>
                  <i className='material-icons main-color'>email</i>
                </div>
                <div className='mdl-cell mdl-cell--10-col mdl-cell--3-col-phone mdl-cell--top'>
                  {employee.email}
                </div>
              </div>
            </div>
            <div className={gridClasses}>
              <div className='mdl-grid'>
                <div className='mdl-cell mdl-cell--2-col mdl-cell--1-col-phone mdl-cell--top pull-right'>
                  <div className='mdl-layout-spacer' />
                  <i className='material-icons main-color'>location_on</i>
                </div>
                <div className='mdl-cell mdl-cell--10-col mdl-cell--3-col-phone mdl-cell--top'>
                  {employee.address}
                  <br />
                  {employee.postal_code} {employee.city}
                </div>
              </div>
            </div>
            <div className='mdl-cell mdl-cell--8-col mdl-cell--4-offset-desktop mdl-cell--4-col-phone'>
              <hr />
            </div>
            <div className='mdl-cell mdl-cell--8-col mdl-cell--4-offset-desktop mdl-cell--4-col-phone'>
              <h5>Kontaktperson</h5>
            </div>
            <div className='mdl-cell mdl-cell--8-col mdl-cell--4-offset-desktop mdl-cell--4-col-phone'>
              <p className='emergency-contact'>{employee.emergency_contact_name}</p>
              <p className='emergency-contact gray'>{employee.emergency_contact_relation}</p>
              <p className='emergency-contact'>{employee.emergency_contact_phone}</p>
            </div>
          </div>
        );
    }
};

/*
            <div>
                mdl-cell--N-offset-desktop
                {employee.first_name}
            </div>
*/

const mapStateToProps = ({ employees }) => ({
  employees: employees
});

export default connect(mapStateToProps)(ViewEmployee);
