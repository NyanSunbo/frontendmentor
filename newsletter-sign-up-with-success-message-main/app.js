const btnSubmit = document.getElementsByClassName('btn-submit');
const formInfo = document.getElementById('signup-form');
const formSuccess = document.getElementById('success-message');

for(let i=0; i<btnSubmit.length ; i++){

    btnSubmit[i].addEventListener('click', (e) => {
        
        if(formInfo.style.display === 'none'){
            formSuccess.style.display = 'none';
            formInfo.style.display = 'block';
        } else {
            formSuccess.style.display = 'block';
            formInfo.style.display = 'none';
        }
    });
}
