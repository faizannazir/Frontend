
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

        if (id.value.trim() <=0) {
            id.style.borderColor="red";
            error.innerHTML = "please enter valid id";
            return;
        }
        
        if (startDateInput.value == "" || endDateInput.value == "") {
            error.innerHTML = "Both fields are requireds ";
            return;
        }
        

        if ((new Date(startDateInput.value).toLocaleDateString().padStart(10, "0")) > today) {
            error.innerHTML = "Start date cannot be after today  date " + today;
            return;

        }
        startDateInput.style.borderColor="#00ce9f";
        if ((new Date(endDateInput.value).toLocaleDateString().padStart(10, "0")) > today) {
            error.innerHTML = "End date cannot be after today date " + today;
            return;

        }
        error.innerHTML = "";

        if (startDateInput.value > endDateInput.value) {
            error.innerHTML = "End date cannot be before start date!";
            return;
        }
        error.innerHTML = "";

        form.submit();
    });
});