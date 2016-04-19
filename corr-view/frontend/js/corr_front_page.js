$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    new Clipboard('.btn');
});
var xmlhttp = new XMLHttpRequest();
console.log(this.session);
xmlhttp.open("GET", "http://"+config.host+":"+config.port+"/cloud/v0.1/public/user/home");
xmlhttp.send();
xmlhttp.onreadystatechange=function()
{
    console.log(xmlhttp.responseText);
    if ((xmlhttp.status >= 200 && xmlhttp.status <= 300) || xmlhttp.status == 304) {
        console.log(xmlhttp.responseText);
        if(xmlhttp.responseText == ""){
            console.log("Cloud returned empty response!");
        }else{
            var response = JSON.parse(xmlhttp.responseText);
            console.log(response);
            var version = response["version"];
            var users = response["users"];
            var projects = response["projects"];
            var records = response["records"];
            var storage = response["storage"];
            var apps = response["apps"];
            var traffic = response["traffic"];
            document.getElementById("total-users").innerHTML = users["number"];
            document.getElementById("total-projects").innerHTML = projects["number"];
            document.getElementById("total-records").innerHTML = records["number"];
            document.getElementById("total-storage").innerHTML = storage["size"];
            console.log("Version: "+version);
            document.getElementById("footer-version").innerHTML = version;
            document.getElementById("total-apps").innerHTML = apps["size"];
            document.getElementById("total-traffic").innerHTML = traffic["size"];
            console.log("Total Users:"+users["number"]);
            console.log("Total Projects:"+projects["number"]);
            console.log("Total Records:"+records["number"]);
            console.log("Total Storage:"+storage["size"]);
            console.log("CoRR Version:"+version);
            console.log("Total Apps:"+apps["size"]);
            console.log("Total Traffic:"+traffic["size"]);
            console.log("++Total Users:"+document.getElementById("total-users").value);
            console.log("++Total Projects:"+document.getElementById("total-projects").value);
            console.log("++Total Records:"+document.getElementById("total-records").value);
            console.log("++Total Stage:"+document.getElementById("total-storage").value);
            console.log("++CoRR Version:"+document.getElementById("footer-version").value);
            console.log("++Total Apps:"+document.getElementById("total-apps").value);
            console.log("++Total Traffic:"+document.getElementById("total-traffic").value);
        }
    } else {
        console.log("Cannot reach the cloud!");
    }
}
var param = window.location.search.substring(1);
var parts = param.split("=");
if(parts[0] == "session"){
    user.session = parts[1];
    console.log(user.session);
    user.trusted();
    user.account();
    console.log("Api Index: "+this.api);
    document.getElementById("nav-home-2").href = "./?session="+user.session;
    document.getElementById("nav-home").href = "./?session="+user.session;
    document.getElementById("nav-help").href = "./help/?session="+user.session;
    document.getElementById("nav-login").remove();
    document.getElementById("nav-base").innerHTML += "<li class='tooltipped' data-position='bottom' data-delay='50' data-tooltip='dashboard'><a href='./dashboard/?session="+user.session+"' class='waves-effect waves-block waves-light'><i class='nav-action mdi-action-dashboard'></i></a></li>\n<li class='tooltipped' data-position='bottom' data-delay='50' data-tooltip='logout'><a onclick='user.logout()' class='waves-effect waves-block waves-light'><i class='nav-action mdi-action-exit-to-app'></i></a></li>";
    document.getElementById("float-profile").innerHTML = "<a class='btn-floating btn-large cyan tooltipped' data-position='left' data-delay='50' data-tooltip='settings'><i class='mdi-action-settings'></i></a><ul><li class='tooltipped' data-position='left' data-delay='50' data-tooltip='account'><a href='#account-modal' class='modal-trigger btn-floating btn-large green'><i class='large mdi-communication-vpn-key'></i></a></li><li class='tooltipped' data-position='left' data-delay='50' data-tooltip='profile'><a href='#profile-modal' class='modal-trigger btn-floating btn-large grey darken-1'><i class='large mdi-action-account-circle'></i></a></li></ul>";

    document.getElementById('account-user-picture').src = "http://"+config.host+":"+config.port+"/cloud/v0.1/private/"+user.session+"/user/picture";
    document.getElementById('update-user-picture').src = "http://"+config.host+":"+config.port+"/cloud/v0.1/private/"+user.session+"/user/picture";
    document.getElementById('profile-user-picture').src = "http://"+config.host+":"+config.port+"/cloud/v0.1/private/"+user.session+"/user/picture";
}else if(parts[0] == "action"){
    var scope = parts[1];
    if (scope == "message_sent"){
        Materialize.toast('<span>Your message has been sent!</span>', 3000);
    }
}
function loginKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('buttonLogin').click();
    }
}
function recoverKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('buttonRecover').click();
    }
}
function registerKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('buttonRegister').click();
    }
}
function emailKeyPress(e)
{
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('buttonEmail').click();
    }
}
