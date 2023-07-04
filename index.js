const sendMail = () =>{
    let params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    const serviceID = "service_l5htv2u";
    const templateID = "template_ixex5fm";
    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message is sent successfully.")
        }
    )
    .catch(err => {
        console.log(err);
        alert("Your message was not sent.")
    })
}


