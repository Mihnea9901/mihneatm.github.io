const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}