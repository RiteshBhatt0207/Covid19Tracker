var data;
var id;
function getData() {
    console.log('Inside get data by mobile service');
    const mobile = document.getElementById('txtMobile').value;
    Promise.all([getDataByMobile(mobile)])
        .then(values => {
            console.log(values);
            data = values[0].data.docs;
            console.log(data);
            if (data.length > 0) {
                prepareTable();
            }
            else {
                document.getElementById('recordDiv').innerHTML = "<p class=heading><b>No Data Found.</b></p>";
            }
        });
}

function deleteRecord() {
    console.log('Delete Record');
    deleteData(id);
    alert("Deleted");
}

function prepareTable() {
    console.log('Preparing table!!');
    var output = '<br><table id="tablestyle" border=1>'
        + '<th> Name </th> '
        + '<th> Mobile </th> '
        + '<th> Reporting Date </th> '
        + '<th> Quarantine Period </th> '
        + '<th> Email </th> '
        + '<th> Case Type </th> '
        + '<th> Symptoms </th> '
        + '<th> Action Details </th> '
        + '<th> Expected Return Date </th>';

    data.forEach((element) => {
        output += '<tr>'
            + '<td>' + element.Name + '</td>'
            + '<td>' + element.PrimaryMobileNumber + '</td>'
            + '<td>' + element.SicknessReportedDate + '</td>'
            + '<td>' + element.QuaratinePeriod + '</td>'
            + '<td>' + element.Email + '</td>'
            + '<td>' + element.CaseType + '</td>'
            + '<td>' + element.PrimarySymptoms + '</td>'
            + '<td>' + element.ActionTaken + '</td>'
            + '<td>' + element.ExpectedDateOfBackDuty + '</td>'
            + '</tr>';
        id = element._id;
    });

    output += '</table>';

    output += ' <br> <center><input type="button" class= bton1 value="Update" id="updatebtn" onclick=updateForm()>';

    output += '&nbsp; &nbsp;&nbsp;&nbsp;<input type="button" class= bton1 value="Delete" id="deletebtn" onclick=deleteRecord()></center> ';
    document.getElementById('recordDiv').innerHTML += output;
}
function updateForm() {
    document.getElementById('updateForm').style.display = "block";
}
function closeForm() {
    document.getElementById('updateForm').style.display = "none";
}

var reporterData = {

}

function updateData() {

    reporterData.PrimaryMobileNumber = document.getElementById("txtMobile").value;

    var caseType = document.getElementById("casetypeTxt").value;
    if (caseType != null && caseType != "") {
        reporterData.CaseType = caseType;
    }

    var symptoms = document.getElementById("sympTxt").value;
    if (symptoms != null && symptoms != "") {
        reporterData.PrimarySymptoms = symptoms;
    }

    var action = document.getElementById("actdetTxt").value;
    if (action != null && action != "") {
        reporterData.ActionTaken = action;
    }

    var quarPer = document.getElementById("quarprTxt").value;
    if (quarPer != null && quarPer != "") {
        reporterData.QuaratinePeriod = quarPer;
    }
    var date = document.getElementById("returndate").value;
    if (date != null && date != "") {
        reporterData.ExpectedDateOfBackDuty = date;
    }
    var recovered = document.getElementById("recovered");
    if (recovered.checked) {
        reporterData.Status = document.getElementById("recovered").value;
    }
    console.log(reporterData);
    patchData(reporterData);
}