const mongoose = require('mongoose');
const infosSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Age: {
        type: Number
    },
    DateOfBirth: {
        type: String

    },
    MaritalStatus: {
        type: String

    },
    Address: {
        type: String

    },
    State: {
        type: String

    },
    PinCode: {
        type: String

    },
    Sex: {
        type: String

    },
    Occupation: {
        type: String

    },
    PrimaryMobileNumber: {
        type: String

    },
    SecondarMobileNumber: {
        type: String

    },
    Email: {
        type: String

    },
    SicknessReportedDate: {
        type: String
    },
    NotReportingForm: {
        type: String
    },
    CaseType: {
        type: String

    },
    PrimarySymptoms: {
        type: [String]

    },
    OtherSymptoms: {
        type: String

    },
    ConditionOfEmploye: {
        type: [String]

    },
    ActionTaken: {
        type: [String]

    },
    AddtionalAction: {
        type: String

    },
    QuaratinePeriod: {
        type: String
    },
    ExpectedDateOfBackDuty: {
        type: String
    },
    Status: {
        type: String
    }

});
const Infos = mongoose.model('Infos', infosSchema);
const testInfo = new Infos({
    Name: 'RiteshBhatt',
    Age: 45,
    DateOfBirth: '22July2001',
    MaritalStatus: 'Married ,Unmarried',
    Address: 'tehri',
    State: 'uttarakhand',
    PinCode: 249161,
    Sex: 'Male,Female,Other',
    Occupation: 'student',
    PrimaryMobileNumber: 767586,
    SecondarMobileNumber: 65866846,
    Email: 'aabc@gmail.com',
    SicknessReportedDate: '22dec2020',
    NotReportingForm: '44dec2020',
    CaseType: 'Covid-Positive,Covid-suspect,Other ',
    PrimarySymptoms: ['High temperature', 'Low sp02 level', 'Headache'],

    OtherSymptoms: 'none',
    ConditionOfEmploye: 'Severely critical,Critical,Moderately Unwell,No Health issues',
    ActionTaken: 'Sent Back Home,Asked to stay back home,Taken back to home,Admitted to quarntine center,Covid test conducted,Covid kit provided',
    AddtionalAction: 'none',
    QuaratinePeriod: 7,
    ExpectedDateOfBackDuty: '22dec2021'
});

function findByMobile(mobile) {
    Infos.find({ PrimaryMobileNumber: mobile }, function (err, docs) {
        console.log(docs);
    })
}

module.exports = Infos;