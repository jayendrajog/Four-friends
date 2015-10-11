$(document).ready(function () {
	"use strict";
	listen();
});

function listen() {
	$('#submitFriends').click(function() {
		console.log("Clicked");
		parse();
	})
}

function parse() {
	console.log($('#studentList').html());
	var array =[];
	$('#studentList').find('tr').toArray().forEach(function(ele) {
		//console.log(ele);
		//console.log($(ele));
		var first, last, fullName;
		$(ele).find('td').toArray().forEach(function(element) {
			// var first, last;
			//console.log($(element));
				if ($(element).is(":nth-child(1)")) {
					//console.log($(this));
					//console.log("yeah?");
					//console.log("First name is: " + $(element).text());
					first = $(element).html();
				} else if ($(element).is(":nth-child(2)")) {
					//console.log("Last name is: " + $(element).text());
					last = $(element).html();
				} else {
					//var fullName = first.concat("-", last);
					fullName = first + "-" + last;
					//fullName = fullName.concat(last);
					console.log("Full name is: " + fullName);
					//console.log($(element).find('input'));
					if ($(element).find('input').is(':checked')) {
						//console.log("It's yes");
						array.push(fullName);
					} else {
						//console.log("no");
					}
				}

		});

		// if ($(ele).parent().is(":nth-child(1)")) {
		// 	//console.log($(this));
		// 	console.log("yeah?");
		// 	console.log("First name is: " + $(ele).html());
		// }
		// console.log("First name is: " + $(ele).parent().is(":nth-child(1)"));
		//console.log($ele);
		//console.log("stuff");
	});
	console.log(array);
}