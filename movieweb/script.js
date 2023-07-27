
const API_KEY="8fdac03d";

// Fetching movies on Search
document.getElementById('search-btn').addEventListener('click',async()=>{

    const movieName = document.getElementById('search-box').value;

    const API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`;
    
    const result = await fetch(API_URL);
    const searchResult = await result.json();
    displayMovies(searchResult.Search);
})

const displayMovies = (movieList)=>{

    const movieCard = movieList.map((movie)=>{
        return `
            <div class="movie-card">
                <img src="${movie.Poster}" alt=""/>
                <h3>${movie.Title}</h3>
                <button>Watch Now</button>
        </div>
        `
    })
    const heroSection= document.querySelector('.hero-section');
    heroSection.innerHTML="";
    movieCard.forEach(card => {
        heroSection.innerHTML+=card;
    });
}