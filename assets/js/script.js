

var charactersList = [];


function getCharacterInfo() {
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(response => {
        if (response.status === 200) {
            return response.json()
            .then(post => {
                
                for (var i = 0; i < post.length - 1; i++) {
                    console.log(post[i]);
                    charactersList[i] = post[i].name;
                    };
                    console.log(charactersList);
              
                    document.getElementById('characters-list').textContent = charactersList;
                
                
            });
    
        } else {
            throw new Error('Something went wrong on api server!');
    }
    
})
    
    
};

getCharacterInfo();



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
