import React from 'react';
import EmployeeForm from './employeeForm';

export default () => (
  <EmployeeForm
    employee={{
      first_name: '',
      last_name: '',
      title: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      postal_code: '',
      city: '',
      birth_date: '',
      date_of_employment: '',
      termination_date: '',
      emergency_contact_name: '',
      emergency_contact_phone: '',
      emergency_contact_relation: ''
    }}
  />
);
