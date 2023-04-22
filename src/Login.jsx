import React, { useState } from "react";
const Login = () => {
    const[data,setData] =useState({
        FullName:"",
        PhoneNumber:"",
        Email:"",
        msg:"",
    });
    const InputEvent = (event) => {
const{ name,value } = event.target;

setData((preVal) => {
return {
    ...preVal,
    [name]:value,

};
});
    };
    const formSubmit = (e) =>{
e.preventDefault();
alert(
    `please confirm your details your full name is ${data.FullName}. your phone number is ${data.PhoneNumber}. your e-mail is ${data.Email}. your messege is${data.msg}`
);
    }
  return (
    <div id="login-page">
      <div className="my-5">
        <h1 className="text-center">Connect with Us</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="Text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="FullName"
                  value={data.FullName}
                  onChange={InputEvent}
                  placeholder="Enter your Full Name"

                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number    

                </label>
                <input
                  type="phone number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="PhoneNumber"
                  value={data.PhoneNumber}
                  onChange={InputEvent}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Email"
                  value={data.Email}
                  onChange={InputEvent}
                  placeholder="Enter your E-mail"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Messsge
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Type Messege"
                >
                  
                </textarea>
              </div>
              <div className="col-12">
    <button className="btn btn-outline-danger" type="submit">Submit Form</button>
  </div>
  </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
