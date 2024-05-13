const scriptURL = '<https://script.google.com/macros/s/AKfycbzgdqeFvMw5hK2RHj2Mnd56A6n5h5fYLsQLsEg2KIcDDHLd0ctdqMe9c3LROas-lk4/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
