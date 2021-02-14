// set the focus state on the Name field when the app loads
document.getElementById("name").focus();

// hide the Job Role text field
document.getElementById("other-job-role").hidden = true;

// show Credit Card as the selected method of payment when the app loads
document.querySelector("option[value='credit-card']").selected = "true";

// disable the Color element
document.getElementById("color").disabled = true;

// create an event listener for the Job Role dropdown
document.getElementById("title").addEventListener("change", (e) => {
  document.getElementById("other-job-role").hidden = true;
  // show the text field when "other" is selected
  if (document.querySelector("option[value='other']").selected === true) {
    document.getElementById("other-job-role").hidden = false;
  }
});

// create an event listener for the Design dropdown
document.getElementById("design").addEventListener("change", (e) => {
  const colorDropdown = document.getElementById("color");

  colorDropdown.disabled = false;
  colorDropdown[0].textContent = "Please select a color"
  colorDropdown[0].selected = "true"

  document.querySelectorAll("option[data-theme]").forEach(function(element) {
    // hide all colors
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

  // if (document.querySelector("option[value='js puns']").selected === true) {
  //   document.querySelectorAll("option[data-theme]").forEach( function(element) {
  //     if (element.dataset.theme === "js puns") {
  //       element.hidden = false
  //     }
  //   });
  // }
  // if (document.querySelector("option[value='heart js']").selected === true) {
  //   document.querySelectorAll("option[data-theme]").forEach( function(element) {
  //     if (element.dataset.theme === "heart js") {
  //       element.hidden = false
  //     }
  //   });
  // }
  // hide all colors
  // when JS Puns is selected, show JS Pun colors
  // when I <3 JS is selected, show I <3 JS colors
});

// create an event listener for the Activities section
  // update the cost when an activity is checked or unchecked
  // prevent the user from selecting overlapping activities (exceeds)
  // add focus to the activities when the user tabs through the form

// show Credit Card as the selected method of payment when the app loads

// create an event listener for the Payment section
  // hide all payment info
  // if CC is selected, shows CC info
  // if PayPal is selected, show PayPal info
  // if Bitcoin is selected, show Bitcoin info
  // add at least one real time validation (exceeds)
  // add at least one conditional error message (exceeds)

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
