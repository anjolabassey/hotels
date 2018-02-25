var hotel = {
	name:"park",
	total:150, 
	booked:16,
	rate: 240,
	checkAvailability : function() {
		return this.total - this.booked;
	},
	discount : function() {
		return this.rate - 36;
		
	}
};


var today = new Date();

var expired = new Date();
expired.setDate(today.getDate() + 14);

var date = expired.getDate();
var day = expired.getDay();
var month = expired.getMonth();
var year = expired.getYear();

var currentMonth = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "november", "december"];
var currentDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

var expireDay = currentDay[day];
var expireMonth = currentMonth[month];



var name = document.getElementById("hotelName").textContent = hotel.name;
var rate = document.getElementById("roomRate").textContent = "$" + hotel.rate;
var discount = document.getElementById("specialRate").textContent = "$" + hotel.discount();
var expire = document.getElementById("offerEnds").textContent = "offer expires next " + expireDay + " (" + date + " " + expireMonth + " " + year + ")";


