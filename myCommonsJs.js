//detect if DV is a new record or not
function is_add_new() {
    var add_new_mode = (!$j('input[name=SelectedID]').val());
    return add_new_mode;
};

function addWarningBtn(field, title = "Click to fix value", icon = "glyphicon glyphicon-ok") {
    var oldhtml = '';
    var newhtml = '';
    oldhtml = $j('#' + field).closest('div').html();
    newhtml = '<div class="input-group">' + oldhtml +
        '<span class="input-group-btn">' +
        '<button class="btn btn-default btn-fix" myfield="' + field + '" type="button" title="' + title + '">' +
        '<span class="' + icon + '"></span>' +
        '</button>' +
        '</span>' +
        '</div>';
    $j('#' + field).closest('div').html(newhtml);
}

function ToggleFix(field, a = 'default') {

    //TODO: fix this code

    $field = $j('#' + field);

    if (!$field.next().children('.btn-fix').hasClass('btn-' + a)) {

        if (a === 'default') {
            $field.next().children('.btn-fix').removeClass('btn-warning btn-danger');
            $field.next().children('.btn-fix').children().removeClass('glyphicon-warning-sign glyphicon-remove ');
            $field.next().children('.btn-fix').children().toggleClass('glyphicon-ok');
            $field.parents('.form-group').removeClass('has-error');
        };
        if (a === 'warning') {
            $field.next().children('.btn-fix').children().toggleClass('glyphicon-warning-sign');
            $field.next().children('.btn-fix').removeClass('btn-default');
            $field.next().children('.btn-fix').children().removeClass('glyphicon-ok');
        };
        if (a === 'danger') {
            $field.next().children('.btn-fix').children().toggleClass('glyphicon-remove');
            $field.next().children('.btn-fix').removeClass('btn-default');
            $field.next().children('.btn-fix').children().removeClass('glyphicon-ok');
        };
        $field.next().children('.btn-fix').toggleClass('btn-' + a);
    }
}

function show_error(field, campo, msg) {
    modal_window({
        message: '<div class="alert alert-danger">' + msg + '</div>',
        title: 'Error en ' + campo,
        close: function() {
            $j('#' + field).parents('.form-group').addClass('has-error');
            $j('#' + field).focus();
        }
    });

    return false;
}

function show_warning(field, campo, msg) {
    modal_window({
        message: '<div class="alert alert-warning">' + msg + '</div>',
        title: 'Atención en ' + campo,
        close: function() {
            $j('#' + field).parents('.form-group').addClass('has-error');
            $j('#' + field).focus();
        }
    });

    return false;
}