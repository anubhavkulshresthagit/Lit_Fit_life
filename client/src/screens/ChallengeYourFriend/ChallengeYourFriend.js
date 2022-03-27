import React,{useState} from 'react'
import {Alert,Button} from 'react-bootstrap'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
import './ChallengeYourFriend.css'

const ChallengeYourFriend = () => {
    const [message,setMessage]=useState("");
    const [phone,setPhone]= useState("");
    const [msgSent,setMsgSend]=useState(false);
    const {isAuthenticated, loginWithRedirect} = useAuth0();

    const sendmsg = async () =>{
        setMsgSend(true)
        console.log(phone)
        const res = await axios.post('/api/sendmsg', {message,phone})
    }
    const msg1 = () =>{
        setMsgSend(false)

        setMessage("Today I ran 5 Kms. I challenge you to do the same!")
    }
    const msg2 = () =>{
        setMsgSend(false)

        setMessage("I dont think you can do 10 pullups. Challenge Accepted?")
    }
    const msg3 = () =>{
        setMsgSend(false)

        setMessage("I went to gym consistently for past 3 weeks. You can do the same")
    }
    const msg4 = () =>{
        setMsgSend(false)
        setMessage("I didn't eat cheat meal for past 2 months. I think it is too hard for you")
    }
    return (
        <>
        {isAuthenticated? 
        <div>
        <div className="container text-center">
            <h2 className="text-center headch mt-5">Challenge your Friend Today !!</h2>
            <h3 className="text-center headch3 my-4">Exercising with a friend or loved one can make it more fun, and increase your chances of sticking to your exercise plan.</h3>
        </div>
        <div className="my-5 container alerts">
            <h4 className="text-center headch4 my-3"> Click on the challenge to send it to your friend with Twilio API</h4>
        <Alert className="alertc">
                <h4 className="links text-center" onClick={msg1}>Today I ran 5 Kms. I challenge you to do the same!</h4>
        </Alert>
        <Alert className="alertc">
                <h4 className="links text-center" onClick={msg2}>I dont think you can do 10 pullups. Challenge Accepted?</h4>
        </Alert>
        <Alert className="alertc">
                <h4 className="links text-center" onClick={msg3}>I went to gym consistently for past 3 weeks. You can do the same</h4>
        </Alert>
        <Alert className="alertc">
                <h4 className="links text-center " onClick={msg4}>I didn't eat cheat meal for past 2 months. I think it is too hard for you</h4>
        </Alert>
        </div>
        {message.length>0?
        (<div >
            <h4 style={{border: "2px solid black", backgroundColor: "black", color: "white"}} className="text-center w-75 mx-auto p-4 font-weight-bold">Selected Message: {message}</h4>
            <p className="text-center headph">Enter Phone Number with STD Code to send Message</p>
            {msgSent? <h3 className="text-center">Message Sent Successfuly</h3>: <div>
            <input className="d-block mx-auto mb-3" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <Button variant="dark" className="mb-5 d-block mx-auto" onClick={sendmsg}>Send Message</Button></div>}
        </div>): null
        }
        </div>: loginWithRedirect()}
        
        </>
    )
}

export default ChallengeYourFriend
