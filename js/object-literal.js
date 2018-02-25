var hotel = {
	name:"Island Hotel",
	total:150, 
	booked:16,
	checkAvailability : function() {
		return this.total - this.booked;
	}
};

 var name = document.getElementById("hotelName").textContent = hotel.name; 
 var availability = document.getElementById("availability").textContent = hotel.checkAvailability();
 
