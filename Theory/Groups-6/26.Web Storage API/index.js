let arr = [
    {'name' : 'Sujan' , 'age' : '20' , 'email' : 'sujan.devotee@gmail.com'},
    {'name' : 'Jay' , 'age' : '21' , 'email' : 'jay.devotee@gmail.com'},
    {'name' : 'Kishan' , 'age' : '20' , 'email' : 'kishan.devotee@gmail.com'},
    {'name' : 'Hit' , 'age' : '21' , 'email' : 'hit.devotee@gmail.com'},
    {'name' : 'Sanket' , 'age' : '22' , 'email' : 'sanket.devotee@gmail.com'},
    {'name' : 'Nirav' , 'age' : '24' , 'email' : 'nirav.devotee@gmail.com'},
    {'name' : 'Jenil' , 'age' : '24' , 'email' : 'jenil.devotee@gmail.com'},
    {'name' : 'Parshant' , 'age' : '19' , 'email' : 'parshant.devotee@gmail.com'}
];
DataTable(arr);

function DataTable(d){
    let table = document.getElementById("data");
    for(let i = 0; i < d.length; i++){
        let row = `<tr>
            <td>${d[i].name}</td>
            <td>${d[i].age}</td>
            <td>${d[i].email}</td>
        </tr>`
        table.innerHTML += row;
    }
}
// Local Storage Data Set
localStorage.setItem("d",JSON.stringify(arr));

// Local Storage Data Get
let data_get = JSON.parse(localStorage.getItem("d"));
console.log(data_get);
