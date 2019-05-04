import React, { Component } from "react";
import $ from "jquery";
import "jquery-ui/themes/base/core.css";
import "jquery-ui/themes/base/theme.css";
import "jquery-ui/themes/base/selectable.css";
import "jquery-ui/ui/core";
import "jquery-ui/ui/widgets/selectable";
import "jquery-ui/ui/widgets/sortable";
import "./App.css";
import Template from './template';
import { toast } from 'react-toastify';

window.jQuery = $;
$.formBuilder = require("formBuilder");

var uniqid = require('uniqid');


class App extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let self = this;
        var options = {
            dataType: "json",
            render: false,
            controlPosition: 'right',
            sortableControls: true,
            editOnAdd: true,
            disabledActionButtons: ['data'],
            disableFields: [
                //'autocomplete'
            ],
            typeUserAttrs: {
                text: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid(),
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                date: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                textarea: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                autocomplete: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                file: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                button: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                header: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                number: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                select: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                hidden: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                paragraph: {
                    id: {
                        label: 'Id',
                        type: 'text',
                        placeholder: 'field id',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                'checkbox-group': {
                    randomize: {
                        label: 'Id',
                        type: 'text',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                },
                'radio-group': {
                    randomize: {
                        label: 'Id',
                        type: 'text',
                        value: uniqid()
                    },
                    field_name: {
                        label: 'Field name',
                        type: 'text',
                        placeholder: 'Field name',
                        value: 'field_name_' + uniqid()
                    }
                }
            },
            disabledAttrs: [
                'access'
            ],
            stickyControls: {
                enable: true
            },
            onSave: function (formData) {
                let fields = self.fb.actions.getData();
                let htmlData = [];

                htmlData.push(
                    "<!DOCTYPE html>" +
                    "<html lang='en'>" +
                    "<head>" +
                    "<meta charset='UTF-8'>" +
                    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
                    "<meta http-equiv='X-UA-Compatible' content='ie=edge'>" +
                    "<title>Document</title>" +
                    "</head>" +
                    "<body>"
                )

                htmlData.push("<form>");

                for (let i = 0; i < fields.length; i++) {

                    if (fields[i].type === "header") {
                        let tag = (fields[i].subtype !== undefined) ? fields[i].subtype : fields[i].type;
                        let className = (fields[i].className !== undefined) ? fields[i].className : '';
                        htmlData.push("<" + tag + " class='" + className + "'>" + fields[i].label + "</" + tag + ">");
                    }

                    // when select widget type autocomplete 
                    if (fields[i].type === "autocomplete") {

                        let placeholder = (fields[i].placeholder !== undefined) ? fields[i].placeholder : '';
                        let value = (fields[i].value !== undefined) ? fields[i].value : '';
                        let className = (fields[i].className !== undefined) ? fields[i].className : '';
                        let id = (fields[i].id !== undefined) ? fields[i].id : '';
                        let required = (fields[i].required !== undefined) ? true : false;
                        let helpText = (fields[i].description !== undefined) ? "<p class='form-text text-muted'>" + fields[i].description + "</p>" : '';

                        htmlData.push(
                            "<div class='form-group'>" +
                            "<label>" + fields[i].label + "</label>" +
                            "<input type='" + fields[i].type + "' id='" + id + "' name='" + fields[i].name + "' class='" + className + "' placeholder='" + placeholder + "' value='" + value + "' required='" + required + "'/>"
                            + helpText +
                            "</div>"
                        );
                    }

                    // when select widget paragraph 
                    if (fields[i].type === "paragraph") {
                        let className = (fields[i].className !== undefined) ? fields[i].className : '';
                        htmlData.push(
                            "<div class='form-group'>" +
                            "<p class='" + className + "'>" + fields[i].label + "</p>" +
                            "</div>"
                        );
                    }

                    // when select widget type select 
                    if (fields[i].type === "select") {
                        let options = [];
                        let id = (fields[i].id !== undefined) ? fields[i].id : '';
                        let required = (fields[i].required !== undefined) ? true : false;
                        for (let j = 0; j < fields[i].values.length; j++) {
                            options.push(
                                "<option value='" + fields[i].values[j].value + "'>" + fields[i].values[j].label + "</option>"
                            )
                        }

                        htmlData.push(
                            "<div class='form-group'>" +
                            "<label>" + fields[i].label + "</label>" +
                            "<select id='" + id + "' class='" + fields[i].className + "' required='" + required + "'>" +
                            options.join('') +
                            "</select>" +
                            "</div>"
                        );

                    }

                    // when select widget type hidden 
                    if (fields[i].type === "hidden") {
                        let id = (fields[i].id !== undefined) ? fields[i].id : '';
                        htmlData.push(
                            "<div class='form-group'>" +
                            "<input id='" + id + "' type='" + fields[i].type + "' name='" + fields[i].name + "'  value='" + fields[i].value + "'/>" +
                            "</div>"
                        );
                    }

                    // when select widget type text or date 
                    if (fields[i].type === "text" || fields[i].type === "date") {

                        let type = fields[i].type;
                        let id = (fields[i].id !== undefined) ? fields[i].id : '';
                        let placeholder = (fields[i].placeholder !== undefined) ? fields[i].placeholder : '';
                        let value = (fields[i].value !== undefined) ? fields[i].value : ''
                        let required = (fields[i].required !== undefined) ? true : false;
                        let maxlength = (fields[i].maxlength !== undefined) ? fields[i].maxlength : null;
                        let subtype = (fields[i].subtype !== undefined) ? fields[i].subtype : type;
                        let helpText = (fields[i].description !== undefined) ? "<p class='form-text text-muted'>" + fields[i].description + "</p>" : '';

                        htmlData.push(
                            "<div class='form-group'>" +
                            "<label>" + fields[i].label + "</label>" +
                            "<input type='" + subtype + "' id='" + id + "' name='" + fields[i].name + "' placeholder='" + placeholder + "' value='" + value + "' required='" + required + "' maxlength='" + maxlength + "'/>"
                            + helpText +
                            "</div>"
                        );
                    }

                    // when select widget type number  
                    if (fields[i].type === "number") {

                        let id = (fields[i].id !== undefined) ? fields[i].id : '';
                        let placeholder = (fields[i].placeholder !== undefined) ? fields[i].placeholder : '';
                        let value = (fields[i].value !== undefined) ? fields[i].value : ''
                        let required = (fields[i].required !== undefined) ? true : false;
                        let className = (fields[i].className !== undefined) ? fields[i].className : '';
                        let max = (fields[i].max !== undefined) ? fields[i].max : null;
                        let min = (fields[i].min !== undefined) ? fields[i].min : null;
                        let step = (fields[i].step !== undefined) ? fields[i].step : null;
                        let helpText = (fields[i].description !== undefined) ? "<p class='form-text text-muted'>" + fields[i].description + "</p>" : '';

                        htmlData.push(
                            "<div class='form-group'>" +
                            "<label>" + fields[i].label + "</label>" +
                            "<input type='" + fields[i].type + "' id='" + id + "' class='" + className + "' name='" + fields[i].name + "' placeholder='" + placeholder + "' value='" + value + "' required='" + required + "' max='" + max + "'  min='" + min + "'  step='" + step + "' />"
                            + helpText +
                            "</div>"
                        );
                    }

                    // when select widget type file 
                    if (fields[i].type === "file") {

                        let id = (fields[i].id !== undefined) ? fields[i].id : '';
                        let className = (fields[i].className !== undefined) ? fields[i].className : '';
                        let placeholder = (fields[i].placeholder !== undefined) ? fields[i].placeholder : '';
                        let required = (fields[i].required !== undefined) ? true : false;
                        let multiple = (fields[i].multiple !== undefined) ? true : false;
                        let helpText = (fields[i].description !== undefined) ? "<p class='form-text text-muted'>" + fields[i].description + "</p>" : '';

                        htmlData.push(
                            "<div class='form-group'>" +
                            "<label>" + fields[i].label + "</label>" +
                            "<input type='" + fields[i].type + "' id='" + id + "' name='" + fields[i].name + "' placeholder='" + placeholder + "' class='" + className + "' required='" + required + "' multiple='" + multiple + "'/>"
                            + helpText +
                            "</div>"
                        );
                    }

                    // when select widget type button 
                    if (fields[i].type === "button") {

                        let type = fields[i].type;
                        let id = (fields[i].id !== undefined) ? fields[i].id : '';
                        let label = (fields[i].label !== undefined) ? fields[i].label : 'button';
                        let className = (fields[i].className !== undefined) ? fields[i].className : 'btn btn-default';
                        let value = (fields[i].value !== undefined) ? fields[i].value : label;
                        let subtype = (fields[i].subtype !== undefined) ? fields[i].subtype : type;

                        htmlData.push(
                            "<div class='form-group'>" +
                            "<input type='" + subtype + "' id='" + id + "' name='" + fields[i].name + "' value='" + value + "' class='" + className + "' />" +
                            "</div>"
                        );
                    }

                    // when select widget type textarea 
                    if (fields[i].type === "textarea") {

                        let rows = (fields[i].rows !== undefined) ? fields[i].rows : 3;
                        let required = (fields[i].required !== undefined) ? true : false;
                        let value = (fields[i].value !== undefined) ? fields[i].value : '';
                        let maxlength = (fields[i].maxlength !== undefined) ? fields[i].maxlength : null;
                        let placeholder = (fields[i].placeholder !== undefined) ? fields[i].placeholder : null;
                        let helpText = (fields[i].description !== undefined) ? "<p class='form-text text-muted'>" + fields[i].description + "</p>" : '';

                        htmlData.push(
                            "<div class='form-group'>" +
                            "<label>" + fields[i].label + "</label>" +
                            "<textarea placeholder='" + placeholder + "' class='" + fields[i].className + "' rows='" + rows + "' required='" + required + "' maxlength='" + maxlength + "'>" + value + "</textarea>"
                            + helpText +
                            "</div>"
                        );
                    }


                    // when select widget type radio group 
                    if (fields[i].type === "radio-group") {

                        let options = [];
                        let required = (fields[i].required !== undefined) ? true : false;
                        let helpText = (fields[i].description !== undefined) ? "<p class='form-text text-muted'>" + fields[i].description + "</p>" : '';
                        let inline = (fields[i].inline !== undefined) ? ' class="d-inline-block"' : null;

                        for (let j = 0; j < fields[i].values.length; j++) {
                            options.push(
                                "<li" + inline + "><label><input type='radio' name='" + fields[i].name + "' value='" + fields[i].values[j].value + "' required='" + required + "' />" + fields[i].values[j].label + "</label></li>"
                            )
                        }

                        htmlData.push(
                            "<div class='form-group'>" +
                            "<label>" + fields[i].label + "</label>" +
                            "<ul>" + options.join('') + "</ul>"
                            + helpText +
                            "</div>"
                        );

                    }

                    // when select widget type checkbox group 
                    if (fields[i].type === "checkbox-group") {
                        let options = [];
                        for (let j = 0; j < fields[i].values.length; j++) {
                            options.push(
                                "<li><label><input type='checkbox' value='" + fields[i].values[j].value + "' />" + fields[i].values[j].label + "</label></li>"
                            )
                        }
                        htmlData.push(
                            "<div class='form-group'>" +
                            "<label>" + fields[i].label + "</label>" +
                            "<ul>" + options.join('') + "</ul>" +
                            "</div>"
                        );
                    }

                }

                htmlData.push(
                    "<script type='text/javascript'>" +
                    "let head = document.getElementsByTagName('head')[0];" +
                    "let style = document.createElement('style');" +
                    "style.setAttribute('type', 'text/css');" +
                    "style.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');" +
                    "head.appendChild(style);" +
                    "</script>"
                )

                htmlData.push("</form>");

                htmlData.push(
                    "</body>" +
                    "</html>"
                )

                $('#preview').val(htmlData.join(''))


                if (fields.length === 0) {
                    return false;
                }
            },
            onClearAll: function (formData) {
                $('#preview').text('');
            }
        }

        self.fb = $("#fb-editor").formBuilder(options);
    }

    render() {
        return Template(this);
    }
}


export default App;
