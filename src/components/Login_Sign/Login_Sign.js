import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseFirebase from '../../Hooks/UseFirebase';
import './Login_Sign.css';


const LoginSign = () => {
   
const { googleSignIn, signWithFacebook, user, signOut } = UseFirebase();

const location = useLocation();
const history = useHistory();
const redirect_url = location.state?.from || "/home";

const signInWithGoogle = () => {
    googleSignIn()
        .then(()=> {
            history.push(redirect_url);
        })
     
}

const signInWithFacebook = () => {
    signWithFacebook()
       .then(()=> {
          history.push(redirect_url);
      })
}   

const handaleSignOut = () => {
    signOut();
}

const handaleSignUp = () => {
    const formBox = document.getElementById("formBox");
    const body = document.querySelector(".body");
    formBox.classList.add("active");
    body.classList.add("active");
}
const handaleSignIn = () => {
    const formBox = document.getElementById("formBox");
    const body = document.querySelector(".body");
    formBox.classList.remove("active");
    body.classList.remove("active"); 
}

    return (

    <div className="body">    
        <div className="container">
        <div className="form-container">
            
            <div className="box signIn">
                <h3>Already Have an Account ?</h3>
                <button id="signinBtn" onClick={handaleSignIn}>Sign in</button>
            </div>

            <div className="box signUp">
                <h3>Don't Have an Account ?</h3>
                <button id="signupBtn" onClick={handaleSignUp}>Sign Up</button>
            </div>

        </div>

        <div id="formBox">
            <div className="form signinForm">
            <form>
                <span>{user.displayName}</span>
                <h3>Sign In</h3>
                <input type="email" placeholder="Enter your Email"/>
                <input type="password" placeholder="Enter your Password"/>
                <button onClick={handaleSignOut}>Sign Out</button>
                <input type="submit" value="Sign In"  className=" p-2 submitBtn" /><br />
                <a href className="text-danger text-center forgetText"> Forget Password ?</a><br /><br />
                <small>----------------- Or sign in with -----------------</small>
                <aside className="SocialIcon">
                    <span onClick={signInWithFacebook}  className="SignMethod"><i class="fab fa-facebook"></i></span>
                    <span onClick={signInWithGoogle} className="SignMethod"><i class="fab fa-google"></i></span>
                </aside>
            </form>
            </div>

            <div className="form signUpForm">
            <form>
                <h3>i ba Hello</h3>
                <p>dolor sit amet consectetur adipisicing elit. A accusamus vel officia sint dolores perspiciatis sequi nihil facere quidem rerum molestiae, ad non adipisci, reiciendis possimus. Nihil dolores consequuntur consequatur in pariat</p>
            </form>
            </div>
        </div>

    
    </div>
    </div>
    );
};

export default LoginSign;