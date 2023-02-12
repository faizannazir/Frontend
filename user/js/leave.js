
const form = document.forms[0];
const dateInput = document.getElementById('date');
const reasonInput = document.getElementById('reason');
const error = document.getElementById('error');
error.style.color = "red";
error.style.textAlign = "center";
error.style.display = "block";

form.addEventListener('submit', (event) => {

    event.preventDefault();
    let currentDate = new Date().toLocaleDateString().padStart(10,"0");

    if (new Date(dateInput.value).toLocaleDateString().padStart(10,"0") < currentDate) {
        
        dateInput.style.border="solid 3px red";
        error.innerHTML="Please select valid date";
        return;
    }

    if (!reasonInput.value.trim().match(/[a-z A-Z]{10,}/)) {
       reasonInput.style.border="solid 3px red";
       error.innerHTML="Please enter minimum 10 characters ";
        return;
    }

       form.submit(); 
    
});