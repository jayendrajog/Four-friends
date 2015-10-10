module.exports = {
  Login: function () {
  console.log("running Login function");
var permission = "email,read_friendlists,user_status,user_likes,user_relationships,user_about_me,user_birthday,friends_status,read_stream,manage_notifications,publish_actions,user_groups,user_events";

  window.fbAsyncInit = function() {
  FB.init({
      appId      : '521096238056941',
      status: true,
      cookie: true,
      xfbml      : true,
      version    : 'v2.4'
  });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


  FB.login(function(response) 
  {
    if (response.authResponse) 
    {
        var access_token = FB.getAuthResponse()['accessToken'];
        //console.log('Access Token = '+ access_token);
        FB.api('/me', function(response)
        {
          console.log('Good to see you, '+ response.name+ '.');
        });
          getUserInfo();
          //getPermissions();
        }
        else 
        {
              console.log('User cancelled login or did not fully authorize.');
        }
  },{scope: permission});
}
}