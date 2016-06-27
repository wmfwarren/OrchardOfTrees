"use strict";

var timeCounter = 0;

var timedGrow = window.setInterval(() => {
	pearTree.grow(2);
	$("#treeHeightsArea").append(`<div class="pearTreeStyles">
		Your pear tree is ${pearTree.height} tall, and has ${pearTree.branch} branches!
		</div>`);
	oakTree.grow(4);
	$("#treeHeightsArea").append(`<div class="oakTreeStyles">
		Your oak tree is ${oakTree.height} tall, and has ${oakTree.branch} branches!
		</div>`);

	timeCounter++;
	//check to trim
	if (timeCounter % 10 === 0 && timeCounter !== 0){
		pearTree.trim(3);
		oakTree.trim(6);
	}
	//check to see if it is time to stop
	if (timeCounter === 30){
		window.clearInterval(timedGrow);
	}
} ,1000);

timedGrow();


