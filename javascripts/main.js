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
	this.branch += amount;
};
Tree.prototype.trim = function (amount) {
	this.branch -= amount;
};