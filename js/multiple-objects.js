function Hotel(name, total, booked,) {
	this.name = name;
	this.total = total;
	this.booked = booked;
	this.checkAvailability = function() {
		return this.total - this.booked;
	}
}


var park = new Hotel("Park Hotel", 100, 35 ); 
var ren = new Hotel("Renaissance Hotel", 320, 44);

var a = document.getElementById("hotel1").textContent = park.name + " has " + park.checkAvailability() + " rooms available"; 
var b = document.getElementById("hotel2").textContent = ren.name + " has "  + ren.checkAvailability() + " rooms available";
