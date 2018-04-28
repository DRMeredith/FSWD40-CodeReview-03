function calculateInsurance() {
	name = document.getElementById('name').value;
	age = parseInt(document.getElementById('age').value);
	var country = document.getElementById('country').value;
	var horse_power = parseInt(document.getElementById('horses').value);

if (country == "Austria" || country == "austria") {
	var insurance = (horse_power*100)/age + 50;
	document.getElementById("quote").innerHTML = name + ", your insurance will cost: " + " € " + insurance;
	}

else if (country == "Germany" || country == "germany") {
	var insurance = (horse_power)*120/age + 100;
	document.getElementById("quote").innerHTML = name + ", your insurance will cost: " + " € " + insurance; 
	}

else if (country == "Italy" || country == "italy") {
	var insurance = (horse_power)*150/(age+2) + 150;
	document.getElementById("quote").innerHTML = name + ", your insurance will cost: " + " € " + insurance;
	}	

else {
	document.getElementById("quote").innerHTML = "Sorry, this insurance service is only for residents of Austria, Italy and Germany."
}
};
