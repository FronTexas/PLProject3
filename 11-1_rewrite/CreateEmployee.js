/**
 * Created by fahrankamili on 3/3/16.
 */
$(document).ready(function(){
    var firstname = $('#first_name1').val()
    var lastname = $('#last_name1').val()
    var email = $('#email_address1').val()
    var ssn = $('#ssn').val()

    var button = $('#submit')
    button.click(function(){
        $.getScript('person.js',function(){
            var employee2 = Object.create(employee)
            console.log(employee2)
            employee.run('$fname')(firstname)
            console.log(employee.run('fname'))
        })
    })

})
