document.addEventListener('DOMContentLoaded', function () {
    const carouselContent = document.querySelector('.carousel-content');
    const cardWidth = document.querySelector('.card').offsetWidth;
    let currentIndex = 0;

    window.prevCard = function () {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    };

    window.nextCard = function () {
        currentIndex = Math.min(currentIndex + 1, 2);
        updateCarousel();
    };

    function updateCarousel() {
        const newTransformValue = -currentIndex * cardWidth + 'px';
        carouselContent.style.transform = 'translateX(' + newTransformValue + ')';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const phraseBox = document.getElementById('phrase');
    const cardImage = document.getElementById('cardImage');

    // Define phrases and images for each card
    const cardData = {
        1: { phrase: 'Embark on a financial journey with WealthWise Pro, your guide to savings, investments, and a secure financial future.', image: 'cash.jpg' },
        2: { phrase: 'Elevate your lifting game with LiftElite Pro, your ultimate companion for achieving new heights in strength and fitness.', image: 'Barbell.jpg' },
        3: { phrase: 'Are you on a quest to find the perfect karate style that suits your personality, fitness level, and goals? Look no further!', image: 'karate.jpg' }
    };

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove 'active' class from all cards
            cards.forEach(c => c.classList.remove('active'));

            // Add 'active' class to the clicked card
            card.classList.add('active');

            // Update the phrase and image in the box based on the active card
            updatePhrase(card);
        });
    });

    function updatePhrase(activeCard) {
        // Extract the card number from the class name
        const cardNumber = activeCard.classList[1].split('-')[1];
        
        // Update the phrase and image in the box based on the card number
        const { phrase, image } = cardData[cardNumber] || { phrase: '', image: 'placeholder-image.jpg' };
        phraseBox.innerHTML = `<strong>${activeCard.innerText}</strong><br>${phrase}`;
        
        // Update the image source
        cardImage.src = image;
    }
});
