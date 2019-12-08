// function onSignIn(googleUser) {
// // Useful data for your client-side scripts:
// var profile = googleUser.getBasicProfile();
// console.log("ID: " + profile.getId()); // Don't send this directly to your server!
// console.log('Full Name: ' + profile.getName());
// console.log('Given Name: ' + profile.getGivenName());
// console.log('Family Name: ' + profile.getFamilyName());
// console.log("Image URL: " + profile.getImageUrl());
// console.log("Email: " + profile.getEmail());
//
// // The ID token you need to pass to your backend:
// var id_token = googleUser.getAuthResponse().id_token;
// console.log("ID Token: " + id_token);
// }

document.getElementById("lol").onclick = function() {
    const Http = new XMLHttpRequest();
    const url='http://localhost:3000/signin';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }


}
