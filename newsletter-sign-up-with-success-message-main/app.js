const form = document.getElementById('form');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = document.getElementById('email');
    let emailValue = email.value;
    console.log(emailValue);

    if(validateEmail(emailValue)){
        gotoSuccessPage(emailValue);
    } else {
        const spanEmail = document.getElementById('email-error');
        spanEmail.style.display = 'block';
        email.style.borderColor = 'red';
        email.style.backgroundColor = 'hsl(4, 85%, 90%)';

        if(emailValue === ''){
            spanEmail.textContent = "Email required";
        } else {
            spanEmail.textContent = "Valid email required";
        }
    }
    
});

function validateEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }

function gotoSuccessPage(email){
    window.location.href = `success.html?email=${email}`;
}

function gotoIndexPage(){
    window.location.href = 'index.html';
}