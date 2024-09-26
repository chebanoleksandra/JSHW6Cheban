//1
/*let quest = ["Are you a human?", "Are dolphins fish?", "Is there a game called \'Minecraft\'?", "Is there IT STEP Academy in Odesa?", "Is this code written using Python?"];
let corrAnsw = [true, false, true, true, false];
let userAnsw = [];
let points = [];
let score = 0;
for (let index in quest) {
    userAnsw[index] = confirm(quest[index]);
    if (userAnsw[index] == corrAnsw[index]) {
        points[index] = 1;
        score++;
    }
    else {
        points[index] = 0;
    }
}
document.write("Question -> your points <br /><br />");
for (let index in quest) {
    document.write((parseInt(index) + 1) + ". " + quest[index] + " " + points[index] + "<br />");
}
document.write("<br />Your score:           " + score + "/5");*/

//2
function condition(value, index, array) {
    let result = false;
    if (value == "." || value == " " || value.match(/[a-z]/i) ) {
        result = true;
    }
    return result;
};

let name = prompt("Input your name: ");
let arrName = name.split("");
let passed = arrName.filter(condition);
name = passed.join("");
if(confirm("Did you mean " + name + "?"))
{
    alert("Great!");
}
else{
    alert("Unluck:(");
}
document.write("<br />");