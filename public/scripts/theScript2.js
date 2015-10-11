
  // Load the SDK asynchronously
  (function loadSDK(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

   window.fbAsyncInit = function() {
  FB.init({
    appId      : '521096238056941',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    status 	   : true, 
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use version 2.2										
  });
  fb_login();
};


  function fb_login() {
	FB.login(function(response)
		{
		 statusChangeCallback(response);
		},
		{scope: 'email,public_profile,user_friends'});
	}

// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook. 
      //window.location = "/friendSelect";
      loadFriends();
    } 
   
  }
  
  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

function loadFriends() 
{
    FB.api('/me/friends', function(response) {
    	var thehtml = '';
    	for(i = 0; i < response.data.length; i++)
    	{
    		var str = response.data[i].name;
    		thehtml += '<tr><td>' + str.substr(0,str.indexOf(' ')) + '</td>';
    		thehtml += '<td>' + str.substr(str.indexOf(' ')+1) + '</td>';
        thehtml += '<td> <input type="checkbox" name = "addFriends" value = "Yes"> Add Friend! </td></tr>';
	  	}
	  	$('#studentList').append(thehtml);
    });
    return null;
}

// setTimeout(
//   function() {
//     loadFriends();
//   }, 700);

//$(document).getElementById('#addFriend').onclick = function(){alert('lol');};
