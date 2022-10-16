document.querySelector('button').addEventListener('click', trackCovid) 

function trackCovid() {
    const locationApi = 'http://ip-api.com/json/'
    let resultsUl = document.querySelector('.results-ul');
    console.log(locationApi)
    fetch(locationApi)
        .then(response => response.json())

        .then(data => {
            console.log(data)

            const listSection = document.createElement('section');
            listSection.classList.add('list-section')
            resultsUl.appendChild(listSection)

            const list1 = document.createElement('li');
            const list2 = document.createElement('li');
            const list3 = document.createElement('li');
        
            list1.innerText = 'CURRENT IP: ' + data.query
            list2.innerText = 'COUNTRY: ' + data.country
            list3.innerText = 'REGION NAME: ' + data.regionName
            
            list1.classList.add('list-li');
            list2.classList.add('list-li');
            list3.classList.add('list-li');
            
            listSection.appendChild(list1);
            listSection.appendChild(list2);
            listSection.appendChild(list3);
            
            const state = data.regionName
            
            const covidApi = `https://coronavirus.m.pipedream.net/`
            fetch(covidApi)
            .then(response => response.json())

            .then(covidData => {
                console.log(covidData.rawData)
                
                for(let i = 0; i < covidData.rawData.length; i++){
                    if(covidData.rawData[i].Province_State == state){
                        const listSectionTwo = document.createElement('section');
                        listSectionTwo.classList.add('list-section-two')
                        listSection.appendChild(listSectionTwo)

                        const list4 = document.createElement('li');
                        list4.innerText ='COUNTY: ' + covidData.rawData[i].Admin2;
                        list4.classList.add('list-li');
                        listSectionTwo.appendChild(list4);

                        const list5 = document.createElement('li');
                        list5.innerText ='CURRENT # OF CASES: ' + covidData.rawData[i].Confirmed;
                        list5.classList.add('list-li');
                        listSectionTwo.appendChild(list5);

                        const list6 = document.createElement('li');
                        list6.innerText ='CURRENT # OF DEATHS: ' + covidData.rawData[i].Deaths;
                        list6.classList.add('list-li');
                        listSectionTwo.appendChild(list6);

                        const list7 = document.createElement('li');
                        list7.innerText ='LAST UPDATED: ' + covidData.rawData[i].Last_Update;
                        list7.classList.add('list-li');
                        listSectionTwo.appendChild(list7);
                    }
                    
                }
                
            }) 
    
            .catch(error => {
                console.log(`Error ${error}`)
            })
        })  
        .catch(error => {
        console.log(`Error ${error}`)
        })
}