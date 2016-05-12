function handlebars_loader_html (filename, data, target) {
    $.get(filename, function (template_data) {
        var template = Handlebars.compile(template_data);
        $(target).html(template(data));
    }, 'html' )
}

function handlebars_loader_prepend (filename, data, target) {
    $.get(filename, function (template_data) {
        console.log(template_data);
        var template = Handlebars.compile(template_data);
        console.log(data);
        $(target).prepend(template(data));
    }, 'html' )
}

function handlebars_loader_append (filename, data, target) {
    $.get(filename, function (template_data) {
        var template = Handlebars.compile(template_data);
        $(target).append(template(data));
    }, 'html' )
}

function handlebars_register_partial (filename, target) {
    $.get(filename, function (template_data) {
        console.log(template_data);
        Handlebars.registerPartial(target, template_data);
    }, 'html' );
}
