"use strict";

function Plant() {
	this.height = 0;
}

function Tree(){
	this.branch = 0;
}

Tree.prototype = new Plant();
//Plant Functions
Plant.prototype.increaseHeight = function (growth) {
	this.height += growth;
};
Plant.prototype.decreaseHeight = function (amountToDecrease) {
	this.height -= amountToDecrease;
};
//Tree Functions
Tree.prototype.grow = function (amount) {
	this.increaseHeight(amount);
	this.branch = Math.floor(this.height / 10);
};
Tree.prototype.trim = function (amount) {
	this.decreaseHeight(amount);
	this.branch = Math.floor(this.height / 10);
	this.branch -= 1;
};
//The types of trees
var pearTree = new Tree();
var oakTree = new Tree();