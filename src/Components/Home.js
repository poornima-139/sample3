import React from 'react';
import { Link } from "react-router-dom";
import "./css/home.css";
export default function Home() {
    return (
       <body class='homebody'>
      <div>
        {/* <img id="logo" src="https://genpactonline.sharepoint.com/sites/Pacers-Team2/Shared%20Documents/General/logo3.png" alt="Italian Trulli"/> */}
        <div class="wrapper">
          <div class="static-txt">We</div>
            <ul class="dynamic-txts">
              <li><span>Care!</span></li>
              <li><span>Save!</span></li>
              <li><span>Connect!</span></li>
              <li><span>Help!</span></li>
            </ul>
          </div>
          <button id="vertical-center1"><Link id="b1" to="/PatientLogin"><span style={{"color":"black"}}><i class="fa-solid fa-user"></i> Patient</span></Link></button>
          <button id="vertical-center2"><Link id="b2" to="/DoctorLogin"><span style={{"color":"black"}}><i class="fa-solid fa-user"></i> Doctor</span></Link></button>
          <div class="welcome">
        Welcome To<br/><span style={{"fontSize":"100px"}}>Gen</span><span style={{"color":"#2AC9C9", "fontWeight": "700","fontSize":"100px"}}>Health</span>
          </div>
          <div class="second">
      Consult Top Doctors For Any Health Reason
            <table id="t1">
              <tr>
                <td id="t11"><img class="zoom" src="https://thumbs.dreamstime.com/b/acn%C3%A9-problema-facial-de-la-piel-69386350.jpg" width="100px" height="100px"/></td>
                <td id="t12"><img class="zoom" src="https://webstockreview.net/images/cold-clipart-cold-cough-17.png" width="240" height="240"/></td>
                <td id="t13"><img class="zoom" src="https://i.pinimg.com/originals/49/ca/da/49cada834f5d045fd0d5c421c38c8520.png" width="240" height="240"/></td>
                <td id="t14"><img class="zoom" src="https://static.vecteezy.com/system/resources/previews/000/542/211/original/depression-people-affect-on-mental-health-vector-illustration.jpg" width="240" height="240"/></td>
                <td id="t15"><img class="zoom" src="https://da-img.s3.amazonaws.com/opd.png" width="200" height="240"/></td>
              </tr>
            </table>
      </div>
    <br/>

    <div class="third">
      <hr/>
      
      <table id="t2">
        <tr>
          <td id="t21"><span style={{"color":"white", "fontWeight":"350", "fontSize":"40px"}}>Book an</span><br/><span style={{"color":"#2AC9C9", "fontWeight": "400","fontSize":"60px"}}>Appointment </span><br/><span style={{"color":"white", "fontWeight":"350", "fontSize":"40px"}}>online...</span></td>
          <td id="t22"><img class="radius" src="https://wallpaperaccess.com/full/3275630.jpg" width="600px" height="450px"/></td>
        </tr>
      </table>
      

      <table id="t3">
        <tr>
          <td id="t32"><img class="radius" src="https://media.istockphoto.com/photos/doctor-video-conferencing-with-male-colleague-on-computer-picture-id1150345456?k=6&m=1150345456&s=170667a&w=0&h=693HnzDxpzXKgrO4nj-_knJ5Np18-HbIOJGhrMB7CZA=" width="600px" height="450px"/></td>
          <td id="t31"><span style={{"color":"black", "fontWeight":"350", "fontSize":"40px"}}>Connect via</span><br/><span style={{"color":"#2AC9C9", "fontWeight": "400","fontSize":"60px"}}>Live Chats </span><br/><span style={{"color":"black", "fontWeight":"350", "fontSize":"40px"}}>with Doctors...</span></td>
        </tr>
      </table>
    </div>

    <div class="fourth">
      <hr/>
      
      <table id="t4">
        <tr>
          <td id="t41"><span style={{"color":"white", "fontWeight":"350", "fontSize":"40px"}}>Get Your</span><br/><span style={{"color":"#2AC9C9", "fontWeight":"400","fontSize":"60px"}}>Test Reports </span><br/><span style={{"color":"white", "fontWeight":"350", "fontSize":"40px"}}>online...</span></td>
          <td id="t42"><img class="radius" src="https://www.ghp-news.com/wp-content/uploads/2019/12/blood-tests.jpg" width="600px" height="450px"/></td>
        </tr>
      </table>
      

      <table id="t5">
        <tr>
          <td id="t52"><img class="radius" src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" width="600px" height="450px"/></td>
          <td id="t51"><span style={{"color":"black", "fontWeight":"350", "fontSize":"40px"}}>Search For</span><br/><span style={{"color":"#2AC9C9", "fontWeight": "400","fontSize":"60px"}}>Hospitals/Clinics </span><br/><span style={{"color":"black", "fontWeight":"350", "fontSize":"40px"}}>nearby...</span></td>
        </tr>
      </table>
    </div>

    <div class="fifth">
      <span style={{"color":"#2AC9C9", "fontWeight": "400","fontSize":"80px"}}>About </span><span style={{"color":"white", "fontWeight": "400","fontSize":"80px"}}>Us! </span><br/><br/>
      <span style={{"color":"white", "fontWeight": "200","fontSize":"20px"}}>"Gen Health" is a centralized healthcare system that aims to streamline the process of healthcare delivery. The website provides patients and healthcare providers with a comprehensive platform to manage patient records, schedule appointments, engage in patient-doctor chats, and provide feedback and ratings. The website's main features include the collection and organization of patient records, secure storage of records, efficient retrieval of records, easy access to records, updating records, integration with other healthcare systems, appointment scheduling, patient-doctor chat, and rating and feedback.

        With Gen Health, patients can access their medical records from any location, at any time. </span>
    </div>

    <div class="sixth">
      <footer>
        
      </footer>
    </div>
    </div>
    </body> 
    );
}

