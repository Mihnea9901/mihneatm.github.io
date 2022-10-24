const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

function sendEmail(){
    Email.send({
        SecureToken : "2edf4bf1-4a88-4af2-bfe4-96859e10ba87",
        To : 'mihnea.tm01@yahoo.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}