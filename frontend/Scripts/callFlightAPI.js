$.getJSON( "http://localhost:3000/flights/", function( data ) {
    document.getElementById("Header").innerHTML = "Flight Info";

    for (var i = 0; i < 15; i++) {
        var departureTimeDate = new Date(data.AirlineFlightSchedulesResult.data[i].departuretime * 1000);
        departureDateString = departureTimeDate.toGMTString();
        var dtimep = document.createElement("P");
        dtimep.innerHTML = "Departure time is " + departureDateString;

        departureTerminal = data.AirlineFlightSchedulesResult.data[i].origin
        var dterminalp = document.createElement("P");
        dterminalp.innerHTML = "Departure terminal is " + departureTerminal;

        var arrivalTimeDate = new Date(data.AirlineFlightSchedulesResult.data[i].arrivaltime * 1000);
        arrivalDateString = arrivalTimeDate.toGMTString();
        dterminalp.innerHTML = "Departure airport is " + departureTerminal;
        arrivalTime = data.AirlineFlightSchedulesResult.data[i].arrivaltime
        
        var atimep = document.createElement("P");
        atimep.innerHTML = "Arrival time is " + arrivalDateString;
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

    }

console.log(data);

});
