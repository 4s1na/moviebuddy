function getRecommendation() {
    const mood = document.getElementById("moodSelect").value;
    const recommendationDiv = document.getElementById("recommendation");
    
    const recommendations = {
        happy: {
            title: "The Intouchables",
            description: "This heartwarming French film is a beautiful story of friendship that will leave you smiling."
        },
        sad: {
            title: "The Pursuit of Happyness",
            description: "A touching tale of resilience and hope, this movie will inspire you to never give up."
        },
        adventure: {
            title: "Into the Wild",
            description: "Follow the journey of a young man who seeks adventure and self-discovery in the great outdoors."
        },
        scary: {
            title: "Get Out",
            description: "A thrilling horror film that combines social commentary with suspense, perfect for a chilling night."
        },
        romantic: {
            title: "Pride and Prejudice",
            description: "A classic love story that beautifully captures the complexities of love and societal expectations."
        }
    };

    if (mood in recommendations) {
        recommendationDiv.innerHTML = `<h2>${recommendations[mood].title}</h2><p>${recommendations[mood].description}</p>`;
    } else {
        recommendationDiv.innerHTML = "<p>Please select a mood to get a recommendation.</p>";
    }
}