//* initial functionality when the app loads
document.getElementById("name").focus();
document.getElementById("other-job-role").hidden = true;
document.querySelector("option[value='credit-card']").selected = "true";
document.getElementById("paypal").style.display = "none";
document.getElementById("bitcoin").style.display = "none";
document.getElementById("color").disabled = true;

//* change event listeners for the various input fields
document.getElementById("title").addEventListener("change", () => {
  // hide text field initially
  document.getElementById("other-job-role").hidden = true;
  // show the text field when "other" is selected
  if (document.querySelector("option[value='other']").selected === true) {
    document.getElementById("other-job-role").hidden = false;
  }
});

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

document.getElementById("activities").addEventListener("change", () => {
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
});

// loop over Activities and add the "focus" class to the parent element of the activity with focus to improve accessability
document.querySelectorAll("input[type='checkbox']").forEach((activity) => {
  activity.addEventListener("focus", (e) => {
    activity.parentElement.classList.add("focus");
  });

  activity.addEventListener("blur", (e) => {
    activity.parentElement.classList.remove("focus");
  });
});

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

//* form validations
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

/**
 * Validates that Zip Code is a five digit number and prevents form submission if it isn't
 * 
 * @param {object} e - the event object
 * @return {boolean} based on if input is valid or not
 */
function validateZip(e) {
  const zipValue = document.getElementById("zip").value;

  if (isNaN(zipValue) || zipValue.length !== 5) {
    console.log("Zip Code invalid");
    addNotValidClass("[for=zip]");
    e.preventDefault();
    return false;
  } else {
    addValidClass("[for=zip]");
    return true;
  }
}

/**
 * Validates that CVV is a three digit number and prevents form submission if it isn't
 * 
 * @param {object} e - the event object
 * @return {boolean} based on if input is valid or not
 */
function validateCVV(e) {
  const cvvValue = document.getElementById("cvv").value;

  if (isNaN(cvvValue) || cvvValue.length !== 3) {
    console.log("CVV invalid");
    addNotValidClass("[for=cvv]");
    e.preventDefault();
    return false;
  } else {
    addValidClass("[for=cvv]");
    return true;
  }
}

/**
 * Adds the "valid" class to an element, removes the "not-valid" class
 * Makes sure the error hint is hidden
 *
 * @param {string} element - the for attribute value of the element to be selected
 */
function addValidClass(element) {
  const targetEle = document.querySelector(element);
  const targetSpan = document.querySelector(element + " .hint");

  targetEle.classList.remove("not-valid");
  targetEle.classList.add("valid");
  targetSpan.style.display = "none";
}


/**
 * Adds the "not-valid" class to an element, removes the "valid" class
 * Makes sure the error hint is shown
 *
 * @param {string} element - the for attribute value of the element to be selected
 */
function addNotValidClass(element) {
  const targetEle = document.querySelector(element);
  const targetSpan = document.querySelector(element + " .hint");

  targetEle.classList.remove("valid");
  targetEle.classList.add("not-valid");
  targetSpan.style.display = "block";
}

/**
 * Shows or hides the hint for an input as needed
 *
 * @param {string} eleId - part of the id for the label associated with an input
 */
function toggleHint(eleId) {

}

//* submit event listener on the form itself
document.querySelector("form").addEventListener("submit", (e) => {
  // if any of these functions return false the form will be prevented from submitting
  validateName(e);
  validateEmail(e);
  validateActivities(e);

  if (document.querySelector("option[value='credit-card']").selected === true) {
    validateCardNum(e);
    validateZip(e);
    validateCVV(e);
  }
});
