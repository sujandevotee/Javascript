
let show = document.querySelector(".show");

document.querySelector(".btn").addEventListener('click', () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((location) => {
            let {latitude, longitude} = location.coords;
            show.textContent = `the latitude ${location.coords.latitude} & longitude ${location.coords.longitude}`;
        }, (err) => {
            show.textContent = err.message;
            console.log(err.message);
        });
    }
})