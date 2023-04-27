import React from 'react';
import { Link } from "react-router-dom";
import b from "./css/doctorCreateProfile.module.css";

export default function DoctorCreateProfile() {
    return (
        <body class={b.dcreatebody}>
  

  <div class={b.container}>
    <div class={b.title}>Doctor Registration</div>
    
    <div class={b.upload}>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZSuJ75bwz4WIxybUZPFn09NBt7wmLQFFF11o5OKry-Io-f2_0sW4ugSOtEtGpYeKLNw&usqp=CAU" style={{"width" : "100", "height" : "100"}} alt=""/> */}
      <div class={b.round}>
        <input type="file"/>
        <i class = {b.fafacamera} style = {{"color": "#fff"}}></i>
      </div>
    </div>
   

    <div class={b.content}>
      <form action="#">
        <div class={b.userdetails}>
          <div class={b.inputbox}>
            <span class={b.details}>Full Name<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter your name" value="{{naming}}" required/>
          </div>

          <div class={b.inputbox}>
            <span class={b.details}>Contact Number<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter your number" required/>
          </div>

          <div class={b.inputbox}>
            <span class={b.details}>Educational Qualification<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="Enter specialisation" required/>
          </div>

          <div class={b.inputbox}>
            <span class={b.details}>Specialisation<span style={{"color": "red"}}>*</span></span>
            {/* <!-- <input type="text" placeholder="Enter Educational Qualification" required> --> */}
            <select name="membership" class="membership">
              <option value="Neurologist">Neurologist</option>
              <option value="Dentist">Dentist</option>
              <option value="ENT" selected>ENT</option>
              <option value="Oncologist">Oncologist</option>
              <option value="Cardiologist" selected>Cardiologist</option>
              <option value="Orthopedic" selected>Orthopedic</option>
              <option value="Gynecologist" selected>Gynecologist</option>
              <option value="Dermatologist" selected>Dermatologist</option>
              <option value="Opthalmologists" selected>Opthalmologists</option>
            </select>
          </div>
          <div class={b.inputbox}>
            <span class={b.details}>Experience (in Years)<span style={{"color": "red"}}>*</span></span>
            <input type="text" placeholder="in Years" required/>
          </div>

          {/* <!--<div class={b.inputbox}>
            <span class={b.details}>Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>--> */}
          </div>
          <div class={b.genderdetails}>
            <input type="radio" name="gender" id="dot-1"/>
            <input type="radio" name="gender" id="dot-2"/>
            <input type="radio" name="gender" id="dot-3"/>
            <span class={b.gendertitle}>Gender<span style={{"color": "red"}}>*</span></span>
            <div class={b.category}>
            <label for="dot-1">
            <span class={b.dotone}></span>
            <span class={b.gender}>Male</span>
            </label>
          <label for="dot-2">
            <span class={b.dottwo}></span>
            <span class={b.gender}>Female</span>
          </label>
          <label for="dot-3">
            <span class={b.dotthree}></span>
            <span class={b.gender}>Prefer not to say</span>
            </label>
          </div>
        
      </div>
        <div class={b.inputbox}>
            <span class={b.details}>Address<span style={{"color": "red"}}>*</span></span>
            <textarea cols="80" rows="5" class={b.textarea} placeholder=" Enter the Address" value="Address"></textarea> 
            {/* <!-- <input type="text" placeholder="Enter your Address" style="text-align:center ; height: 100px ; width: 90% ;" > --> */}
      </div>
      <br/>

      <div class={b.inputbox}>
        <span class={b.details}>Upload Your ID<span style={{"color": "red"}}>*</span></span>
        <label>Your ID
          <input type="file" name="myImage" accept="image/*" />
        </label>   
        <div class={b.button}>
          <input type="submit" value="Register"/>
        </div>
      </div>

      </form>
    </div>
  </div>

</body>
);
}