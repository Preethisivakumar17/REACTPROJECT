
import React, { useState } from 'react';
import './App.css';

function Acc() {
    
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    contact: '',
    subject: '',
    proof: '',
    url: '',
    about: ''
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const ResetFun = () => {
    setValues({
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      contact: '',
      subject: '',
      proof: '',
      work: '',
      address: ''
    });
  };

  return (
    <div className="container">
      <h1>Account Creation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name* </label>
        <input type="text" placeholder="Enter First Name" name="firstname" onChange={handleChanges} required value={values.firstname} />

        <label htmlFor="lastname">Last Name*</label>
        <input type="text" placeholder="Enter Last Name" name="lastname" onChange={handleChanges} required value={values.lastname} />

        <label htmlFor="email">Email* </label>
        <input type="email" placeholder="Enter Email" name="email" onChange={handleChanges} required value={values.email} />

        <label htmlFor="contact">Contact* </label>
        <input type="text" placeholder="Contact Number" name="contact" onChange={handleChanges} value={values.contact} />

        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender" value="Male" onChange={handleChanges} checked={values.gender === 'Male'} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChanges} checked={values.gender === 'Female'} /> Female
        <input type="radio" name="gender" value="Other" onChange={handleChanges} checked={values.gender === 'Other'} /> Other

        <label htmlFor="subject">Initial Deposit Amount* </label>
        <select name="subject" id="subject" onChange={handleChanges} value={values.subject}>
          <option value="">Select Initial Deposit Amount </option>
          <option value="7000">7000</option>
          <option value="5000">5000</option>
          <option value="1000">1000</option>
        </select>

        <label htmlFor="proof">Government-Issued ID (Aadhaar, Passport, Driving License, etc.*)</label>
        <input type="file" name="proof" onChange={handleChanges} />

        <label htmlFor="resume">Upload PAN Card*</label>
        <input type="file" name="resume" onChange={handleChanges} />

        <label htmlFor="photo">Upload Photograph*</label>
        <input type="file" name="photo" onChange={handleChanges} />


        <label htmlFor="work">Occupation & Income Details</label>
        <input type="text" name="work" placeholder="Enter Details" onChange={handleChanges} required value={values.work}/>

        <label htmlFor="address">Residential Address* </label>
        <textarea name="address" cols="30" rows="10" onChange={handleChanges} placeholder="Enter Address" value={values.address}></textarea>

        <button type="button" onClick={ResetFun}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Acc;
