document.addEventListener("DOMContentLoaded", () => {
    const id = document.getElementById('id');
    const select = document.getElementById('select');
    const label = document.getElementById('label');
    const input = document.getElementById('input');
    const error = document.getElementById('error');
    const form = document.forms[0];

    select.addEventListener("change", () => {
        console.log(select.value);
        if (select.value == "id") {
            label.setAttribute("for", "uid");
            label.innerHTML = "ID";
            input.setAttribute("id", "uid");
            input.setAttribute("name", "uid");
            input.setAttribute("type", "number");
            input.setAttribute("placeholder", "update Id");
            return
        }

        if (select.value == "name") {
            label.setAttribute("for", "name");
            label.innerHTML = "Name";
            input.setAttribute("id", "name");
            input.setAttribute("name", "name");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "update name");
            return
        }

        if (select.value == "email") {
            label.setAttribute("for", "email");
            label.innerHTML = "Email";
            input.setAttribute("id", "email");
            input.setAttribute("name", "email");
            input.setAttribute("type", "email");
            input.setAttribute("placeholder", "update email");
            return
        }

        if (select.value == "dob") {
            label.setAttribute("for", "dob");
            label.innerHTML = "Date Of Birth";
            input.setAttribute("id", "dob");
            input.setAttribute("name", "dob");
            input.setAttribute("type", "date");
            return
        }
        if (select.value == "contact") {
            label.setAttribute("for", "contact");
            label.innerHTML = "contact";
            input.setAttribute("id", "contact");
            input.setAttribute("name", "contact");
            input.setAttribute("type", "tel");
            input.setAttribute("placeholder", "update contact no");
            return
        }
        if (select.value == "department") {
            label.setAttribute("for", "department");
            label.innerHTML = "Update department";
            input.remove();
            const department = document.createElement("select");
            label.insertAdjacentElement("afterend", department)
            department.setAttribute("name", "department");
            department.setAttribute("id", "department");

            var option = document.createElement("option");
            option.setAttribute("value", "IT");
            option.innerHTML = "IT Department";
            department.appendChild(option);

            option = document.createElement("option");
            option.setAttribute("value", "HR");
            option.innerHTML = "HR Department";
            department.appendChild(option);

            option = document.createElement("option");
            option.setAttribute("value", "management");
            option.innerHTML = "management Department";
            department.appendChild(option);

            return
        }
        else {
            label.innerHTML = "";
            input.setAttribute("type", "hidden");
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (id.value == "") {
            id.style.outline.borderColor = "red";
            error.innerHTML = "Id is required";
            return;
        }

        if (id.value <= 0) {
            id.style.borderColor = "red";
            error.innerHTML = "Please enter valid id";
            return;
        }

        id.style.borderColor = "#00ce9f";

        if (select.value == "") {
            select.borderColor = "red";
            error.innerHTML = "Please select a field to update";
            return;
        }
        // Selected field 
        switch (select.value) {
            case "id":
                const uid = document.getElementById("uid");
                if (uid.value == "") {
                    error.innerHTML = "Please enter a new id";
                    uid.style.borderColor = "red";
                    return;
                }
                else if (uid.value <= 0) {
                    uid.style.borderColor = "red";
                    error.innerHTML = "Please enter valid id";
                    return;
                }
                else if (uid.value == id.value) {
                    uid.style.borderColor = "red";
                    error.innerHTML = "old id and new id both are same ";
                    return;
                }
                else {
                    error.innerHTML = "";
                    uid.style.borderColor = "#00ce9f";
                }

                break;

            case "name":
                const name = document.getElementById("name");
                if (name.value.trim() == "") {
                    error.innerHTML = "Name field is empty";
                    name.style.borderColor = "red";
                    return;
                }
                else if (!name.value.match(/^[a-zA-Z]{3,}$/)) {
                    name.style.borderColor = "red";
                    error.innerHTML = "Please enter valid name";
                    return;
                }
                else {
                    error.innerHTML = "";
                    name.style.borderColor = "#00ce9f";
                }
                break;

            case "email":
                const email = document.getElementById("email");
                if (email.value.trim() == "") {
                    error.innerHTML = "Email field is empty";
                    email.style.borderColor = "red";
                    return;
                }
                else if (!email.value.match(/^[a-z A-z]+[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}\.[a-z]{2,}$/)) {
                    email.style.borderColor = "red";
                    error.innerHTML = "Please enter valid id";
                    return;
                }
                else {
                    error.innerHTML = "";
                    email.style.borderColor = "#00ce9f";
                }

                break;
            case "dob":
                const dob = document.getElementById("dob");
                if (dob.value.trim() == "") {
                    error.innerHTML = "Date 0f Birth field is empty";
                    dob.style.borderColor = "red";
                    return;
                }
                else if (!dob.value.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)) {
                    dob.style.borderColor = "red";
                    error.innerHTML = "Please enter valid dob ";
                    return;
                }
                else {
                    error.innerHTML = "";
                    dob.style.borderColor = "#00ce9f";
                }
                break;

            case "contact":
                const contact = document.getElementById("contact");
                if (contact.value.trim() == "") {
                    error.innerHTML = "Contact field is empty";
                    contact.style.borderColor = "red";
                    return;
                }
                else if (!contact.value.match(/^[a-z A-z]+[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}\.[a-z]{2,}$/)) {
                    contact.style.borderColor = "red";
                    error.innerHTML = "Please enter valid contact no";
                    return;
                }
                else {
                    error.innerHTML = "";
                    contact.style.borderColor = "#00ce9f";
                }

                break;

            case "department":
                const department = document.getElementById("department");
                if (department.value.trim() == "") {
                    error.innerHTML = "Department field is empty";
                    department.style.borderColor = "red";
                    return;
                }
                else if (!department.value.match(/^(IT|HR|management)$/)) {
                    department.style.borderColor = "red";
                    error.innerHTML = "Please select valid department";
                    return;
                }
                else {
                    error.innerHTML = "";
                    department.style.borderColor = "#00ce9f";
                }
                break;
            default:
                select.borderColor = "red";
                error.innerHTML = "Invalid selected field";
                return;

        }
        error.innerHTML = "";
        form.submit();

    });

});



