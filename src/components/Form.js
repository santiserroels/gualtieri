import React from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";


export default function FormHome() {
    const succes = <div class="alert alert-success" role="alert">¡Mensaje enviado!</div>
    const error2 = <div class="alert alert-danger" role="alert">¡Mensaje no enviado!</div>
    const [mensajeAlert, setMensajeAlert] = React.useState("")
    const recaptchaRef = React.createRef();

  function sendEmail(e) {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    const form  = Array.from(e.target.childNodes) 
    const arrayFrom = form.map(e=>e.value)
    const email = {
            email: arrayFrom[1],
            name: arrayFrom[0],
            phone: arrayFrom[2],
            about: arrayFrom[3],
            message: arrayFrom[4],
            reply_to: arrayFrom[1],
            }
    if (recaptchaValue !== "" && email.name.length !== 0 && email.phone.length !== 0 && email.about.length !== 0 && email.message.length !== 0){
    
      emailjs.send('service_j9ql35v', 'template_iox6uig', email, 'user_lv4rmCysUH0l11rwicUB5')
        .then((result) => {
            console.log(result)
          setMensajeAlert(succes);
          setTimeout(() => {
             setMensajeAlert("")
          }, 2000);
        }, (error) => {
          console.log(error)
          setMensajeAlert(error2);
          setTimeout(() => {
            setMensajeAlert("")
         }, 2000);
        });
    }else{
      setMensajeAlert(<div class="alert alert-warning" role="alert">¡Verifique el ReCAPTCHA y los campos!</div>)
      setTimeout(() => {
        setMensajeAlert("")
     }, 2000);
    }
    
  }


  return (
    <div>
        <form className="p-4 form-home d-flex flex-column" id="formHome" onSubmit={sendEmail}>
            <input className="my-4 input" type="text" id="Name" placeholder="Nombre y apellido" name="Name" />
            <input className="my-4 input" type="email" id="Email" placeholder="Email" name="Email" />
            <input className="my-4 input" type="tel" id="Phone" placeholder="Teléfono" name="Phone" />
            <input className="my-4 input" type="text" id="Asunto" placeholder="Asunto" name="Asunto" />
            <textarea className="my-4 input" type="text" id="message" placeholder="Consulta" name="message" />
            <ReCAPTCHA
              sitekey="6Lc1__EaAAAAAJxL3k8jskCk5Ft44A9edbAUbSnD"
              onChange={(e)=>console.log(e)}
              ref={recaptchaRef}
            />,
             <div className="d-flex justify-content-end" >
                <input type="submit" value="> Enviar" className="btn btn-light btn-send  mt-5 px-5" />
            </div> 
        </form>
        {mensajeAlert}
    </div>
    
    
  );
}