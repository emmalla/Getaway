$.getJSON( "http://localhost:3000/flights/", function( data ) {
    document.getElementById("Header").innerHTML = "Flight Info";

    for (var i = 0; i < 15; i++) {
        departureTime = data.AirlineFlightSchedulesResult.data[i].departuretime
        var dtimep = document.createElement("P");
        dtimep.innerHTML = "Departure time is " + departureTime;
        departureTerminal = data.AirlineFlightSchedulesResult.data[i].origin
        var dterminalp = document.createElement("P");
        dterminalp.innerHTML = "Departure airport is " + departureTerminal;
        arrivalTime = data.AirlineFlightSchedulesResult.data[i].arrivaltime
        var atimep = document.createElement("P");
        atimep.innerHTML = "Arrival time is " + arrivalTime;
        arrivalTerminal = data.AirlineFlightSchedulesResult.data[i].destination
        var aterminalp = document.createElement("P");
        aterminalp.innerHTML = "Arrival airport is " + arrivalTerminal;


        var separator = document.createElement("P");
        separator.innerHTML = "__________________________________________";

        document.getElementById("Info").appendChild(dtimep);
        document.getElementById("Info").appendChild(dterminalp);
        document.getElementById("Info").appendChild(atimep);
        document.getElementById("Info").appendChild(aterminalp);
        document.getElementById("Info").appendChild(separator)




        console.log("1 " + data.AirlineFlightSchedulesResult.data[i].departuretime);
        console.log("2 " + data.AirlineFlightSchedulesResult.data[i].origin);
        console.log("3 " + data.AirlineFlightSchedulesResult.data[i].arrivaltime);
        console.log("4 " + data.AirlineFlightSchedulesResult.data[i].destination);

    }

console.log(data);

});
