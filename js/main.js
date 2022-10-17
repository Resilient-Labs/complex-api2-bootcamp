
document.querySelector("#submit").addEventListener("click", getName);  

function getName(event) {
    event.preventDefault(); 
    let url = `https://randomuser.me/api/`; 
    fetch(url) 
    .then(res => res.json()) 
    .then(data => { 
         console.log(data); 
            let name = document.querySelector("#name") 
            name.innerHTML = data.results[0].name.first 
            let firstName = data.results[0].name.first 
            let url2 = `https://api.agify.io?name=${firstName}` 
            fetch(url2) 
            .then(res => res.json()) 
            .then(data => { 
                console.log(data); 
                let age = document.querySelector("#age") 
                age.innerHTML = data.age 
            })
            .catch(err => {
                console.log(`error ${err}`)
            }
            );
    })
    .catch(err => {
        console.log(`error ${err}`)
    }
    );
}

