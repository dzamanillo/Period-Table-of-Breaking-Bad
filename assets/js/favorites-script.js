// create div "cards" based on how many favorites in localStorage
// Contains image/name

var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
var cards = document.querySelector("#cards");
var url = "https://www.breakingbadapi.com/api/characters";
var favDiv = document.querySelector("#fav-row");

fetch(url).then (function(response) {
    response = response.json().then(function (data) {
        // console.log(data);
        for (var i = 0; i < favorites.length; i++) {
            var favoriteId = favorites[i];
            var favCard = document.createElement("div");
            var favImg = document.createElement("img");
            var favName = document.createElement("h3");

            favCard.classList = "fav-card col-3 d-flex align-items-center flex-column";

            favImg.setAttribute("src", data[favoriteId].img);
            favImg.setAttribute("id", "fav-img");

            favName.textContent = data[favoriteId].name;
            favName.classList = "text-light text-center";

            // console.log(favoriteId);

            cards.appendChild(favDiv);
            favDiv.appendChild(favCard);
            favCard.appendChild(favImg);
            favCard.appendChild(favName);
        }
    })
});