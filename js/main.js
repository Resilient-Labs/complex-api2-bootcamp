document.querySelector("button").addEventListener("click", getCharacter);

function getCharacter() {
  let searchName = document.querySelector("input").value;
  let protagonistName = document.querySelector(".protagonist-name");
  let protagonistDescription = document.querySelector(
    ".protagonist-description"
  );
  let protagonistPlayer = document.querySelector(".protagonist-video");
  let apiKey = "AIzaSyD8oW6pPzAt8Ra5MfFpk3Kucd0aRlCIucA";

  document.getElementById("character").style.display = "flex";

  let url = `https://last-airbender-api.fly.dev/api/v1/characters?name=${searchName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      protagonistName.innerText = data[0].name;
      console.log(protagonistName);
      document.querySelector(".protagonist-img").src = data[0].photoUrl;
      protagonistDescription.innerText = data[0].affiliation;
      console.log(protagonistDescription);

      let protagonistVideoUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&order=viewCount&order=relevance&q=${data[0].name} + avatar`;
      fetch(protagonistVideoUrl)
        .then((res) => res.json())
        .then((data2) => {
          console.log(data2);
          protagonistPlayer.src = `https://www.youtube.com/embed/${data2.items[0].id.videoId}`;
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// function video() {
//   let videoPlayer = document.querySelector(".video");
//   let apiKey = "AIzaSyD8oW6pPzAt8Ra5MfFpk3Kucd0aRlCIucA";
//   let videoUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&order=viewCount&order=relevance&q=${date[0].name}`;
//   fetch(videoUrl)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       videoPlayer.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
//     });
// }
