document.addEventListener("DOMContentLoaded",()=>
{
    const form = document.forms[0];
    const email = document.getElementById('user_email');
    const user_pass = document.getElementById("user_pass");
    const showPass = document.getElementById('show');  
    const EMAILERROR = document.getElementById("email-error");
    const PASSERROR = document.getElementById("pass-error");
    // Show Password 
    showPass.addEventListener('change', function () {
        if (this.checked) {
            user_pass.type = "text";
        }
        else {
            user_pass.type = "password";
        }
    })


form.addEventListener('submit',(event) => 
{
    event.preventDefault(); // stop the form from submitting

    if((!email.value.trim().match(/^[a-z A-z]+[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}\.[a-z]{2,}$/)))
    {
        email.focus();
        email.classList.add('error');
        EMAILERROR.innerHTML = "Please enter valid Email address";
        EMAILERROR.style.color="red";
        return;
    }
    email.classList.remove('error');
    EMAILERROR.innerHTML="";

    if(!user_pass.value.trim().match(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/))
    {
        user_pass.focus();
        user_pass.classList.add('error');
        PASSERROR.innerHTML = "Password must contain [upper case, lower case, 1 Special character and number] </br>";
        PASSERROR.style.color="red";
        return;
    }
    PASSERROR.innerHTML="";

    form.submit();
});



});