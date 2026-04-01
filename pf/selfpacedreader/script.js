var sentences = [
	[1,"GP",4,"The professors scolded by the administration took leave the following semester.","Were the professors scolded by someone?"],
	[2,"GP",4,"The babies watched by the teenagers cried the whole afternoon.","Were the babies watched by someone?"],
	[3,"GP",4,"The students studied by the observers drank coffee at the cafe.","Did the students study?"],
	[4,"GP",4,"The geese chased by the children ran across the field.","Did the geese chase somebody?"],
	[5,"GP",4,"The dogs surprised by the children barked loudly.","Did the dogs surprise someone?"],
	[6,"GP",4,"The cats observed by the children slept in the sun.","Did the children observe someone?"],
	[7,"GP",4,"The architects reprimanded by the CEO worked diligently through the night.","Did the CEO reprimand someone?"],
	[8,"GP",4,"The student presented by his advisor made a speech.","Did the advisor present someone?"],
	[9,"GP",4,"The detective investigated by his superiors resigned.","Did the superiors investigate the detective?"],
	[10,"GP",4,"The social worker sent by the court was shocked by the family's living conditions.","Did the court send someone?"],
	[11,"MOD",6,"The investigator that was examined by the police was guilty.","Did the investigator examine someone?"],
	[12,"MOD",6,"The performer that was noticed by the agent was very talented.","Did the performer notice something?"],
	[13,"MOD",6,"The team that was beat by their rivals were downcast for days.","Did the team beat someone?"],
	[14,"MOD",6,"The child that was dressed by the babysitter struggled the whole time.","Did the child dress someone?"],
	[15,"MOD",6,"The artist that was aged by years in the sun was diagnosed with skin cancer.","Did the artist age someone?"],
	[16,"MOD",6,"The officer that was accused by the department resigned in shame.","Did the department accuse someone?"],
	[17,"MOD",6,"The defendant that was questioned by the lawyer exercised his fifth amendment right.","Did the lawyer question someone?"],
	[18,"MOD",6,"The magician that was stumped by the new trick consulted an expert.","Did the new trick stump the magician?"],
	[19,"MOD",6,"The people that were elected to the schoolboard did a fantastic job.","Were the people elected to the schoolboard?"],
	[20,"MOD",6,"The mayor that was picked by the people had years of experience.","Did the people pick the mayor?"],
	[21,"DO",4,"The performer scared the audience with her shrill screams.","Did the performer scare someone?"],
	[22,"DO",4,"The class confused the instructor by asking too many questions.","Did the class confuse the instructor?"],
	[23,"DO",4,"The toddler carried the toy proudly around the house.","Did the toddler carry the toy?"],
	[24,"DO",4,"The actress showered her family with praise during her award speech.","Did the actress shower her family with something?"],
	[25,"DO",4,"The customers discussed the employee's strange behavior.","Did the customers discuss the employee?"],
	[26,"DO",4,"The driver passed a biker speeding along the highway.","Did the biker pass the driver?"],
	[27,"DO",4,"The nurse acknowledged the doctor's great skill.","Did the doctor acknowledge the nurse?"],
	[28,"DO",4,"The barista removed the rude customer from the cafe.","Did someone remove the barista?"],
	[29,"DO",4,"The mother annoyed her children by asking too many questions after school.","Did the children annoy someone?"],
	[30,"DO",4,"The committee reprimanded the cheating students at the hearing.","Did someone reprimand the committee?"]
]
shuffle(sentences);

var thingsToShow = [];

for (var i = 0; i < sentences.length; i++) {
	var sentence = sentences[i][3];
	var words = sentence.split(" ");
	
	var id = sentences[i][0];
	var type = sentences[i][1];
	
	var criticalLoc = sentences[i][2] - 1;
	
	for (var j = 0; j < words.length; j++) {
		var critical = 0;
		if (j - criticalLoc + 1 <= 4 && j - criticalLoc + 1 > 0) {
			critical = j - criticalLoc + 1;
		}
		thingsToShow.push([id, type, j, critical, words[j]]);
	}
	
	var question = sentences[i][4];
	thingsToShow.push([id, type, -1, 0, question]);
}

console.log(thingsToShow);

var output = "<textarea readonly cols=\"50\" rows=\"20\">";

var counter = 0;
var text = document.getElementById("content");
var stillGoing = true;
var mostRecentTime = new Date().getTime();
var lastArray = ["START", "START", "START", "START"]
document.body.onkeydown = function() {
	if (!stillGoing) {
		return;
	}
	
	var newTime = new Date().getTime();
	outputEntry = lastArray;
	lastArray.push(newTime - mostRecentTime);
	for (var i = 0; i < outputEntry.length; i++) {
		// Write the element to the body
		output += outputEntry[i];
		// If this isn't the last element in this current array
		if (i < outputEntry.length - 1) {
			output += ",";
		}
	}
	output += "\n";
	
	if (counter >= thingsToShow.length) {
		output += "</textarea>";
		displayOutput();
		stillGoing = false;
		return;
	}

	text.innerHTML = thingsToShow[counter][4];
	if (thingsToShow[counter][2] == -1) {
		text.innerHTML += "<br>Hit Y for 'yes' and N for 'no'.";
	}
	
	mostRecentTime = newTime;
	lastArray = thingsToShow[counter];
	counter++;
}

function displayOutput() {
	console.log(output);
	document.body.style.fontSize = "12px";
	document.body.style.lineHeight = "24px";

	text.innerHTML = output;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
