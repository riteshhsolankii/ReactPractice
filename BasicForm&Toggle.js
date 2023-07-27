import {useState} from "react";
import React  from "react";
import './style.css';


export function BasicForms(){
    const [userData, setUserData]=useState("");
    const [passData, setPassData]=useState("");
    const [userErr, setUserErr]=useState(false);
    const [passErr, setPassErr]=useState(false);
    const [toggle, setToggle]=useState(1);
    const[toggles, setFPtoggleData]=useState(3);

    function FPtoggles(id){
        setFPtoggleData(id)
    }

    function togglebutton(id){
        setToggle(id);
    }
    
    function formHandler(e){
        e.preventDefault();
    }
    function userHandler(e){
        let item = e.target.value;
        if (item.length<4)
        {
            setUserErr(true);
        }
        else{
            setUserErr(false);
        }
    }
    function passHandler(e)
    {
        let item = e.target.value;
        if(item.length<8){
            setPassErr(true)
        }
        else{
            setPassErr(true)
        }
    }
    return(
        <div className="mainForms">
            <div className="buttons">
                <button className={toggle === 1? "active" :null} onClick={()=>togglebutton(1)}>Log In</button>
                <button className={toggle === 2? "active" :null} onClick={()=>togglebutton(2)}>Sign Up</button>
            </div>
            <div className={toggle === 1? "show-content" :"LoginContent"}>
                <form onSubmit={formHandler}>
                    <div className={toggles === 1? "for-hide" :null}>
                    <div className="userNameInput">
                        <input type="text" onChange={userHandler} placeholder="Username"/>
                        {
                        userErr? 
                        <span>*User Not Valid</span>
                        :null}
                    </div>
                    <div className="passwordInput">
                        <input type="password" onChange={passHandler} placeholder="Password"/>
                        {
                           passErr?
                           <span>*Incorrect Password</span> 
                           :null
                        } 
                    </div>
                    </div>
                    <div className="FPbutton">
                    <button className={toggles === 1? ("FPactive"): null } onClick={()=>FPtoggles(1)}> Forgot Password? </button>
                    <div className={toggles === 1? "ShowFPcontent" :"FPcontent"}>
                        <div className="FP-heaing">
                            <h1>Forgot Your Password</h1>
                        </div>
                        <form>
                            <div className="FPemail">
                                <input type="email" placeholder="Enter Your Email"/>
                            </div>
                            <div className="FPnextButton">
                                <button className="FPnextbutton">Next</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className={toggles === 1? "loginbutton-hide" :null}>
                        <button className="logiinButton" type="submit"> Log In</button>
                    </div>
                </form>
            </div>
            <div className={toggle === 2? "show-content" :"SignUpConten"}>
                <form>
                    <div className="FnameInput">
                        <input type="email" placeholder="Email"/>
                       
                        <input type="username" placeholder="Username" onChange={userHandler}/>
                        {
                        userErr? 
                        <span>*User Not Valid</span>
                        :null}
                        <input type="password" placeholder="Password" onChange={passHandler}/>
                        {
                           passErr?
                           <span>*Incorrect Password</span> 
                           :null
                        } 
                        <input type="password" placeholder="Confirm Password" onChange={passHandler}/>
                        {
                           passErr?
                           <span>*Incorrect Password</span> 
                           :null
                        } 
                        <div className="checkbox-main">
                            <input className="checkbox" type="checkbox"/><p>Accept Terms & Conditions</p>
                        </div>
                        <div>
                            <button className="logiinButton" type="submit"> Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
