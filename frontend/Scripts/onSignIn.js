


$.getJSON( "http://localhost:3000/where/nature", function( data ) {

    name = data.name

    console.log(data);

    document.getElementById("userFirstName").innerHTML += name;
    document.getElementById("userLastName").innerHTML += name;
    document.getElementById("userEmail").innerHTML += name;
    document.getElementById("userLocation").innerHTML += name;


});
