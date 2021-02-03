
function addNewCase() {
	console.log("inside addNewCase");
	getData();
	if (validateData()) {
		saveData();
	}
}

var reporterData = {
	Name: '',
	Age: '',
	DateOfBirth: '',
	MaritalStatus: '',
	Address: '',
	PinCode: '',
	Sex: '',
	Occupation: '',
	PrimaryMobileNumber: '',
	SecondarMobileNumber: '',
	EMail: '',
	State: '',
	SicknessReportedDate: '',
	CaseType: '',
	PrimarySymptoms: [],
	OtherSymptoms: '',
	ActionTaken: [],
	AddtionalAction: '',
	QuaratinePeriod: '',
	ExpectedDateOfBackDuty: '',
	NotReportingForm: '',
	Status: 'Active'
}

function getData() {

	reporterData.Name = document.getElementById('txtName').value;
	reporterData.Age = document.getElementById("txtAge").value;
	reporterData.DateOfBirth = document.getElementById("dateDob").value;
	var radiobuttonsMarSta = document.getElementsByName('radioMarSta');
	reporterData.MaritalStatus = getRadioValue(radiobuttonsMarSta);
	reporterData.Address = document.getElementById("txtareaadd").value;
	reporterData.State = document.getElementById("select").value;
	reporterData.PinCode = document.getElementById("txtpincode").value;
	var radioBtns = document.getElementsByName('radioSex');
	reporterData.Sex = getRadioValue(radioBtns);

	reporterData.Occupation = document.getElementById("occupationSelect").value;
	reporterData.PrimaryMobileNumber = document.getElementById("mobileno").value;
	reporterData.SecondaryMobileNumber = document.getElementById("othermobileno").value;
	reporterData.EMail = document.getElementById("email").value;
	reporterData.SicknessReportedDate = document.getElementById("sickDate").value;
	var radiobuttonscase = document.getElementsByName('radioCaseType');
	reporterData.CaseType = getRadioValue(radiobuttonscase);
	reporterData.PrimarySymptoms = getCheckBoxValue(document.getElementsByName("symptoms"));
	reporterData.NotReportingFrom = document.getElementById("notReoprtingDate").value;
	reporterData.CondtionOfEmp = getCheckBoxValue(document.getElementsByName("condition1"));
	reporterData.OtherSymptoms = document.getElementById("otherSymptom").value;
	reporterData.ActionTaken = getCheckBoxValue(document.getElementsByName('action'));

	reporterData.AddtionalAction = document.getElementById("additionalAction").value;
	reporterData.QuaratinePeriod = document.getElementById("qpDays").value;
	reporterData.ExpectedDateOfBackDuty = document.getElementById("expextedDate").value;



	console.log(reporterData);

}

function getCheckBoxValue(checkBoxes) {
	console.log("inside checkBoxe " + checkBoxes.length);
	var selectedVals = [];
	for (i = 0; i < checkBoxes.length; i++) {
		console.log(checkBoxes[i].value + " " + checkBoxes[i].checked);
		if (checkBoxes[i].checked) {
			selectedVals.push(checkBoxes[i].value);
		}
	}
	return selectedVals;
}

function getRadioValue(radioButtons) {
	console.log("inside radiobutton " + radioButtons.length);
	for (i = 0; i < radioButtons.length; i++) {
		console.log(radioButtons[i].value + " " + radioButtons[i].checked);
		if (radioButtons[i].checked) {
			return radioButtons[i].value;
		}
	}
}
function validateData() {
	var allSelected = true;
	if (reporterData.Name == null || reporterData.Name == "") {
		document.getElementById('txtName').style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.Age == null || reporterData.Age == "") {
		document.getElementById('txtAge').style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.DateOfBirth == null || reporterData.DateOfBirth == "") {
		document.getElementById('dateDob').style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.Address == null || reporterData.Address == "") {
		document.getElementById("txtareaadd").style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.PinCode == null || reporterData.PinCode == "") {
		document.getElementById('txtpincode').style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.PrimaryMobileNumber == null || reporterData.PrimaryMobileNumber == "") {
		document.getElementById('mobileno').style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.SecondaryMobileNumber == null || reporterData.SecondaryMobileNumber == "") {
		document.getElementById('othermobileno').style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.EMail == null || reporterData.EMail == "") {
		document.getElementById('email').style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.PinCode == null || reporterData.PinCode == "") {
		document.getElementById('txtpincode').style.borderColor = "red";
		allSelected = false;
	}
	if (reporterData.MaritalStatus == null || reporterData.MaritalStatus == "") {
		document.getElementById('radioDiv').style.border = " 2px solid red";
		allSelected = false;
	}
	if (reporterData.Sex == null || reporterData.Sex == "") {
		document.getElementById('sexDiv').style.border = " 2px solid red";
		allSelected = false;
	}
	if (reporterData.State == null || reporterData.State == "") {
		document.getElementById('selectDiv').style.border = " 2px solid red";
		allSelected = false;
	}
	if (reporterData.Occupation == null || reporterData.Occupation == "") {
		document.getElementById('occupationDiv').style.border = " 2px solid red";
		allSelected = false;
	}

	if (reporterData.CaseType == null || reporterData.CaseType == "") {
		document.getElementById('radioCaseDiv').style.border = " 2px solid red";
		allSelected = false;
	}
	if (reporterData.PrimarySymptoms == null || reporterData.PrimarySymptoms == "") {
		document.getElementById('psymDiv').style.border = " 2px solid red";
		allSelected = false;
	}

	if (reporterData.CondtionOfEmp == null || reporterData.CondtionOfEmp == "") {
		document.getElementById('conditionDiv').style.border = " 2px solid red";
		allSelected = false;
	}

	if (allSelected == false) {
		document.getElementById('labelrequired').innerHTML = 'All Fields Are Required';
	}
	return allSelected;

}
function saveData() {

	var ans = window.confirm("are you sure you want to save?");
	if (ans) {
		console.log(reporterData);
		sendData(reporterData);
		alert("saved  successfully");
	}
}
