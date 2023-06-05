const GIPHY_API_KEY = "MUo9iaPuXlEHADGRbLgj4pMkbac9p9Vt";
const URL_GIPHY = "https://api.giphy.com/v1/gifs/search";
const buttonFormSearch = document.querySelector(".btn-form-search");
const buttonFormDelete = document.querySelector(".btn-form-delete");

async function getGiphyGif(url, q, api_key) {
  const res = await axios.get(url, { params: { q, api_key } });
  const random = randomNumberFromInterval(0, 30);
  renderGif(res.data.data[random].images.original.url);
}

function renderGif(url) {
  const giphyContainer = document.querySelector(".container");

  let img = document.createElement("img");
  img.src = url;
  img.classList.add("image-giphy");
  giphyContainer.appendChild(img);
}
function deleteAllGif() {
  const gifs = document.querySelectorAll(".image-giphy");
  for (let gif of gifs) {
    gif.remove();
  }
}

function randomNumberFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

buttonFormSearch.addEventListener("click", function (e) {
  const giphySearchValue = document.querySelector("#giphy-search");
  getGiphyGif(URL_GIPHY, giphySearchValue.value, GIPHY_API_KEY);
  giphySearchValue.value = "";
  e.preventDefault();
});

buttonFormDelete.addEventListener("click", function (e) {
  deleteAllGif();
  e.preventDefault();
});
