var charactersList = [];
var characterListEl = document.querySelector("#characters-list")

function getCharacterInfo() {
	fetch("https://www.breakingbadapi.com/api/characters").then((response) => {
		if (response.status === 200) {
			return response.json().then((post) => {
				for (var i = 0; i < post.length - 1; i++) {
					console.log(post[i]);
					charactersList[i] = post[i].name;

					var characterCard = document.createElement("div");
					characterCard.id = charactersList[i];
					characterCard.className = "m-1";
					characterCard.setAttribute("value", i);

					characterCard.classList="fav-card col-12 col-md-3 col-lg-2 d-flex align-items-center flex-column";
					//characterCard.textContent = charactersList[i];
				
					characterCard.addEventListener("click", function () {
						console.log("You have clicked " + this.textContent);
						characterIdValue = [];
						//Local storage for building profile page
						characterIdValue.push(this.getAttribute("value"));
						localStorage.setItem("value", JSON.stringify(characterIdValue));
						window.location.href = "profile.html";
					});
					var characterImg=document.createElement("img");
					characterImg.setAttribute("src", post[i].img);
					characterImg.setAttribute("alt", post[i].name);
					characterImg.setAttribute("id", "fav-img")

					var characterName=document.createElement("p");
					characterName.textContent=post[i].name;

					characterCard.append(characterImg,characterName);
					characterListEl.appendChild(characterCard);




					// var newDiv = document.createElement('div');
					// document.getElementById('character-list').appendChild(newDiv);
				}

				// document.getElementById('characters-list').textContent = charactersList;
			});
		} else {
			throw new Error("Something went wrong on api server!");
		}
	});
}

getCharacterInfo();

console.log(charactersList);

// charactersList.forEach(function() {
//     var characterDiv = document.createElement('div').textContent = [i];
//     document.getElementById('characters-list').appendChild(characterDiv);
// })

// function makeCharacterDivs() {
// for (var i = 0; i < charactersList.length - 1; i++) {
//     var characterCard = document.createElement('div');
//     characterCard.id = charactersList[i];
//     characterCard.className = "character";
//     characterCard.innerHtml = charactersList[i];
//     document.body.appendChild(characterCard);
//     console.log('this is working ' + i + ' !');
// }
// };

// makeCharacterDivs();

function getCharacterQuotes() {
	fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes").then(
		(response) => {
			if (response.status === 200) {
				return response.json().then((post) => {
					var quote = post[0].quote;
					var author = post[0].author;
					console.log(quote + ";" + author);
					document.getElementById("random-quote").textContent =
						'"' + quote + '"' + " - " + author;
				});
			} else {
				throw new Error("Something went wrong on api server!");
			}
		}
	);
}

getCharacterQuotes();
