document.querySelector('button').addEventListener('click', hungryVamps)




function hungryVamps(){
    let zip = document.querySelector('.zip').value
    let URL = `https://api.zippopotam.us/us/${zip}`
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let lat = data.places[0].latitude
        let long = data.places[0].longitude
        fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=5BS2ZVYEO03F&format=json&by=position&lat=${lat}&lng=${long}`)
        .then(res => res.json())
        .then(data => {
            let month1 = data.formatted.charAt(5)
            let month2 = data.formatted.charAt(6)
            let year = data.formatted.substr(0, 4)
            let day1 = data.formatted.charAt(8)
            let day2 = data.formatted.charAt(9)
            console.log(data)
            fetch(`https://api.solunar.org/solunar/${lat},${long},${year}${month1}${month2}${day1}${day2},-4`)
            .then(res => res.json())
            .then(data => {
                let frenzy1Start = 'Minor feeding spree: ' + data.minor1Start + ' PM to '
                let frenzy1End = data.minor1Stop + ' PM'
                let frenzy2Start = 'Feeding FRENZY! ' + data.major1Start + ' AM to '
                let frenzy2End = data.major1Stop + ' AM'
                console.log(data)
                document.querySelector('.moonPhase').innerText = 'Moon Phase: ' + data.moonPhase
                document.querySelector('.minor1Start').innerText = frenzy1Start
                document.querySelector('.minor1Stop').innerText = frenzy1End
                document.querySelector('.major1Start').innerText = frenzy2Start
                document.querySelector('.major1Stop').innerText = frenzy2End
            
        })
    .catch(err => {
        console.log(`error ${err}`)
        
    });
})})}
