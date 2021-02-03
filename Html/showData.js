var data;

function showData() {
    console.log('Inside get data service');

    Promise.all([getDataPromise])
        .then(values => {
            console.log(values);
            data = values[0].data.info;
            console.log(data);
            prepareTable(data);
        });
}
function filterData() {
    status = document.getElementById("filterdata").value;
    console.log(status);

    output = [];
    data.forEach(element => {
        if (element.Status == status) {
            output.push(element);
        }
    });
    if (output.length > 0) {
        prepareTable(output);
    }
    else {
        document.getElementById('responseTable').innerHTML = "<p class=heading><b>No Data Found.</b></p>";;
    }
}

function prepareTable(data) {

    console.log('Preparing table!!');
    var output = '<table border=1 id="tablestyle">'
        + '<th> Name </th> '
        + '<th> Age </th> '
        + '<th> DOB </th> '
        + '<th> Sex </th> '
        + '<th> Mobile </th> '
        + '<th> Reporting Date </th> '
        + '<th> Quarantine Period </th> '
        + '<th> Address </th> '
        + '<th> Email </th> '
        + '<th> Marital Status</th> '
        + '<th> Occupation </th> '
        + '<th> Case Type </th> '
        + '<th> Symptoms </th> '
        + '<th> Action Details </th> '
        + '<th> Expected Return Date </th>';

    data.forEach((element) => {
        output += '<tr>'
            + '<td>' + element.Name + '</td>'
            + '<td>' + element.Age + '</td>'
            + '<td>' + element.DateOfBirth + '</td>'
            + '<td>' + element.Sex + '</td>'
            + '<td>' + element.PrimaryMobileNumber + '</td>'
            + '<td>' + element.SicknessReportedDate + '</td>'
            + '<td>' + element.QuaratinePeriod + '</td>'
            + '<td>' + element.Address + '</td>'
            + '<td>' + element.Email + '</td>'
            + '<td>' + element.MaritalStatus + '</td>'
            + '<td>' + element.Occupation + '</td>'
            + '<td>' + element.CaseType + '</td>'
            + '<td>' + element.PrimarySymptoms + '</td>'
            + '<td>' + element.ActionTaken + '</td>'
            + '<td>' + element.ExpectedDateOfBackDuty + '</td>'
            + '</tr>';
    });

    output += '</table>';

    document.getElementById('responseTable').innerHTML = output;
}
