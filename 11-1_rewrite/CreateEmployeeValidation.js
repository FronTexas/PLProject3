/**
 * Created by Caroline on 3/3/2016.
 */
var v = {
    isValid: true
}

var emailAddress1 = $("#email").val();

// validate the first name entry
if ($("#fname").val() == "") {
    $("#fname_error").text("This field is required.");
    v.isValid = false;
}
else {
    $("#fname_error").text("");
}

// validate the last name entry
if ($("#lname").val() == "") {
    $("#lname_error").text("This field is required.");
    v.isValid = false;
}
else {
    $("#lname_error").text("");
}

// validate email address
if (emailAddress1 == "") {
    $("#email_address1_error").text("This field is required.");
    v.isValid = false;
} else {
    $("#email_address1_error").text("");
}

// validate the ssn
if ($("#ssn").val() == "") {
    $("#ssn_error").text("This field is required.");
    v.isValid = false;
} else {
    $("#ssn_error").text("");
}


// submit the form if all entries are valid
if (v.isValid) {
    $("#email_form").submit();
}
$("#fname").focus();

