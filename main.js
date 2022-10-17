const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};
const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e25484792bmsh4701bd6b5b53443p1b25b5jsn7dbd2e6909b3',
        'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
    }
};

let ip = '';

fetch('https://api.ipify.org/?format=json', options)
    .then(response => response.json())
    .then(response => {
        console.log(response[0]);
        document.getElementById('ipaddy').innerHTML = response.ip;
        ip = response.ip;
    })
    .then(() => {
        fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`, options2)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById('isp').innerHTML = data.isp;
                document.getElementById('flag').src = data.country_flag;
            })


    })
    .catch(err => console.error(err))






