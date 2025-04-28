var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value; 
    if(name.length==0){
        nameError.innerHTML = 'Name is required'
        return false;
    }
    if (!name.match(/^[A-Za-z]+ [A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name (first, middle, last)';
        return false;
    }
   
    nameError.innerHTML = '<i class="fas fa-check-circle" style="color:green;"></i>';
    
    return true;
}  
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML = 'Phone number must be 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle" style="color:green;"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9_]+@[a-zA-z0-9]+\.[a-zA-Z]{2,}$/))
    {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle" style="color:green;"></i>' 
    return true;
}   
function validateMessage(){
    var message  = document.getElementById('contact-message').value;
    var required=30;
    var left = required-message.length;
    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    } 
    messageError.innerHTML = '<i class="fas fa-check-circle" style="color:green;"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},5000);
        return false;
    }
    return true;
}  
