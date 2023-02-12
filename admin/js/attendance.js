
document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms[0];
    const id = document.getElementById("id");
    const startDateInput = document.getElementById("from");
    const endDateInput = document.getElementById("to");
    const error = document.getElementById("error");
    error.style.textAlign = "center";
    error.style.color = "red";
    // Get the current date in mm/dd/yyyy format
    const today = new Date().toLocaleDateString().padStart(10, "0");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // stop the form from submitting

        if(id.value.trim() =="")
        {
            id.style.borderColor="red";
            error.innerHTML = "please enter id";
            return;
        }
        if (id.value.trim() <=0) {
            id.style.borderColor="red";
            error.innerHTML = "please enter valid id";
            return;
        }
        id.style.borderColor = "#00ce9f";
        
        if (startDateInput.value == "" || endDateInput.value == "") {
            error.innerHTML = "Both fields are requireds ";
            return;
        }
        
        if ((new Date(startDateInput.value).toLocaleDateString().padStart(10, "0")) > today) {
            startDateInput.style.borderColor = "red";
            error.innerHTML = "Start date cannot be after today  date " + today;
            return;
        }

        startDateInput.style.borderColor="#00ce9f";
        if ((new Date(endDateInput.value).toLocaleDateString().padStart(10, "0")) > today) {
            endDateInput.borderColor = "red";
            error.innerHTML = "End date cannot be after today date " + today;
            return;

        }   
        endDateInput.style.borderColor = "#00ce9f";
    

        if (startDateInput.value > endDateInput.value) {
            startDateInput.style.borderColor = "red";
            error.innerHTML = "End date cannot be before start date!";
            return;
        }
        startDateInput.style.borderColor="#00ce9f";
        error.innerHTML = "";

        form.submit();
    });
});