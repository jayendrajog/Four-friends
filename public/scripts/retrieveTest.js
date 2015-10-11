$(document).ready(function () {
	"use strict";
	retrieve();
});

function retrieve() {
	console.log("file is loading");
	var obj = JSON.parse(localStorage.getItem('dataStorage'));
	console.log(obj);
}
