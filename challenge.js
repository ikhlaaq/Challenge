

function fun() {
    var input = document.getElementById('Date').value;
    console.log(input);
    if (input > '2000-01-01') {
        alert('Ooops!! SORRY UNDER 18 NOT ALLOWED');
    } else if (input === '') {
        alert('ERROR: You must enter your age.');
    } else {
        alert('WELCOME & PRESS OK TO CONTINUE');

        window.location = "https://www.jointrine.com/dashboard/";
    }

}