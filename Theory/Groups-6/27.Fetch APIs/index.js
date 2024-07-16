// async function api(){
//     let d = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data=> console.log(data));
// }
// api();

async function api() {
    let result = await fetch("https://reqres.in/api/users/");
    result = await result.json();
    console.log(result);
    let tableHTML = "";
    for (let i in result.data) {
        tableHTML += `<div class = "d1"><img src="${result.data[i].avatar}">
        <h2>${result.data[i].first_name}</h2>
       <p>${result.data[i].email}</p></div>
        `;
    }
    document.getElementById("data").innerHTML = tableHTML;
}
api();

