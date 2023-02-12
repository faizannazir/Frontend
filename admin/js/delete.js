document.addEventListener("DOMContentLoaded", () => {

    const form = document.forms[0];
    const name = document.getElementById("name");
    const id = document.getElementById("id");
    const error = document.getElementById("error");

    error.style.color = "red";

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (name.value.trim() == "") {
            name.style.borderColor = "red";
            error.innerHTML = "Please provide name";
            return;
        }
        if (!name.value.trim().match(/^[a-z A-Z]{3,}$/)) {
            name.style.borderColor = "red";
            error.innerHTML = "Please provide valid name";
        return;
        }
        name.style.borderColor = "00ce9f";

        if(id.value.trim() == "") {
           id.style.borderColor = "red";
            error.innerHTML = "Please provide id";
            return;
        }
        if (id.value<=0) {
            id.style.borderColor = "red";
            error.innerHTML = "Please provide valid id";
        return;
        }

        id.style.borderColor = "00ce9f";

        form.submit();
    });
});