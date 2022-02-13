const form1 = document.querySelector('#form1')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#confirm-password')

form1.addEventListener( 'submit' , (e) => {
    e.preventDefault()

    checkInputs();
});

function checkInputs ( ) {
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if ( userValue === '') {
        setErrorFor(username , 'Username Cannot Be Blank');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Confirm Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

}

function setErrorFor(input , messages) {
    const controlForm = input.parentElement;
    const small = controlForm.querySelector('small');

    small.innerText = messages;

    controlForm.className = 'control-form error'
}

function setSuccessFor(input) {
    const controlForm = input.parentElement;

    controlForm.className = 'control-form success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// CONVERT SIGN-IN INTO SIGNUP PAGE AND VISE VERSA
const formSignUp = document.querySelector('#form-sign-up');
const formSignIn = document.querySelector('#form-sign-in');
const btn = document.querySelectorAll('.btn');

btn.forEach( (item) => {
    item.addEventListener( "click" , () => {
        formSignUp.classList.toggle('hidden');
        formSignUp.classList.toggle('show');
        formSignIn.classList.toggle('show')
        formSignIn.classList.toggle('hidden');
    })
});

// VALIDATION SIGN-FORM