/*jshint multistr:true */
//searches for any name starting with "E" and logs it to the console

var text = "Today Erika will teach you \
robotics.";
var myName = "Erika";
var hits = [];

for(i = 0; i< text.length; i++){
    if (text[i] === "E") {
        for (j = i; j <= i + myName.length; j++) {
            hits.push(myName)
        }
    }
}

if (hits.length = 0) {
console.log("Your name wasn't found!");
}
else {
    console.log(hits) 
}
