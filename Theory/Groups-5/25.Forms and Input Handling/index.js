let form = document.getElementById("form");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    if(name.value == ""){
        console.log("Please add to the name");
    }
    else if(email.value == ""){
        console.log("Please add to the email");
    }
    else{
        alert("Successfully");
        console.log(`this name ${name.value} and email of ${email.value}`);
    }

    name.value = "";
    email.value = "";

});