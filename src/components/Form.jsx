import "../scss/Form.scss";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

import checkMark from "../assets/check-mark.png"
import exclamationMark from "../assets/exclamation-mark.png"
import load from "../assets/reload.png"



const Form = () => {

    const form = useRef();

    const [message, setmessage] = useState({message: "Hide" ,Success: "Off", Error: "Off"});
    const [loading, setloading] = useState({h1: "", img: "Off"});

    const sendEmail = (e) => {
        e.preventDefault();
        setloading({h1: "Off", img: "load"})
    
        emailjs.sendForm('service_ljnwy5e', 'template_yip3hwj', e.target, 'X1ASFcI6nV7xA9411')
          .then((result) => {
              console.log(result.text);
              setmessage({message: "Smessage" ,Success: "Success", Error: "Off"});
              setTimeout(() => {
                setmessage({message: "Hide" ,Success: "Off", Error: "Off"})
              }, 2000)
              setloading({h1: "", img: "Off"});
              e.target.reset()
          }, (error) => {
              console.log(error.text);
              setmessage({message: "Smessage" ,Success: "Off", Error: "Error"});
              setTimeout(() => {
                setmessage({message: "Hide" ,Success: "Off", Error: "Off"})
              }, 2000)
              setloading({h1: "", img: "Off"})
          });
      };


    
    return (
        <div id="Form">
            
            <form ref={form} onSubmit={ sendEmail }>
                <div>
                    <label>Name</label>
                    <input name="name" id="name" type="text" required />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" id="email" type="email" required  />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" type="text"></textarea>
                </div>
                <div>
                    <button type="submit" value="Download CTA">
                        <h1 className={ loading.h1 }>submit</h1>
                        <img className={ loading.img } src={ load } alt="" />
                    </button>
                    <div className={ message.message }>
                        <h1 className={ message.Success }><img src={ checkMark } alt="#" />Success</h1>
                        <h1 className={ message.Error }><img src={ exclamationMark } alt="#" />Error</h1>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Form