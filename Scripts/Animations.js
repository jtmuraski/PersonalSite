var words = ['Software Engineer', 'Amazon Web Services', 'Automation'];
var wordIndex = 0;
var charIndex = 0;
var direction = 1; // 1 for typing, -1 for erasing
var typingElement = document.querySelector('.typing');

function type() {
    if (direction === 1 && charIndex === words[wordIndex].length) {
        direction = -1;
        setTimeout(type, 2000); // Wait for 2 seconds before start erasing
    } else if (direction === -1 && charIndex === 0) {
        direction = 1;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(type, 500); // Wait for 0.5 seconds before start typing next word
    } else {
        typingElement.textContent = words[wordIndex].substring(0, charIndex);
        charIndex += direction;
        setTimeout(type, direction === 1 ? 200 : 100); // Typing speed is 200ms, erasing speed is 100ms
    }
}

type(); // Start typing