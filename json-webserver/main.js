// (function () {
//     document.getElementById("fetchDataBtn").onclick = function() {
//         makeRequest("https://pokeapi.co/api/v2/pokemon/");
//     };

//     function makeRequest(url){
//         fetch(url).then((response) => {
//             document.getElementById("responseViewer").innerHTML = response.json;
//         }).then((data))
//         .catch((error) => {
//             document.getElementById("responseViewer").innerHTML = "An error has occurred. Please try again.";
//             console.error(error);
//         })
//     }
// })();

function makeRequest(url){
    fetch(url).then((response) => {
        if(!response.ok){
            return console.log("ERROR!");
        } else {
            console.log("GOOD!")
            return response.json();
        }

    }).then((json) => {
        console.log(json);
        document.getElementById("responseViewer").innerHTML = json;
    })
    .catch((error) => {
        document.getElementById("responseViewer").innerHTML = "An error has occurred. Please try again.";
        console.error(error);
    })
}