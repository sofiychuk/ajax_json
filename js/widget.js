window.onload = function () {
    $('<ul/>', {
        'class': 'bulleted',
    }).appendTo('#employeeList');

    function getEmployee() {
        var a = $.ajax({
            url: "./data/employees.json",
            dataType: 'json',
            context: document.body
        }).done(function (res) {
            setEmployee(res);
        }).fail(function (err) {
            console.log('err', err);
        });
    }

    function setEmployee(employee) {
        var className = 'in';
        for (var i = 0; i < employee.length; i++) {
            if (!(employee[i].inoffice)) {
                $('<li/>', {
                    'class': 'out',
                    text: employee[i].name
                }).appendTo('.bulleted');
            } else {
                $('<li/>', {
                    'class': className,
                    text: employee[i].name
                }).appendTo('.bulleted');
            }
        }

    }
    getEmployee();
}