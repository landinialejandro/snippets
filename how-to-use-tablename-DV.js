$j(function() {
    if (!is_add_new()) {
        //adding button
        addWarningBtn("field-name", "title descrptions", "gly gly-ico");
        //adding other button
        addWarningBtn("other-field-name"); //with defaults values
    }
})

//listening the buttons
$j("body").on("click", ".btn-fix", function() {
    var field = this.attributes.myfield.value;
    if (field === 'field-name') {
        //your check function for field-name
    };
    if (field === 'other-field-name') {
        //your check function for other-field-name
    };
});

$j('#field-name, #other-field-name').focusout(function() {

    if (!this.value) {
        ToggleFix(this.id, 'danger'); //if the field-name has an error you can fix it 
    }

});