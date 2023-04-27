import React from 'react';
import { Link } from "react-router-dom";
import y from "./css/doctorSignup.module.css";

export default function DoctorSignup() {
    return (
		<body class={y.docbody}>
        <div>
{/* <img src="https://genpactonline.sharepoint.com/sites/Pacers-Team2/Shared%20Documents/General/logo_transparent%20(2).png" alt="Logo" style={{"position": "absolute", "top": "0", "left": "0", "height":"150px", "width":"150px", "left":"20px"}}/>  */}
{/* {{!-- <h1 style="color:#f8fefe; "> DOCTOR SIGN-UP</h1> --}} */}
<div class={`${y.container} ${y.rightpanelactive}`}>
	<div class={`${y.container__form} ${y.container__signup}`}>
		<form action="/doctor_signup_data" class={y.docform} id="form1" method="POST">
			<h2 class={y.form__title}>Doctor Sign Up</h2>
			<input type="text" placeholder="Full Name" class={y.input} name="user" />
			<input type="email" placeholder="Email" class={y.input} name="email" />
			<input type="password" placeholder="Password" class={y.input} name="password" />
			 <button class={y.btn} type="submit"><Link style={{"textDecoration": "none", "color": "white"}} to="/DoctorCreateProfile">Sign Up</Link></button> 
		</form>
	</div>
    </div>
    </div>
	</body>
    );
    }