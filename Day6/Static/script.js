var x = 5;
var y = 4;
let z = 2;

console.log(x+y);

var d = new Date();
console.log(d);
var y = d.getFullYear();

console.log(y);

var Alon = {
    age : 21, 
    Family : "Levy",
    Time : new Date() 
};

console.log(Alon.Time);

var H = d.getHours();
console.log(H);
H = 21;

if (H < 6) {
    document.getElementById("greetingH1").innerHTML = "ZZZZ";
    } 
    else if (H < 12) {
        document.getElementById("greetingH1").innerHTML = "Good Morning";
        document.getElementById("body").classList.remove("NightStyle");

    }
    else if (H < 16) {
        document.getElementById("greetingH1").innerHTML = "Good Afternoon";
    } 
    else if (H < 20) {
        document.getElementById("greetingH1").innerHTML = "Good Evening";
        document.getElementById("body").classList.add("NightStyle");

    } 
    else {
        document.getElementById("greetingH1").innerHTML = "Good Night";
    }

var carsIMG = [
    "carpixel.net-2020-maserati-ghibli-gransport-hybrid-100054-wide.jpg",
    "https://www.forbesindia.com/media/images/2022/Aug/img_192647_lamborghini.jpg"
];



function TimeFunc() {
    document.getElementById("Time").innerHTML = d;
    document.getElementById("btn").innerHTML = "That's it";
    for (let i = 0; i < carsIMG.length; i++) {
        document.getElementById("IMG_cars").src = carsIMG[i];        
    }
    
    
}


var cars = ["mazda", "volvo", "ferrari", "mazarti", "lamburgini"];
var l = cars.length;
console.log(l);
console.log(cars[l-1]);


var text = "";

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
    document.getElementById("Time").innerHTML = text;
    console.log(text);
    }



