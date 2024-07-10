document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("table-body");

      data.forEach((user) => {
        // Convert address object to string
        const addressString = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${addressString}</td>
          `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function myFunction() {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let rows = document.getElementById("table-body").getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    let nameColumn = rows[i].getElementsByTagName("td")[0];
    if (nameColumn) {
      let txtValue = nameColumn.textContent || nameColumn.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}
