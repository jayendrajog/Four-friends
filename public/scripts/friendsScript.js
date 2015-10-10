  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
function loadFriends() 
{
    FB.api('/me/friends', function(response) {
    	var thehtml = '';
    	for(i = 0; i < response.data.length; i++)
    	{
    		var str = response.data[i].name;
    		thehtml += '<tr><td>' + str.substr(0,str.indexOf(' ')) + '</td>';
    		thehtml += '<td>' + str.substr(str.indexOf(' ')+1) + '</td></tr>';
	  	}
	  	$('#studentList').append(thehtml);
    });
}

$(document).ready(function(){loadFriends();});



