function makeRequest(url, type){

    fetch(url).then((response) => {
        if(!response.ok){
            document.getElementById("fetchStatus").innerHTML = "ERROR";
            console.log("ERROR!");
            throw new Error("There was an error during the Fetch request. Please try again.");
        } else {
            console.log("GOOD!")
            document.getElementById("fetchStatus").innerHTML = "SUCCESS";
            // returns json data to next 'then' clause. 
            return response.json();
        }

    }).then((json) => {
        if(type == "findAll"){
            console.log(json);
            document.getElementById("responseViewer").textContent = JSON.stringify(json, undefined, 2);
        } else if (type == "findByIndex"){
            let id = document.getElementById("jsonIndex").value.trim();
            let data = {};
            if(id > json.my_education.length - 1){
                data = {
                    "code": 500,
                    "message": "Invalid value provided.  Please provide values between 0 and " + new String(json.my_education.length - 1) + "(max index of data)."
                }
            } else {
                data = json.my_education[id];
            }
            console.log(data);
            document.getElementById("responseViewer").textContent = JSON.stringify(data, undefined, 2);
        }
    })
    .catch((error) => {
        let errorObj = {
            "code": 500,
            "message": error.message
        }
        document.getElementById("responseViewer").textContent = JSON.stringify(errorObj, undefined, 2);
        console.log(error.message);
    })
}