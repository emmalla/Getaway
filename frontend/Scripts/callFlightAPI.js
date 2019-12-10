document.getElementById("goButton").onclick = function() {
    location.href='go.html'
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/flights/",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
      "User-Agent": "PostmanRuntime/7.20.1",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "98d71482-bdcd-4e03-aa1a-d712e32d3c26,0fb3f995-c8ee-4248-ae64-6c4b6dd96a8d",
      "Cookie": "connect.sid=s%3AlheecWbTzeP7B0YTJneawkcFHSH8V3RK.RwVfY0vLOH3yFd0QeJ51w7fPWNu3J6wsaUYbxA6jU9E",
      "Referer": "http://localhost:3000/flights/",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    },
    'xhrFields': {
        'withCredentials': true
    },
    "processData": false,
    "data": ""
  }
  $.ajax(settings).done(function( data ) {
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
}
