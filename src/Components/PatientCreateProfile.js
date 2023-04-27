import React from 'react';
import { Link } from "react-router-dom";
import c from "./css/patientCreateProfile.module.css";

export default function PatientCreateProfile() {
    return (
<body class={c.pcreatebody}>
  

  <div class={c.container}>
    <div class={c.title}>Patient Registration</div>
    
    <div class={c.upload}>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZSuJ75bwz4WIxybUZPFn09NBt7wmLQFFF11o5OKry-Io-f2_0sW4ugSOtEtGpYeKLNw&usqp=CAU" width = 100 height = 100 alt=""> */}
      <div class={c.round}>
        <input type="file"/>
        <i class = {c.fafacamera} style ={{"color": "#ffffff"}}></i>
      </div>
    </div>
    
    <div class={c.content}>
      <form action="/patient_information_data" method="POST">
        <div class={c.userdetails}>
          <div class={c.inputbox}>
            <span class={c.details}>Full Name<span style={{"color": "red"}}>*</span></span> 
            <input type="text" placeholder="Enter your name"  value="{{naming}}" name="user" required/>
          </div>
          <div class={c.inputbox}>
            <span class={c.details}>Guardian Name<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter Guardian Name" name="guardian" required/>
          </div>
          <div class={c.inputbox}>
            <span class={c.details}>Contact Number<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter your number" name="contact" required/>
          </div>
          <div class={c.inputbox}>
            <span class={c.details}>Guardian Number<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter Guardian number" name="guardianPhn" required/>
          </div>
          <div class={c.inputbox}>
            <span class={c.details}>Birth Date<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="dd-mm-yyyy" name="dob" required/>
          </div>

          <div class={c.inputbox}>
            <span class={c.details}>Blood Group<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter your blood group" name="bloodg" required/>
          </div>
          {/* <!--<div class={c.inputbox}>
            <span class={c.details}>Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>--> */}
          </div>
          <div class={c.genderdetails}>
            <input type="radio" name="gender" id="dot-1"/>
            <input type="radio" name="gender" id="dot-2"/>
            <input type="radio" name="gender" id="dot-3"/>
            <span class={c.gendertitle}>Gender<span style={{"color": "red"}}>*</span></span>
            <div class={c.category}>
            <label for="dot-1">
            <span class={c.dotone}></span>
            <span class={c.gender}>Male</span>
            </label>
          <label for="dot-2">
            <span class={c.dottwo}></span>
            <span class={c.gender}>Female</span>
          </label>
          <label for="dot-3">
            <span class={c.dotthree}></span>
            <span class={c.gender}>Prefer not to say</span>
            </label>
          </div>
        
      </div>
        <div class={c.inputbox}>
            <span class={c.details}>Address<span style={{"color": "red"}}>*</span></span>
            <textarea cols="80" rows="5" class={c.textarea} placeholder=" Enter the Address" value="Address" name="address"></textarea> 
            {/* <!-- <input type="text" placeholder="Enter your Address" style="text-align:center ; height: 100px ; width: 90% ;" > --> */}
      </div>


        

        <div class={c.title}>Other details</div>
        <div class={c.userdetails}>
          <div class={c.inputbox}>
            <span class={c.details}>Height<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter your Height" name="height" required/>
            </div>
          <div class={c.inputbox}>
            <span class={c.details}>Weight<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter your Weight" name="weight" required/>
            </div>
          <div class={c.inputbox}>
            <span class={c.details}>Occupation<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter your Occupation" name="occupation" required/>
          </div>
        </div>
      
      {/* <!-- <label>Your Image File
        <input type="file" name="myImage" accept="image/*" />
      </label>   --> */}
      <div class="button">
        <input type="submit" value="Register"/>
      </div>

      </form>
    </div>
  </div>

</body>
);
}