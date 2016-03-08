/**
 * Created by Caroline on 3/3/2016.
 */

var person = function(){
    var data = {
        fname: '',
        $fname: function(n){
            data.fname = n;
        },
        lname: '',
        $lname: function(n){
            data.lname = n;
        },
        email:'',
        $email: function(n){
            data.email = n;
        }
    }

    var F = function(){};
    f = new F();

    f.toString = function(){return "Name: " + data.fname + " " + data.lname + "<BR>"
                                + "Email: " + data.email}

    f.run = function(e){
        if (data[e] === undefined){
            return null;
        } else {
            return data[e];
        }
    }
    return f
}();

var customer = function(p){
    var data = {
        custNum: '',
        $custNum: function(n){
            data.custNum = n;
        }

    }

    var F = function(){};
    F.prototype = p;
    f = new F();

    f.getDisplayText = function(){
        return f.toString() + "<BR>" +
            "Customer number: " + data.custNum;
    }

    f.run = function(e){
        if (data[e] === undefined){
            return F.prototype.run(e);
        } else {
            return data[e];
        }
    }
    return f
}(person);

var employee = function(p){
    var data = {
        ssn: '',
        $ssn: function(n){
            data.ssn = n;
        }

    }

    var F = function(){};
    F.prototype = p;
    f = new F();

    f.getDisplayText = function(){
        return f.toString() + "<BR>" +
        "Social security number: " + data.ssn;
    }

    f.run = function(e){
        if (data[e] === undefined){
            return F.prototype.run(e);
        } else {
            return data[e];
        }
    }

    return f
}(person);


$(document).ready(function(){
    var createEmployeeButton = $('#employeeButton')
    createEmployeeButton.click(function(){
        var isValid = function(){
            var v = {
                isValid: true
            }

            var emailAddress1 = $("#email").val();

            if ($("#fname").val() == "") {
                $("#fname_error").text("This field is required.");
                v.isValid = false;
            }
            else {
                $("#fname_error").text("");
            }

            if ($("#lname").val() == "") {
                $("#lname_error").text("This field is required.");
                v.isValid = false;
            }
            else {
                $("#lname_error").text("");
            }

// validate email address
            if (emailAddress1 == "") {
                $("#email_error").text("This field is required.");
                v.isValid = false;
            } else {
                $("#email_error").text("");
            }

// validate the ssn
            if ($("#ssn").val() == "") {
                $("#ssn_error").text("This field is required.");
                v.isValid = false;
            } else {
                $("#ssn_error").text("");
            }

// submit the form if all entries are valid
            $("#fname").focus();
            return v.isValid
        }

        if (isValid()) {
            var e = Object.create(employee)
            e.run('$fname')($('#fname').val())
            e.run('$lname')($('#lname').val())
            e.run('$email')($('#email').val())
            e.run('$ssn')($('#ssn').val())
            console.log(e.run('fname'))
            console.log(e.run('lname'))
            console.log(e.run('email'))
            console.log(e.run('ssn'))
            //alert('Employee Created! ' + '\n' + e.getDisplayText())
            $('#CreatedPerson').append(
                '<p>' + e.getDisplayText() + '</p>'
            )
        }
    })

    var createCustomerButton = $('#customerButton')
    createCustomerButton.click(function(){
        var isValid = function(){
            var v = {
                isValid: true
            }

            var emailAddress1 = $("#email2").val();

            if ($("#fname2").val() == "") {
                $("#fname_error2").text("This field is required.");
                v.isValid = false;
            }
            else {
                $("#fname_error2").text("");
            }

            if ($("#lname2").val() == "") {
                $("#lname_error2").text("This field is required.");
                v.isValid = false;
            }
            else {
                $("#lname_error2").text("");
            }

// validate email address
            if (emailAddress1 == "") {
                $("#email_error2").text("This field is required.");
                v.isValid = false;
            } else {
                $("#email_error2").text("");
            }

// validate the ssn
            if ($("#custnum").val() == "") {
                $("#custnum_error").text("This field is required.");
                v.isValid = false;
            } else {
                $("#custnum_error").text("");
            }

// submit the form if all entries are valid
            return v.isValid
        }
        if (isValid()) {
            var c = Object.create(customer)
            c.run('$fname')($('#fname2').val())
            c.run('$lname')($('#lname2').val())
            c.run('$email')($('#email2').val())
            c.run('$custNum')($('#custNum').val())
            //alert('Employee Created! ' + '\n' + e.getDisplayText())
            console.log(c.getDisplayText())
            $('#CreatedPerson').append(
                '<p>' + c.getDisplayText() + '</p>'
            )
        }
    })


})

