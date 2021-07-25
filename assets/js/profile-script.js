var profileContainerEl = document.querySelector("#profile-container");
var dropDownEl = document.querySelector("#character-dropdown");
var subBtnEl = document.querySelector("#sub-btn");
var characterName;
var characterId;
// var charNameIdArr = [characterName, characterId]

// // connect characterId to char_id
// function getCharacterInfo() {
//     fetch('https://www.breakingbadapi.com/api/characters')
//     .then(response => {
//     //     if (response.status === 200) {
//             return response.json()
//             .then(post => {
//                 for (var i = 0; i < post.length - 1; i++) {
//                     // console.log(post[i].name + " : " + post[i].char_id);
// 					characterName = post[i].name;
// 					characterId = post[i].char_id;
// 					charNameIdArr.push(characterName + " : " + characterId);
//     //                 charactersList[i] = post[i].name;
                    
//     //                 var newElement = document.createElement('div');
//     //                 newElement.id = charactersList[i]; 
//     //                 newElement.className = "character";
//     //                 newElement.textContent = charactersList[i];
//     //                 document.body.appendChild(newElement);
//     //                 newElement.addEventListener('click', function() {
//     //                     console.log("You have clicked " + this.textContent);
//     //                     alert("You have clicked " + this.textContent);
//     //                 })
//     //                 };
//     //         });
//     //     } else {
//     //         throw new Error('Something went wrong on api server!');
//     // }  
// 				}
// 			})
// 		})
// 	}

// getCharacterInfo();

// // 
// console.log(charNameIdArr);


var url = "https://www.breakingbadapi.com/api/characters";

//Dropdown builder
fetch(url).then(function (response) {
	response = response.json().then(function (data) {
		console.log(data);

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

// * Get ID Function
var getId = function () {
	characterId = dropDownEl.value;
};

// * Build Profile Function
var buildProfile = function () {
	fetch(url).then(function (response) {
		response = response.json().then(function (data) {
			// for (var i = 0; i < data.length - 1; i++) {
				characterId = data.char_id;
				console.log(data.char_id);
			// }
			
			
			if (!characterId) {
				characterId = 0;
			}

			//character name
			var characterNameTitle = document.createElement("h3");
			// characterNameTitle.textContent = data[characterId].name;
			characterNameTitle.textContent = data[characterId].name;

			profileContainerEl.append(characterNameTitle);

			//place img
			imgUrl = data[characterId].img;
			var profileImg = document.createElement("img");
			profileImg.setAttribute("src", imgUrl);
			profileImg.setAttribute("id", "profile-img");

			profileContainerEl.append(profileImg);

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

			profileContainerEl.append(occupationDiv);

			//nickname
			var nicknameTitle = document.createElement("h3");
			nicknameTitle.textContent = "Nickname:";

			profileContainerEl.append(nicknameTitle);

			var nickname = document.createElement("h4");
			nickname.textContent = data[characterId].nickname;

			profileContainerEl.append(nickname);

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

			profileContainerEl.append(seasonsDiv);

			//portrayed by
			var actorTitle = document.createElement("h3");
			actorTitle.textContent = "Portrayed By:";

			var actorName = document.createElement("h4");
			var actor = data[characterId].portrayed;
			actorName.textContent = actor;

			profileContainerEl.append(actorTitle, actorName);

			//status
			var statusTitle = document.createElement("h3");
			statusTitle.textContent = "Status:";

			var statusEnd = document.createElement("h4");
			var end = data[characterId].status;
			statusEnd.textContent = end;

			profileContainerEl.append(statusTitle, statusEnd);
		});
	});
};

// * Sub Btn Handler Function
var subBtnHandler = function () {
	getId();
	containerReset();
	buildProfile();
};

// @ Sub Btn
subBtnEl.addEventListener("click", subBtnHandler);


function getCharacterQuotes() {
	fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
	.then(response => {
		if (response.status === 200) {
			return response.json()
			.then(post => {
	
				var quote=post[0].quote;
				var author=post[0].author;
				console.log(quote + ";" + author);
				document.getElementById('random-quote').textContent = '"' + quote + '"' + " : " + author;
			});
		} else {
			throw new Error('Something went wrong on api server!');
		}
	})
	};
	
	getCharacterQuotes();