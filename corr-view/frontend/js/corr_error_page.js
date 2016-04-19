// corr_error_id should be defined on the error page

var error_messages = {"415" : "It seems that the media type sent is not supported.",
                      "500" : "Something has gone seriously wrong. Please try later.",
                      "404" : "It seems that your session was ended. You should log back in.",
                      "405" : "It seems that the HTTP method used is not allowed.",
                      "500" : "Something has gone seriously wrong. Please try later.",
                      "400" : "It seems that the request has a bad structure.",
                      "409" : "It seems that this object already exists.",
                      "204" : "It seems that there is no content available here.",
                      "511" : "It seems that you have issue with your network authentication.",
                      "401" : "It seems that you do not have access to this."}

handlebars_register_partial("../templates/head_extra.handlebars",
                            "head_extra");
handlebars_register_partial("../templates/loader_wrapper.handlebars",
                            "loader_wrapper");
var title = "CoRR - Error error_id".replace("error_id", corr_error_id);

handlebars_loader_prepend("../templates/head.handlebars",
                          {"title" : title,
                           "base_url" : "../"},
                          "head");

var data = {"error_id" : corr_error_id, "error_message" : error_messages[corr_error_id]};
handlebars_loader_prepend("../templates/error_body.handlebars", data, "body");

function goBack() {
    window.history.back();
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-64854835-1', 'auto');
ga('send', 'pageview');
