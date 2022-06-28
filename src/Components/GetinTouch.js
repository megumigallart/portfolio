import React, { Component, useRef} from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

export const GetinTouch = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gclx7md', 'template_1ykqfiw', form.current, 'pmZCuPhR5yB93o2mQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
return (
    <div>
        <h1>Get in Touch</h1>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    </div>
  );
};
export default GetinTouch;

/*
    
export default class GetinTouch extends Component {
  render() {
    return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>

    )
  }
}
*/
/*      <div style={{
          textAlign: "left",
          paddingTop: "110px"
      }}>
        <h1>Get in Touch</h1>

            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Your name"
                variant="outlined"
                size="small"
                style={{
                    background: "white",
                    borderRadius: "30px"

                }}
            />
            <br /><br />
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Email address"
                variant="outlined"
                size="small"
                style={{
                    background: "white",
                    borderRadius: "30px"

                }}
            />
            <br /><br />
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Subject"
                variant="outlined"
                size="small"
                style={{
                    background: "white",
                    borderRadius: "30px",
                    width: "400px"

                }}
            />
            <br /><br />
            <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                style={{
                    background: "white",
                    borderRadius: "30px",
                    width: "400px"

                }}
            />
            <br /><br />
 
        <a className="btn-main-actv">Send message</a> 
      </div>

*/