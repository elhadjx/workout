function validateForm() {
  // Get the form element
  var form = document.forms["contactForm"];

  // Get the values of the form fields
  var name = form["name"].value;
  var email = form["email"].value;
  var message = form["message"].value;

  // Check if the name field is empty
  if (name == "") {
    alert("Please enter your name.");
   
  }
}