document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const section = document.getElementById('section').value;

    if (name === '' || email === '' || section === '') {
        alert('Proszę wypełnić wszystkie pola formularza.');
    } else if (!validateEmail(email)) {
        alert('Proszę podać poprawny adres email.');
    } else {
        alert('Formularz został poprawnie wysłany.');
        this.submit();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
