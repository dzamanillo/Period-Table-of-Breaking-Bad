var profileContainerEl = document.querySelector("#profile-container");
var dropDownEl = document.querySelector("#character-dropdown");
var subBtnEl = document.querySelector("#sub-btn");
var characterId;
var url = "https://www.breakingbadapi.com/api/characters";
var favBtn = document.querySelector("#fav-btn");
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//Dropdown builder
fetch(url).then(function (response) {
	response = response.json().then(function (data) {
		// console.log(data);

		for (var i = 0; i < data.length; i++) {
			var option = document.createElement("option");
			option.textContent = data[i].name;
			option.setAttribute("value", i);

			dropDownEl.append(option);
		}
	});
});

// * Profile Container Reset Function
var containerReset = function () {
	profileContainerEl.innerHTML = "";
};

// * Get ID Submit Function

//* Get Dropdown Value Function
var getId = function () {
	characterId = dropDownEl.value;
};

// * Build Profile from Home Function
var buildProfile = function () {
	fetch(url).then(function (response) {
		response = response.json().then(function (data) {
			var characterId = JSON.parse(localStorage.getItem("value"));

			// console.log(characterId);

			var imgContainer = document.createElement("div");
			// imgContainer.classList.add("m-2");
			var statContainer = document.createElement("div");

			//place img
			imgUrl = data[characterId].img;
			var profileImg = document.createElement("img");
			profileImg.setAttribute("src", imgUrl);
			profileImg.setAttribute("id", "profile-img");

			imgContainer.append(profileImg);

			//character name
			var characterNameTitle = document.createElement("h3");
			characterNameTitle.textContent = data[characterId].name;

			statContainer.append(characterNameTitle);

			//occupation
			var occupationDiv = document.createElement("div");

			var occupationTitle = document.createElement("h3");
			occupationTitle.textContent = "Occupation:";

			occupationDiv.append(occupationTitle);

			for (var i = 0; i < data[characterId].occupation.length; i++) {
				var job = document.createElement("h4");
				job.textContent = data[characterId].occupation[i];
				occupationDiv.append(job);
			}

			statContainer.append(occupationDiv);

			//nickname
			var nicknameTitle = document.createElement("h3");
			nicknameTitle.textContent = "Nickname:";

			statContainer.append(nicknameTitle);

			var nickname = document.createElement("h4");
			nickname.textContent = data[characterId].nickname;

			statContainer.append(nickname);

			//seasons
			var seasonsDiv = document.createElement("div");

			var seasonsTitle = document.createElement("h3");
			seasonsTitle.textContent = "Seasons:";

			seasonsDiv.append(seasonsTitle);

			for (var i = 0; i < data[characterId].appearance.length; i++) {
				var season = document.createElement("p");
				season.textContent = data[characterId].appearance[i] + " ";
				season.classList.add("d-inline");
				seasonsDiv.append(season);
			}

			statContainer.append(seasonsDiv);

			//portrayed by
			var actorTitle = document.createElement("h3");
			actorTitle.textContent = "Portrayed By:";

			var actorName = document.createElement("h4");
			var actor = data[characterId].portrayed;
			actorName.textContent = actor;

			statContainer.append(actorTitle, actorName);

			//status
			var statusTitle = document.createElement("h3");
			statusTitle.textContent = "Status:";

			var statusEnd = document.createElement("h4");
			var end = data[characterId].status;
			statusEnd.textContent = end;

			if (characterId === 38) {
				profileImg.setAttribute("src", "https://vignette.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605");
			}

			statContainer.append(statusTitle, statusEnd);

			profileContainerEl.append(imgContainer, statContainer);
		});
	});
};

// * Build Profile from Submit Button Function
var buildProfileSubmit = function () {
	fetch(url).then(function (response) {
		response = response.json().then(function (data) {
			// console.log(characterId);

			var imgContainer = document.createElement("div");
			// imgContainer.classList.add("m-2");
			var statContainer = document.createElement("div");

			//place img
			imgUrl = data[characterId].img;
			var profileImg = document.createElement("img");
			profileImg.setAttribute("src", imgUrl);
			profileImg.setAttribute("id", "profile-img");

			imgContainer.append(profileImg);

			//character name
			var characterNameTitle = document.createElement("h3");
			characterNameTitle.textContent = data[characterId].name;

			statContainer.append(characterNameTitle);

			//occupation
			var occupationDiv = document.createElement("div");

			var occupationTitle = document.createElement("h3");
			occupationTitle.textContent = "Occupation:";

			occupationDiv.append(occupationTitle);

			for (var i = 0; i < data[characterId].occupation.length; i++) {
				var job = document.createElement("h4");
				job.textContent = data[characterId].occupation[i];
				occupationDiv.append(job);
			}

			statContainer.append(occupationDiv);

			//nickname
			var nicknameTitle = document.createElement("h3");
			nicknameTitle.textContent = "Nickname:";

			statContainer.append(nicknameTitle);

			var nickname = document.createElement("h4");
			nickname.textContent = data[characterId].nickname;

			statContainer.append(nickname);

			//seasons
			var seasonsDiv = document.createElement("div");

			var seasonsTitle = document.createElement("h3");
			seasonsTitle.textContent = "Seasons:";

			seasonsDiv.append(seasonsTitle);

			for (var i = 0; i < data[characterId].appearance.length; i++) {
				var season = document.createElement("p");
				season.textContent = data[characterId].appearance[i] + " ";
				season.classList.add("d-inline");
				seasonsDiv.append(season);
			}

			statContainer.append(seasonsDiv);

			//portrayed by
			var actorTitle = document.createElement("h3");
			actorTitle.textContent = "Portrayed By:";

			var actorName = document.createElement("h4");
			var actor = data[characterId].portrayed;
			actorName.textContent = actor;

			statContainer.append(actorTitle, actorName);

			//status
			var statusTitle = document.createElement("h3");
			statusTitle.textContent = "Status:";

			if (characterId === 38) {
				profileImg.setAttribute("src", "https://vignette.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605");
			}

			var statusEnd = document.createElement("h4");
			var end = data[characterId].status;
			statusEnd.textContent = end;

			statContainer.append(statusTitle, statusEnd);

			profileContainerEl.append(imgContainer, statContainer);
		});
	});
};

// * Sub Btn Handler Function
var subBtnHandler = function () {
	getId();
	containerReset();
	buildProfileSubmit();
};

// @ Sub Btn
subBtnEl.addEventListener("click", subBtnHandler);

// function getCharacterQuotes() {
// 	fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes").then(
// 		(response) => {
// 			if (response.status === 200) {
// 				return response.json().then((post) => {
// 					var quote = post[0].quote;
// 					var author = post[0].author;
// 					// console.log(quote + ";" + author);
// 					document.getElementById("random-quote").textContent =
// 						'"' + quote + '"' + " - " + author;
// 				});
// 			} else {
// 				throw new Error("Something went wrong on api server!");
// 			}
// 		}
// 	);
// }

// Add to favorites in localStorage
favBtn.addEventListener("click", function () {
	// Check to see if characterId is defined
	if (characterId) {
		// If array is empty, force first entry...
		if (favorites.length === 0) {
			localStorage["favorites"] = JSON.stringify(favorites);
		}
		// ...otherwise update array with new value, up to a maximum of 8
		if (favorites.indexOf(characterId) === -1 && favorites.length < 8) {
			favorites.push(characterId);
			localStorage.setItem("favorites", JSON.stringify(favorites));
		}
	}
	// If characterId is not defined, retrieve it from localStorage
	else {
		characterId = JSON.parse(localStorage.getItem("value"));
		characterId = characterId[0];
		if (favorites.length === 0) {
			localStorage["favorites"] = JSON.stringify(favorites);
		}
		if (favorites.indexOf(characterId) === -1 && favorites.length < 8) {
			favorites.push(characterId);
			localStorage.setItem("favorites", JSON.stringify(favorites));
		}
	}
});

//! ON LOAD
containerReset();
buildProfile();
// getCharacterQuotes();
