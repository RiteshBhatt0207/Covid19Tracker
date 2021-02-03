
const apiUrl = 'http://localhost:8080/api/info';
const userApiUrl = 'http://localhost:8080/api/user';
const loginUrl = 'http://localhost:8080/api/user/login';

const sendData = (reporterData) => {
    console.log('Inside save data axios');
    console.log(reporterData);
    axios.post(apiUrl, reporterData
    ).then(response => {
        console.log(response);
    })

}

const getDataPromise = fetch(apiUrl).then(response => response.json());

function getDataByMobile(mobile) {
    console.log('Inside get data by mobile axios');
    console.log(mobile);
    const promise = fetch(apiUrl + '/getdata/' + mobile).then(response => response.json());
    return promise;
}

//const getDataByMobilePromise2 = fetch(apiUrl + '/getdata/' + '8054544169').then(response => response.json());

const patchData = (reporterData) => {
    console.log('Inside patch data axios');
    console.log(reporterData);
    axios.patch(apiUrl, reporterData
    ).then(response => {
        console.log(response);
    })

}

const signUp = (user) => {
    console.log('Inside save user axios');
    console.log(user);
    axios.post(userApiUrl, user
    ).then(response => {
        console.log(response);
    })

}

function signIn(user) {
    console.log('Inside login axios');
    console.log(user);
    const promise = axios.post(loginUrl, user).then(response => response, error => {
        return error;
    });
    return promise;
}

const deleteData = (id) => {
    console.log('Inside delete data axios');
    console.log(id);
    axios.delete(apiUrl + "/" + id
    ).then(response => {
        console.log(response);
    })
}