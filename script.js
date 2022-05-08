const catApi = "https://api.thecatapi.com/v1/images/search?limit=";
const dogApi = "https://dog.ceo/api/breeds/image/random/";



  document.querySelector('input').addEventListener('change', (e) => {
    fetch(catApi + `${e.target.value}`, {
        method: "GET",
        headers: {
          "X-Api-Key": api_keys.cat,
        },
        mode: "cors",
        cache: "default",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          res.forEach((element, i) => {
            const images = document.createElement("img")
            images.src = element.url
            document.querySelector('#imgGallery').appendChild(images)
      
          });
        });
        fetch(dogApi + `${e.target.value}`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res)
    res.message.forEach((element, i) => {
        const images = document.createElement("img")
        images.src = element
        document.querySelector('#imgGallery').appendChild(images)
      });
  });
  })

//   const test = Promise.all([fetch(catApi, {
//     method: "GET",
//     headers: {
//       "X-Api-Key": api_keys.cat
//     },
//     mode: "cors",
//     cache: "default",
//   }), fetch(dogApi)]).then(values => console.log(values[0].then(res => res.json())))
