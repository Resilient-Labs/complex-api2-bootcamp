//what's the idea..
//type in the genre and get a list of movies that match that genre

document.querySelector("button").addEventListener("click", findMovie);

function findMovie() {
  let movIn = document.querySelector(".movieInput").value;
  let url = `http://www.omdbapi.com/?t=${movIn}&apikey=f1b52a0c`;

  //issue with fetch call, it keeps giving me a movie titled null when that is not the case.
  fetch(url)
    .then((res) => res.json())
    .then((movie) => {
      console.log(movie);
      let movieArr = movie.Country.split(",");
      movieArr = movieArr.map(function (word) {
        return word.trim();
      });

      console.log(movieArr);
      let mov = "";
      
      let p = document.createElement("p");
      p.innerHTML = ''
      for (let movi of movieArr) {
        mov += movi + "    ";

        let url2 = `http://universities.hipolabs.com/search?country=${movi}`;
        fetch(url2)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // let schoolText = ''
            let schoolName = `${data[0].name}   |`
            console.log(schoolName);
            
            let newText = document.createTextNode(schoolName);
            
            p.appendChild(newText);
            console.log(p);
            // schoolText += data[0].name + '   |    '
            //
            // console.log(schoolText)
          });
      }
      document.querySelector(".movieResults").innerText = mov;
      document.querySelector(".countryCap").appendChild(p)
      // for (let i = 0; i < movieArr.length; i++) {
      //   let p = document.createElement("li");
      //   let text = document.createTextNode(movieArr[i]);
      //   p.appendChild(text);
      //   // console.log(p)
      //   let dole = document.querySelector(".movieResults")
      //   dole.appendChild(p);
      //   // console.log(dole)
      // }

      // document.querySelector("#movieResults").innerText = movieArr;
    })

    .catch((err) => {
      console.log(`Error ${err}`);
    });
}
// let thisText = ''
// for(let x in data){
//   thisText += data[0].name + ' \ '
// }
// console.log(thisText)
// console.log(country[0].capital);
// console.log(country)
// console.log(country[0].name)
// let countrySchoolName = country[1].name
// console.log(country)
// console.log(country[0].name)
// let p2 = document.createElement("li")//create li to put in data
// p2.textContent = countrySchoolName
// // p2.appendChild(text2)
// // console.log(p2)
// let dole2 = document.querySelector(".countryCap")
// dole2.appendChild(p2)
// console.log(dole2)
// document.querySelector('#countryCap').innerText = country[0].boxOffice
