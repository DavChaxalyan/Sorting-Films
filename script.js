let films = [ 
    { movieName: "Barbie", rating: 4.5, genre: "Comedy", views: 1.500000 },
    { movieName: "Interstellar", rating: 3, genre: "Fantastic", views: 4.500000},
    { movieName: "The Godfather", rating: 9.77, genre: "Crime", views: 12.000000},
];

function sortingFilms(filmsArr, prop) {

    for (let i = 0; i < filmsArr.length - 1; i++) {
        for (let j = 0; j < filmsArr.length - 1 - i; j++) {

            if(typeof filmsArr[j][prop] == 'number' && filmsArr[j + 1][prop] > filmsArr[j][prop]){
                [ filmsArr[j], filmsArr[j + 1]] = [ filmsArr[j + 1], filmsArr[j]];
            } else if(typeof filmsArr[j][prop] == 'string' && filmsArr[j + 1][prop] < filmsArr[j][prop]){
                [ filmsArr[j + 1], filmsArr[j]] = [ filmsArr[j], filmsArr[j + 1]];
            }

        }
    }
    
    return filmsArr
};

console.log(sortingFilms(films, 'rating'))
