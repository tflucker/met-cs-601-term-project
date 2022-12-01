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
        document.getElementById("responseViewer").innerHTML = response.json;
        console.log(response.json);
    }).then((data) => console.log(data))
    .catch((error) => {
        document.getElementById("responseViewer").innerHTML = "An error has occurred. Please try again.";
        console.error(error);
    })
}