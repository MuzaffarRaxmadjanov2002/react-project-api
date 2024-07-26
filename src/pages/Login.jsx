import './Login.css';
import { FaRegUser } from "react-icons/fa6";
import { TbLock } from "react-icons/tb";
import { useState } from 'react';
import { FaX } from "react-icons/fa6";
import { Link } from 'react-router-dom'
function Login() {
    const [data, setData]= useState (false)
  return (
  <div className='Login'>
        {data&&<Link onClick={()=>setData(false)}  to={'/login'}><ul><p href="">  </p></ul></Link>}
  


    <div  className="container">
      {!data&&<Link to={'/'}><FaX className='fax' onClick={()=>setData(false)}/> </Link>}
      

     
      


       <div className="login">
        <h1>Login</h1>
       </div>
       <div className="user">
        <h5>Username</h5>
       </div>
       <div className="input">
       <FaRegUser className='userr' />
       <input type="text" placeholder='username' />
       </div>
       <div className="pasword">
        <h5>Password</h5>
       </div>
       <div className="psword">
       <TbLock className='block' />
       <input type="password" placeholder='password' />
       </div>
       <div className="mainn">
        <h1></h1>
        
         <p> Forgot password?</p>
        
       </div>
       <div className="logiin">
        <Link to={'/admin'}>
            <button className='lognn'>Login</button>
        </Link>
       </div>
       <div className="signup">
        <div className="ttx">Or Sign Up Using</div>
       </div>
       <div className="face">
        <img className='facebok' src="https://tropicalbiology.org/wp-content/uploads/2020/04/04151aff5353e4ae9f9d74fdfaaba5f2_icon-transparent-background-high-quality-png-clipart-facebook-logo_1500-1500-e1586832676915.png" width={40} height={40} alt="" />
        <img className='twitter' src="https://www.pikpng.com/pngl/b/252-2529362_logo-longstore-organization-black-and-white-crescent-twitter.png" width={40} height={40} alt="" />
        <img className='google' src="https://media.sketchfab.com/models/7e904bea654b40d7861c84a7cb5cc969/thumbnails/fbc5c89e1d394041a4afa01e52e18b9c/fcb509ae240f41f1a4c8b50ac903fbda.jpeg" width={40} height={40} alt="" />
       </div>
       <div className="sign">
        <div className="qwe">Or Sign Up Using</div>
       </div>
       <div className="up">
        <h5>SIGN UP</h5>
       </div>
      </div>
  

  
    </div>
  );
}

export default Login;