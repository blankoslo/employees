import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditEmployee from '../components/editEmployee';
import NewEmployeeEditor from '../components/newEmployeeEditor';

import {
  createEmployee,
  updateEmployee,
  updateField,
  resetForm,
  editEmployee,
  newEmployee } from '../actions/index';

const FORM_NAME = 'edit_employee';

class EmployeeForm extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    componentHandler.upgradeDom();
    this.props.resetForm(FORM_NAME);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  onCancel = () => {
    this.props.editEmployee(null);
    this.props.newEmployee(false);
  }

  onSubmit = (e) => {
    e.preventDefault();

    // note that employee contains data and loading, while data contains id, name etc.
    const employee = this.props.employee;

    // no changes
    if (employee !== null && this.props.form.edit_employee === undefined) {
      this.props.editEmployee(null);
      return;
    }

    const data = this.props.form
      ? this.props.form[FORM_NAME]
      : {};

    const persist = employee === null
      ? this.props.createEmployee(data)
      : this.props.updateEmployee(employee.id, data);

    persist.then(() => {
      this.props.editEmployee(null);
      this.props.newEmployee(false);
    });
  }

  onChange = (fieldName, value) => {
    this.props.updateField(FORM_NAME, fieldName, value);
  }

  render() {
    if (this.props.employee === null) {
      return (
        <NewEmployeeEditor
          onSubmit={this.onSubmit}
          onCancel={this.onCancel}
          onChange={this.onChange}
        />
      );
    }

    return (
      <EditEmployee
        employee={this.props.employee}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        onCancel={this.onCancel}
      />
    );
  }
}

EmployeeForm.propTypes = {
  employee: PropTypes.object,
  newEmployee: PropTypes.func,
  form: PropTypes.object,
  dispatch: PropTypes.func,
  children: PropTypes.object,
  updateEmployee: PropTypes.func,
  createEmployee: PropTypes.func,
  updateField: PropTypes.func,
  editEmployee: PropTypes.func,
  resetForm: PropTypes.func
};

const mapStateToProps = (state) => (
  { form: state.form }
);

const mapDispatchToProps = {
  createEmployee,
  updateEmployee,
  updateField,
  resetForm,
  editEmployee,
  newEmployee
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
