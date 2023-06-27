var Submit_data = document.getElementById("search-form");
var show = document.getElementById("show-here");
Submit_data.addEventListener("submit", submit);
function submit(event) {
  event.preventDefault();
  var input_show = document.getElementById("input-show");
  var movie_name = input_show.value;
  var url = "https://api.tvmaze.com/search/shows?q=" + movie_name;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(url);
      console.log(Object.values(response[0].show.summary));
      for (let i = 0; i < response.length; i++) {
        const show_data = document.createElement("div");
        show_data.className = "show-data";

        const img_src = document.createElement("img");
        img_src.src = response[i].show.image.medium;

        const showInfo = document.createElement("div");
        showInfo.className = "show-info";

        const showtitle = document.createElement("h1");
        showtitle.textContent = response[i].show.name;

        const showsummary = document.createElement("p");
        showsummary.innerHTML = response[i].show.summary;

        showInfo.appendChild(showtitle);
        showInfo.appendChild(showsummary);

        show_data.appendChild(img_src);
        show_data.appendChild(showInfo);

        show.appendChild(show_data);
      }
    });
}
