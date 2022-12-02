/**
 * Uses the native JavaScript 'Fetch' functionality to GET data from some URL.  The type value determines how that data is manipulated. 
 * 
 * @param {String} url 
 * @param {String} type 
 */
function makeRequest(url, type){

    fetch(url).then((response) => {
        // check the status of the response to determine if success or failure if the logic should continue.
        if(!response.ok){
            document.getElementById("fetchStatus").innerHTML = "ERROR";
            console.log("ERROR!");
            // throw error and execute logic in the 'catch' callback
            throw new Error("There was an error during the Fetch request. Please try again.");
        } else { 
            console.log("GOOD!")
            document.getElementById("fetchStatus").innerHTML = "SUCCESS";
            // returns json data to next 'then' clause. 
            return response.json();
        }

    }).then((json) => {
        // check for type to determine what is rendered
        if(type == "findAll"){
            // return all data from fetch
            console.log(json);
            document.getElementById("responseViewer").textContent = JSON.stringify(json, undefined, 2);
        } else if (type == "findByIndex"){
            // get provided index value
            let index = new Number(document.getElementById("jsonIndex").value.trim());
            let data = {};
            // if provided index value is out-of-bounds, then throw error.
            if(isNaN(index) || index > json.my_education.length - 1){
                document.getElementById("fetchStatus").innerHTML += " WITH ERROR";
                throw new Error("Invalid value provided.  Please provide values between 0 and " + new String(json.my_education.length - 1) + "(max index of data).");
            } else {
                // if valid return object at provided index
                data = json.my_education[index];
            }
            console.log(data);
            document.getElementById("responseViewer").textContent = JSON.stringify(data, undefined, 2);
        }
    })
    .catch((error) => {
        // create error object using provided error's message
        let errorObj = {
            "code": 500,
            "message": error.message
        }
        // print error to DOM and to console
        document.getElementById("responseViewer").textContent = JSON.stringify(errorObj, undefined, 2);
        console.log(error.message);
    })
}