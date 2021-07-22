
var charactersList = [];


function getCharacterInfo() {
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(response => {
        if (response.status === 200) {
            return response.json()
            .then(post => {
                
                for (var i = 0; i < post.length - 1; i++) {
                    // console.log(post[i].name);
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

