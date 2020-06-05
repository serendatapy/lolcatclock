var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false;

var partyButton = document.getElementById("partyTimeButton");
var wakeUpSelectorJs = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelectorJs = document.getElementById("lunchTimeSelector");
var napTimeSelectorJs = document.getElementById("napTimeSelector");

var updateClock = function(){
 
     var lolcat = document.getElementById('lolcat');
     var message = document.getElementById('timeEvent');
     var messageText;
     var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
 
     if (time == partyTime){
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
          messageText = "IZ PARTEE TIME!!";
     } else if (time == napTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
          messageText = "IZ NAP TIME...";
     } else if (time == lunchTime) {
          image = "https://i.dailymail.co.uk/i/pix/2017/07/14/16/4255C5A600000578-0-Both_of_the_fur_balls_toll_the_same_bell_in_the_rush_for_food-m-72_1500044863678.jpg";
          messageText = "IZ NOM NOM NOM TIME!!";
     } else if (time == wakeupTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
          messageText = "IZ TIME TO GETTUP.";
     } else if (time < noon) {
          messageText = "Good morning!";
     } else if (time > evening) {
          messageText = "Good Evening!";
     }else {
          messageText = "Good afternoon!";
     }
 
     message.innerText = messageText;
     lolcat.src = image;
 
     showCurrentTime();
 
};
 
var showCurrentTime = function() {
     // display the string on the webpage
     var clock = document.getElementById('clock');
     
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";
 
     // Set Hours
     if (hours >= noon){
          meridian = "PM";
     }
 
     if (hours > noon){
          hours = hours - 12;
     }
 
     // Set Minutes
     if (minutes < 10){
          minutes = "0" + minutes;
     }
 
     // Set Seconds
     if (seconds < 10){
          seconds = "0" + seconds;
     }
 
     // put together the string that displays the time
     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
     clock.innerText = clockTime;
};

var partyEvent = function() {
	if(isPartyTime === false) {
	  	isPartyTime = true;
		time = partyTime;
		partyButton.innerText="PARTY OVER!";
		partyButton.style.backgroundColor="#0A8DAB";
		
	}
	else {
	  	isPartyTime = false;
		time = new Date().getHours();
		partyButton.innerText="PARTY TIME!";
		partyButton.style.backgroundColor="#222";
	}
};

var changeWakeUp = function() {
  	wakeupTime = wakeUpSelectorJs.value;
};
var changeLunchTime = function() {
	lunchTime = lunchTimeSelectorJs.value;
};
var changeNapTime = function(){
	napTime = napTimeSelectorJs.value;
};

wakeUpSelectorJs.addEventListener("change",changeWakeUp);
lunchTimeSelectorJs.addEventListener("change",changeLunchTime);
napTimeSelectorJs.addEventListener("change",changeNapTime);
partyButton.addEventListener("click",partyEvent);

updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);