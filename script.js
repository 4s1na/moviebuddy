const movieData = {
    happy: [
        { 
            title: "Amelie", 
            mood: "Whimsical", 
            imdb: "https://www.imdb.com/title/tt0211915/", 
            letterboxd: "https://letterboxd.com/film/amelie/" 
        },
        { 
            title: "La La Land", 
            mood: "Joyful", 
            imdb: "https://www.imdb.com/title/tt3783958/", 
            letterboxd: "https://letterboxd.com/film/la-la-land/" 
        }
    ],
    sad: [
        { 
            title: "Eternal Sunshine of the Spotless Mind", 
            mood: "Melancholic", 
            imdb: "https://www.imdb.com/title/tt0338013/", 
            letterboxd: "https://letterboxd.com/film/eternal-sunshine-of-the-spotless-mind/" 
        },
        { 
            title: "Manchester by the Sea", 
            mood: "Deeply Emotional", 
            imdb: "https://www.imdb.com/title/tt4034228/", 
            letterboxd: "https://letterboxd.com/film/manchester-by-the-sea/" 
        }
    ],
    romantic: [
        { 
            title: "Before Sunrise", 
            mood: "Tender", 
            imdb: "https://www.imdb.com/title/tt0112471/", 
            letterboxd: "https://letterboxd.com/film/before-sunrise/" 
        },
        { 
            title: "500 Days of Summer", 
            mood: "Bittersweet", 
            imdb: "https://www.imdb.com/title/tt1190783/", 
            letterboxd: "https://letterboxd.com/film/500-days-of-summer/" 
        }
    ],
    thoughtful: [
        { 
            title: "Inception", 
            mood: "Mind-Bending", 
            imdb: "https://www.imdb.com/title/tt1375666/", 
            letterboxd: "https://letterboxd.com/film/inception/" 
        },
        { 
            title: "Her", 
            mood: "Philosophical", 
            imdb: "https://www.imdb.com/title/tt1798709/", 
            letterboxd: "https://letterboxd.com/film/her/" 
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const moodButtons = document.querySelectorAll('.mood-btn');
    const moodSelection = document.getElementById('mood-selection');
    const recommendationsSection = document.getElementById('recommendations');
    const movieList = document.getElementById('movie-list');
    const moodTitle = document.getElementById('mood-title');
    const resetBtn = document.getElementById('reset-btn');

    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.dataset.mood;
            displayRecommendations(mood);
        });
    });

    resetBtn.addEventListener('click', () => {
        moodSelection.classList.remove('hidden');
        recommendationsSection.classList.add('hidden');
    });

    function displayRecommendations(mood) {
        const movies = movieData[mood];
        
        moodSelection.classList.add('hidden');
        recommendationsSection.classList.remove('hidden');
        moodTitle.textContent = `${mood.charAt(0).toUpperCase() + mood.slice(1)} Movies Just For You`;
        
        movieList.innerHTML = movies.map(movie => `
            <div class="movie-card">
                <h3>${movie.title}</h3>
                <p>${movie.mood}</p>
                <div class="movie-links">
                    <a href="${movie.imdb}" target="_blank" class="movie-link imdb-link">IMDb</a>
                    <a href="${movie.letterboxd}" target="_blank" class="movie-link letterboxd-link">Letterboxd</a>
                </div>
            </div>
        `).join('');
    }
});