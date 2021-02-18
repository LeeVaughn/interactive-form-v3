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
document.getElementById("activities").addEventListener("change", () => {
  console.log("activities")
  // update the cost when an activity is checked or unchecked
  // prevent the user from selecting overlapping activities (exceeds)
  // add focus to the activities when the user tabs through the form
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

  // add at least one real time validation (exceeds)
  // add at least one conditional error message (exceeds)
});

// add validations
  // name cannot be blank
  // email must contain valid address
  // at least one activity must be selected
  // if credit card is the selected method of payment
    // card number must be a number between 13 and 16 digits
    // zip code must be a five digit number
    // cvv must be a three digit number

// create an event listener for the Register button
  // when there are validation errors the form should be prevented from submitting
