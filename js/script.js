// set the focus state on the Name field when the app loads
document.getElementById("name").focus();

// hide the Job Role text field when app loads
document.getElementById("other-job-role").hidden = true;

// show Credit Card as the selected method of payment when the app loads
document.querySelector("option[value='credit-card']").selected = "true";

// hide PayPal and Bitcoin info when the app loads
document.getElementById("paypal").style.display = "none";
document.getElementById("bitcoin").style.display = "none";

// disable the Color element
document.getElementById("color").disabled = true;

// create an event listener for the Job Role dropdown
document.getElementById("title").addEventListener("change", () => {
  // hide text field initially
  document.getElementById("other-job-role").hidden = true;
  // show the text field when "other" is selected
  if (document.querySelector("option[value='other']").selected === true) {
    document.getElementById("other-job-role").hidden = false;
  }
});

// create an event listener for the Design dropdown
document.getElementById("design").addEventListener("change", () => {
  const colorDropdown = document.getElementById("color");

  // enable first option, set the text content, and select it
  colorDropdown.disabled = false;
  colorDropdown[0].textContent = "Please select a color"
  colorDropdown[0].selected = "true"

  // show available colors based on the selected Design
  document.querySelectorAll("option[data-theme]").forEach((element) => {
    // hide all colors initially
    element.hidden = true;

    if (document.querySelector("option[value='js puns']").selected === true) {
      if (element.dataset.theme === "js puns") {
        element.hidden = false;
      }
    }

    if (document.querySelector("option[value='heart js']").selected === true) {
      if (element.dataset.theme === "heart js") {
        element.hidden = false;
      }
    }
  });
});

// create an event listener for the Activities section
document.getElementById("activities").addEventListener("change", (e) => {
  const activities = document.querySelectorAll("input[type='checkbox']");
  const costDisplay = document.getElementById("activities-cost");
  let cost = 0;

  // update the cost when an activity is checked or unchecked
  activities.forEach((activity) => {
    if (activity.checked === true) {
      cost += parseInt(activity.dataset.cost);
    }
  });

  costDisplay.textContent = `Total: $${cost}`;


  //TODO add focus to the activities when the user tabs through the form
});

// create an event listener for the Payment section
document.getElementById("payment").addEventListener("change", () => {
  // hide all payment info initially
  document.getElementById("credit-card").style.display = "none";
  document.getElementById("paypal").style.display = "none";
  document.getElementById("bitcoin").style.display = "none";

  // show appropriate payment info based on selected method
  if (document.querySelector("option[value='credit-card']").selected === true) {
    document.getElementById("credit-card").style.display = "";
  }
  if (document.querySelector("option[value='paypal']").selected === true) {
    document.getElementById("paypal").style.display = "";
  }
  if (document.querySelector("option[value='bitcoin']").selected === true) {
    document.getElementById("bitcoin").style.display = "";
  }
});

//TODO add validations
/**
 * Validates that the Name field is not blank and prevents form submission if it is
 * 
 * @param {object} e - the event object
 * @return {boolean} based on if input is valid or not
 */
function validateName(e) {
  const nameValue = document.getElementById("name").value;
  
  if (nameValue === "") {
    console.log("Name invalid");
    addNotValidClass("[for=name]");
    e.preventDefault();
    return false;
  } else {
    addValidClass("[for=name]");
    return true;
  }
}

/**
 * Validates that the Email field is a valid email address and prevents form submission if it isn't
 * 
 * @param {object} e - the event object
 * @return {boolean} based on if input is valid or not
 */
function validateEmail(e) {
  const emailValue = document.getElementById("email").value;
  const regex = /^\S+@\S+\.\S+$/
  
  if (!regex.test(emailValue)) {
    console.log("Email invalid");
    addNotValidClass("[for=email]");
    e.preventDefault();
    return false;
  } else {
    addValidClass("[for=email]");
    return true;
  }
}

/**
 * Validates that at least on Activity is selected and prevents form submission if it isn't
 * 
 * @param {object} e - the event object
 * @return {boolean} based on if input is valid or not
 */
function validateActivities(e) {
  const costDisplay = document.getElementById("activities-cost").innerHTML;

  if (+costDisplay.slice(8,11) === 0) {
    console.log("Activities invalid");
    addNotValidClass("#activities");
    e.preventDefault();
    return false;
  } else {
    addValidClass("#activities");
    return true;
  }
}

/**
 * Validates that Card Number is between 13 and 16 digits and prevents form submission if it isn't
 * 
 * @param {object} e - the event object
 * @return {boolean} based on if input is valid or not
 */
function validateCardNum(e) {
  const ccNumValue = document.getElementById("cc-num").value;

  if (isNaN(ccNumValue) || ccNumValue.length < 13 || ccNumValue.length > 16) {
    console.log("Card Number invalid");
    addNotValidClass("[for=cc-num]");
    e.preventDefault();
    return false;
  } else {
    addValidClass("[for=cc-num]");
    return true;
  }
}
// zip code must be a five digit number
function validateZip(e) {
  const zipValue = document.getElementById("zip").value;

  if (isNaN(zipValue) || zipValue.length !== 5) {
    console.log("Zip Code invalid");
    e.preventDefault();
    return false;
  } else {
    return true;
  }
}
// cvv must be a three digit number
function validateCVV(e) {
  const cvvValue = document.getElementById("cvv").value;

  if (isNaN(cvvValue) || cvvValue.length !== 3) {
    console.log("CVV invalid");
    e.preventDefault();
    return false;
  } else {
    return true;
  }
}

/**
 * Adds the "valid" class to an element, removes the "not-valid" class
 *
 * @param {string} element - the for attribute value of the element to be selected
 */
function addValidClass(element) {
  const targetEle = document.querySelector(element);

  targetEle.classList.remove("not-valid");
  targetEle.classList.add("valid");
}


/**
 * Adds the "not-valid" class to an element, removes the "valid" class
 *
 * @param {string} element - the for attribute value of the element to be selected
 */
function addNotValidClass(element) {
  const targetEle = document.querySelector(element);

  targetEle.classList.remove("valid");
  targetEle.classList.add("not-valid");
}

// create an event listener for the Register button
document.querySelector("form").addEventListener("submit", (e) => {
  // when there are validation errors the form should be prevented from submitting
  // e.preventDefault();
  validateName(e);
  validateEmail(e);
  validateActivities(e);
  // if credit card is the selected method of payment
  if (document.querySelector("option[value='credit-card']").selected === true) {
    validateCardNum(e);
    validateZip(e);
    validateCVV(e);
  }
});
