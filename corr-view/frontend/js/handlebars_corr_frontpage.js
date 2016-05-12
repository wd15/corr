Handlebars.registerPartial("head_extra", "");
handlebars_loader_prepend("templates/head.handlebars",
                          {"title" : "CoRR - Cloud of Reproducible Records",
                           "base_url" : "./"},
                          "head");

$(window).on("load", function() {
    handlebars_register_partial("templates/loader_wrapper.handlebars",
                                "loader_wrapper");

    // handlebars_register_partial("templates/navbar.handlebars",
    //                             "navbar");

    handlebars_loader_prepend("templates/front_page.handlebars",
                              {},
                              "body");
});
