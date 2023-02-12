document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms[0];
    const fname = document.getElementById('user_first_name');
    const lname = document.getElementById('user_last_name');
    const email = document.getElementById('user_email');
    const user_pass = document.getElementById("user_pass");
    const user_con_pass = document.getElementById("user_con_pass");
    const showPass = document.getElementById('show');

    const FERROR = document.getElementById('FERROR');
    const LERROR = document.getElementById('LERROR');
    const EMAILERROR = document.getElementById('EMAILERROR');
    const PASSERROR = document.getElementById("PASSERROR");
    const CPASSERROR = document.getElementById("CPASSERROR");


    // Form Validation
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // stop the form from submitting
        if (fname.value.trim().length < 3 || fname.value.trim().length > 12 || !fname.checkValidity()) {
            FERROR.innerHTML = "Please enter first name between 3 to 12 Alphabets characters. </br>";
            FERROR.style.color = "red";
            fname.focus();
            fname.classList.add('error');
            return;
        }
        FERROR.innerHTML = "";
        fname.classList.remove('error');

        if (lname.value.trim().length < 3 || lname.value.trim().length > 12 || !lname.checkValidity()) {
            LERROR.innerHTML = "Please enter last name between 3 to 12 Alphabets characters.</br>";
            LERROR.style.color = "red";
            lname.focus();
            lname.classList.add('error');
            return;
        }
        lname.classList.remove('error');
        LERROR.innerHTML="";
        if(!email.value.trim().match(/^[a-z A-z]+[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}\.[a-z]{2,}$/))
        {
            EMAILERROR.innerHTML= "Please Enter valid Email.</br>";
            EMAILERROR.style.color = "red";
            email.focus();
            email.classList.add('error');
            return;
        }
        email.classList.remove('error');
       EMAILERROR.innerHTML= "";
        if(!user_pass.value.trim().match(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/))
        {
            PASSERROR.innerHTML="Please enter Strong password min length of 8 characters. </br>";
            PASSERROR.style.color ="red";
            user_pass.focus();
            user_pass.classList.add('error');
            return;
        }
        PASSERROR .innerHTML="";
        user_pass.classList.remove('error');

        if(user_con_pass.value.trim() !== user_pass.value.trim())
        {
            CPASSERROR.innerHTML= "Password and confirm password not matched. </br>";
            CPASSERROR.style.color = "red";
            user_con_pass.focus();
            user_con_pass.classList.add('error');
            return;
        }
        CPASSERROR.innerHTML = "";
        user_con_pass.classList.remove('error');

        form.submit();
    });



    // Show Password 
    showPass.addEventListener('change', function () {
        if (this.checked) {
            user_pass.type = "text"
            user_con_pass.type = "text"
        }
        else {
            user_pass.type = "password"
            user_con_pass.type = "password"
        }
    })


});