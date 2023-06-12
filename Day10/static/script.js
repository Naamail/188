console.log(document.cookie(SignedUser));

function checkCookie() {
    if (document.cookie !=="") {
        document.getElementById('greeting').innerHTML="Hi";
    }
};
checkCookie();