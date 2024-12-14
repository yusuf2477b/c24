function validate(e) {
    e.preventdefault();
     
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '';
    if(email ===""){
        message = 'please enter an email';
        msgBox.style.color = 'red'
    }
    else if(pass ===""){
        message = 'password must be at least 8 characters';
        msgBox.style.color = 'red'
    }
    else if(age ===""){
        message = 'age must be between 12 and 25';
        msgBox.style.color = 'red'
    }
    else {
        message = 'Login sucessful';
          msgBox.style.color = 'green'
    }
    msgBox.innerText = message;
}