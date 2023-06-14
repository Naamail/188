function GetLocation() {
    if (navigator.geolocation) {
    console.log("in get location");
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    document.getElementById("p").innerHTML="Geolocation is not supported by this browser.";
    }}


    function showPosition(position) {
        var x = document.getElementById("p");
        var y = document.getElementById("button");
        x.innerHTML = "Your In <br>" + "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
        y.innerHTML = "try me again";
        console.log(position);
    }