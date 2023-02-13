document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms[0];
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const contact = document.getElementById('contact');
    const dob = document.getElementById('dob');
    const id = document.getElementById('id');
    const department = document.getElementById('department');
    const image = document.getElementById('image');
    const user_pass = document.getElementById("password");
    const user_con_pass = document.getElementById("confirmpassword");
    const error = document.getElementById("error");
    error.style.color = "red";


    // Form Validation
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // stop the form from submitting

        // Validate name input
        if (!name.value.trim().match(/^[a-zA-Z]{3,12}$/)) {
            error.innerHTML = "Please enter first name between 3 to 12 Alphabets characters. </br>";
            name.style.borderColor = "red";
            name.focus();
            return;
        }
        name.style.borderColor = "#00ce9f";

        // Validate email input
        if (!email.value.trim().match(/^[a-zA-Z]+[a-z0-9._%+-]{1,}@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            error.innerHTML = "Please Enter valid Email.</br>";

            email.focus();
            email.style.borderColor = "red";
            return;
        }
        email.style.borderColor = "#00ce9f";

        // Validate contact input
        if (!contact.value.trim().match(/^(?:\+923|03)\d{9}$/)) {
            error.innerHTML = "Please Enter valid contact no.</br>";

            contact.focus();
            contact.style.borderColor = "red";
            return;
        }
        contact.style.borderColor = "#00ce9f";
        //  Date of birth validation 
        if (!dob.value.trim().match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)) {
            error.innerHTML = "Please Enter valid date of birth.</br>";
            dob.focus();
            dob.style.borderColor = "red";
            return;
        }
        dob.style.borderColor = "#00ce9f";

        // ID validation
        if (id.value <= 0) {
            id.style.borderColor = "red";
            id.focus();
            error.innerHTML = "Please enter valid id";
            return;
        }

        id.style.borderColor = "#00ce9f";

        // Department validation
        if (!department.value.match(/^(IT|HR|management)$/)) {
            department.style.borderColor = "red";
            error.innerHTML = "Please select valid department";
            return;
        }
        department.style.borderColor = "#00ce9f";


        // image validation
        if (!image.value.match(/(.*?)\.(jpeg|jpg|png|gif)$/))
        {
            image.style.borderColor = "red";
            error.innerHTML = "Please select valid department";
            return;
        }
        image.style.borderColor = "#00ce9f";

        // Validate password and confirm password inputs
        if (user_pass.value !== user_con_pass.value) {
            error.innerHTML = "Password and Confirm Password do not match.";

            user_pass.style.borderColor = "red";
            user_con_pass.style.borderColor = "red";
            user_pass.focus();
            return;
        }
        user_pass.style.borderColor = "#00ce9f";
        user_con_pass.style.borderColor = "#00ce9f";
        error.innerHTML ="";

        form.submit();
    });
});

