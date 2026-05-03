/*
Name: Danielle Dujunco
Date created: 4/28/2026
Date last edited: 5/2/2026
Version: 1.0
Description: Homework 4 JS 
*/

//dynamic date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value + " / 10";
    };

//validates first name
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    // checks if first name field is empty
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else {
        if (!fname.match(namePattern)) {
            //checks if first name matches the pattern
            document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
            return false;
        } else if (fname.length < 2) { //checks if first name has at least 2 characters
            document.getElementById("fname-error").innerHTML = "First name cannot have less than 2 characters.";
            return false;
        } else if (fname.length > 30) { //checks if first name doesn't have more than 30 characters
            document.getElementById("fname-error").innerHTML = "First name cannot have more than 30 characters.";
            return false;
        } else {
            document.getElementById("fname-error").innerHTML = "";
            return true;
        }
    }
}


//validates middile initial
function validateMname() {
    let mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]$/;
    // makes middle initial uppercase
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;
    if (!mname.match(namePattern)) { //checks if middle initial matches pattern
        document.getElementById("mname-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}

//validates last name
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if field is empty
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be left blank."
        return false;
    } else if (lname != "") { //checks if last name matches the pattern
        if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
        } else if (lname.length < 2) { // checks if last name has 2 characters
            document.getElementById("lname-error").innerHTML = "Last name cannot be less that 2 characters.";
            return false;
        } else if (lname.length > 30) { //checks if last name doesnt have more than 30 characters
            document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
            return false;
        } else {
            document.getElementById("lname-error").innerHTML = "";
            return true;
        }
        }
    }

    //validates date of birth
    function validateDob() {
        dob = document.getElementById("dob");
        let date = new Date(dob.value);
        let maxDate = new Date().setFullYear(new Date().getFullYear() -120);

        if (date > new Date()) {
            document.getElementById("dob-error").innerHTML =
            "Date cannot be in the future.";
            dob.value="";
            return false;
        } else if(date < new Date(maxDate)) {
            document.getElementById("dob-error").innerHTML =
            "Date cannot be more than 120 years ago.";
            dob.value="";
            return false;
        } else {
            document.getElementById("dob-error").innerHTML = "";
            return true;
        }
    }
    
    // validates ssn
    function validateSsn() {
        const ssn = document.getElementById("ssn").value;

        //ssn pattern
        const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

        if (!ssnR.test(ssn)) {
            document.getElementById("ssn-error").innerHTML =
            "Please enter a valid Social Security Numner.";
            return false;
        } else {
            document.getElementById("ssn-error").innerHTML = "";
            return true;
        }
    }

    //validates address 1
    function validateAddress1() {
        var ad1 = document.getElementById("address1").value;
        console.log(ad1);
        console.log(ad1.length);

        if (ad1.length < 2) {
            document.getElementById("address1-error").innerHTML =
            "Please enter your address on address line";
            return false;
        } else {
            document.getElementById("address1-error").innerHTML = "";
            return true;
        }
    }

    //validates city
    function validateCity() {
        city = document.getElementById("city").value.trim();

        if (!city) {
            document.getElementById("city-error").innerHTML = "City cannot be left blank.";
            return false;
        } else {
            document.getElementById("city-error").innerHTML = "";
            return true;
        }
    }

    //validates zip code
    function validateZip() {
        const zipInput = document.getElementById("zip");
        let zip = zipInput.value.replace(/[^\d-]/g, ""); // removes any non-number and non-dash characters
        
        if(!zip) {
            document.getElementById("zip-error").innerHTML = "Zip Code cannot be left blank.";
            return false;
        }
        if (zip.length > 5) {
            zip = zip.slice(0,5) + "-" + zip.slice(5,9); // removes all digits after 5 numbers
        } else {
            zip = zip.slice(0,5);
        }
    

        zipInput.value = zip;
        document.getElementById("zip-error").innerHTML = "";
        return true;
    }

    //validates email
    function validateEmail() {
        email = document.getElementById("email").value;
        var emailR = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i; //regular expression pattern for email

        if (email == "") {
            document.getElementById("email-error").innerHTML = "Email Address cannot be left blank.";
            return false;
        } else if (!email.match(emailR)) {
            document.getElementById("email-error").innerHTML = "Please enter a valid Email Address.";
            return false;
        } else {
            document.getElementById("email-error").innerHTML = "";
            return true;
        }
    }

//validates phone number
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g,""); // removes any non-number characters

    if (phone.length != 10) {
        document.getElementById("phone-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    }
    const formattedPhone =
    phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

//validates username
function validateUsername() {
    username = document.getElementById("username").value;

    //converts username to lowercase
    username = username.toLowerCase();
    //display username in lowercase
    document.getElementById("username").value = username;

    if (username.length === 0) {
        document.getElementById("username-error").innerHTML = "Username cannot be left blank.";
        return false;
    }
    
    //checks that username doesn't start with a number
    if (!isNaN(username.charAt(0))){
        document.getElementById("username-error").innerHTML = "Username cannot begin with a number.";
        return false;
    }

    //checks if username consists of only letters numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML = "Username can only contain letters, numbers, or underscores.";
        return false;

    //checks if username does not have 30 characters
    } else if (username.length < 5 ) {
        document.getElementById("username-error").innerHTML = "Username cannot be less than 5 characters.";
        return false;
    } else if (username.length > 30) {
        document.getElementById("username-error").innerHTML = "Username cannot exceed 30 characters.";
        return false;
    } else { //if all of the above is correct then username is valid
        document.getElementById("username-error").innerHTML = "";
        return true;
    }
}

//validates password
function validatePass() {
    const pass = document.getElementById("pass").value;
    const username = document.getElementById("username").value;

    //sets up and initializes array
    const errorMessage = [];

    //checks for lowercase letters
    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    //checks for uppercase letters
    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    //checks for numbers letters
    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }
    //checks for special characters
    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    //checls for username not in password
    if (pass == username || pass.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }
    //displays error message if theres errors
    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
    // return true if no errors, false if errors
    return errorMessage.length === 0;
}

//confirm password validation
function confirmPass() {
    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("cpass").value;

        if (pass1 != pass2) {
            document.getElementById("pass2-error").innerHTML = "Passwords do not match.";
            return false;
        } else {
            document.getElementById("pass2-error").innerHTML = "Passwords match.";
            return true;
        }
    }

    //review button
    function reviewInput() {
        var formcontent = document.getElementById("signup");
        var formoutput = "<table class= 'output'><tr><th colspan='2'>Review Your Information:</th></tr>";

        for (var i=0; i < formcontent.elements.length; i++) {
            var el = formcontent.elements[i];
            var datatype = el.type;
            var name = el.name;
            var value = el.value;

            //skip elements with no name
            if (!name) continue;

            switch (datatype) {
                case "checkbox":
                    if (el.checked) {
                        formoutput += "<tr><td align='right'>" + name + "</td>";
                        formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                
                case "radio":
                    if (el.checked) {
                        formoutput += "<tr><td align='right'>" + name + "</td>";
                        formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                    }
                    break;
                
                case "range":
                    // only show the slider if the user moved it off the default (0)
                    if (value !== "0") {
                        formoutput += "<tr><td align='right'>" + name + "</td>";
                        formoutput += "<td class = 'outputdata'>" + value + "</td></tr>";
                    }
                    break;

                case "button":
                case "submit":
                case "reset":
                    //skip
                    break;
                
                default:
                    if (value!== "") {
                        formoutput += "<tr><td align='right'>" + name + "</td>";
                        formoutput += "<td class ='outputdata'>" + value + "</td></tr>";
                    }
            }
        }

            formoutput += "</table>";
            document.getElementById("showInput").innerHTML = formoutput;
        }

         //remove user input
         function removeReview() {
            document.getElementById("showInput").innerHTML = "";
         }

         //displays an alert box when necessary
         function showAlert() {
            var alertBox = document.getElementById("alert-box");
            var closeAlert = document.getElementById("close-alert");
            
            alertBox.style.display = "block";
            closeAlert.onclick = function() {
                alertBox.style.display = "none";
            };
         }

         //confirms everything on the form
         function validateForm() {
            let valid = true;

            if (!validateFname()) {
                valid = false;
            }
            if (!validateMname()) {
                valid = false;
            }
            if(!validateLname()) {
                valid = false;
            }
            if (!validateDob()) {
                valid = false;
            }
            if (!validateSsn()) {
                valid = false;
            }
            if (!validatePhone()) {
                valid = false;
            }
            if (!validateEmail()) {
                valid = false;
            }
            if (!validateAddress1()) {
                valid = false;
            }
            if (!validateCity()) {
                valid = false;
            }
            if (!validateZip()) {
                valid = false;
            }
            if (!validateUsername()) {
                valid = false;
            }
            if (!validatePass()) {
                valid = false;
            }
            if (!confirmPass()) {
                valid = false;
            }
            if (valid) {
                document.getElementById("submit").disabled = false;
            } 
            else{
                showAlert();
            }
            return valid;
         }

         // when cookies expire
         function setCookie(name, cvalue, expiryDays) {
            var day = new Date();
            day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + day.toUTCString();
            document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
         }

         // gets the value of a cookie by its name
         function getCookie(name) {
            var cookieName = name + "=";
            var cookies = document.cookie.split(';');

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.indexOf(cookieName) == 0) {
                    return cookie.substring(cookieName.length, cookie.length);
                }
            }
            return "";
        }

        var inputs = [
            {id:"fname", cookieName: "firstName"},
            {id:"mname", cookieName: "middleName"},
            {id:"lname", cookieName: "lastName"},
            {id:"dob", cookieName: "dateOfBirth"},
            {id:"ssn", cookieName: "socialSecurityNumber"},
            {id:"phone", cookieName: "phoneNumber"},
            {id:"email", cookieName: "emailAddress"},
            {id:"address1", cookieName: "address1"},
            {id:"city", cookieName: "city"},
            {id:"zip", cookieName: "zipCode"},
            {id:"username", cookieName: "username"},
        ];

        inputs.forEach(function (input) {
            var inputElement = document.getElementById(input.id);

            // Prefill input fields
            var cookieValue = getCookie(input.cookieName);
            if (cookieValue !== "") {
                inputElement.value = cookieValue;
            }

            // Set a cookie when the input field changes
            inputElement.addEventListener("input", function () {
                setCookie(input.cookieName, inputElement.value, 30);
            });
        });

        // greets users with name and message if cookie is set
        var firstName = getCookie("firstName");
        if (firstName !== "") {
            document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
            document.getElementById("welcome2").innerHTML =
                "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

            document.getElementById("new-user").addEventListener("click", function () {
                inputs.forEach(function (input) {
                    setCookie(input.cookieName, "", -1);
                });
                location.reload();
            });
        }

        // toggles cookie storage based on the remember me checkbox state
        document.getElementById("remember-me").addEventListener("change", function () {
            const rememberMe = this.checked;

            if (!rememberMe) {
                // If "Remember Me" is unchecked, delete cookies
                deleteAllCookies();
                console.log("All cookies deleted because 'Remember Me' is unchecked.");
            } else {
                // If "Remember Me" is checked or rechecked, save cookies
                inputs.forEach(function (input) {
                    const inputElement = document.getElementById(input.id);
                    if (inputElement.value.trim() !== "") {
                        setCookie(input.cookieName, inputElement.value, 30);
                    }
             });
            console.log("Cookies saved because 'Remember Me' is checked.");
        }
    });
    // removes all stored cookies by setting their experiation date in the past
    
    function deleteAllCookies() {
        document.cookie.split(";").forEach(function (cookie) {
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        });
    }

    // removes all stored cookies by setting their experiation date in the past
    
    function deleteAllCookies() {
        document.cookie.split(";").forEach(function (cookie) {
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        });
    }

    function loadStateOptions() {
        const stateSelect = document.getElementById("state");
        if (!stateSelect) {
            return;
        }

        fetch("states.html")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Unable to load state options");
                }
                return response.text();
            })
            .then(function (html) {
                stateSelect.innerHTML = html;
            })
            .catch(function (error) {
                stateSelect.innerHTML = "<option disabled>State list unavailable</option>";
                console.error("State load error:", error);
            });
    }

    // makes usre cookies are deleted if remember me is unchecked upon page load
    document.addEventListener("DOMContentLoaded", function () {
        const rememberMe = document.getElementById("remember-me").checked;

        if (!rememberMe) {
            deleteAllCookies();
        }

        loadStateOptions();
    });