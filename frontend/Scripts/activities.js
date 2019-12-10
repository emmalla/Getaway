document.getElementById("nature").onclick = function() {
    $.getJSON( "http://localhost:3000/where/nature", function( data ) {
        document.getElementById("Header").innerHTML = "Nature";
        name = data.name
        var placeToVisit = document.createElement("P");
        placeToVisit.innerHTML = "You should visit \"" + name + "\"";
        document.getElementById("Info").innerHTML = ""
        document.getElementById("Info").appendChild(placeToVisit);
        console.log(data.name);


        var x = document.getElementById("goButton");
        x.style.display = "block";

        var y = document.getElementById("resultCards");
        y.style.display = "block";


    });
}



document.getElementById("museums").onclick = function() {
    $.getJSON( "http://localhost:3000/where/museums", function( data ) {
        document.getElementById("Header").innerHTML = "Museums";
        name = data.name
        var placeToVisit = document.createElement("P");
        placeToVisit.innerHTML = "You should check out \"" + name + "\"";
        document.getElementById("Info").innerHTML = ""
        document.getElementById("Info").appendChild(placeToVisit);
        console.log(data.name);

        var x = document.getElementById("goButton");
        x.style.display = "block";

        var y = document.getElementById("resultCards");
        y.style.display = "block";

    });
}

document.getElementById("shows").onclick = function() {
    $.getJSON( "http://localhost:3000/where/shows", function( data ) {
        document.getElementById("Header").innerHTML = "Entertainment";
        name = data.name
        var placeToVisit = document.createElement("P");
        placeToVisit.innerHTML = "You should look up \"" + name + "\"";
        document.getElementById("Info").innerHTML = ""
        document.getElementById("Info").appendChild(placeToVisit);
        console.log(data.name);

        var x = document.getElementById("goButton");
        x.style.display = "block";

        var y = document.getElementById("resultCards");
        y.style.display = "block";

    });
}

document.getElementById("history").onclick = function() {
    $.getJSON( "http://localhost:3000/where/history", function( data ) {
        document.getElementById("Header").innerHTML = "History";
        name = data.name
        var placeToVisit = document.createElement("P");
        placeToVisit.innerHTML = "You should go to \"" + name + "\"";
        document.getElementById("Info").innerHTML = ""
        document.getElementById("Info").appendChild(placeToVisit);
        console.log(data.name);

        var x = document.getElementById("goButton");
        x.style.display = "block";

        var y = document.getElementById("resultCards");
        y.style.display = "block";

    });
}

document.getElementById("active").onclick = function() {
    $.getJSON( "http://localhost:3000/where/active", function( data ) {
        document.getElementById("Header").innerHTML = "Active";
        name = data.name
        var placeToVisit = document.createElement("P");
        placeToVisit.innerHTML = "You should look for \"" + name + "\"";
        document.getElementById("Info").innerHTML = ""
        document.getElementById("Info").appendChild(placeToVisit);
        console.log(data.name);

        var x = document.getElementById("goButton");
        x.style.display = "block";

        var y = document.getElementById("resultCards");
        y.style.display = "block";

    });
}
