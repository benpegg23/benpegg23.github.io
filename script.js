// ASCII Coffee Animation
const coffeeAnimation = {
    frames: [
        `  (
   )
 c[]`,
        `   )
  (
 c[]`
    ],
    speed: 500,
    currentFrame: 0
};

function animateCoffee() {
    const coffeeElement = document.getElementById('coffee-cup');

    if (!coffeeElement) return;

    // Alternate between frames
    coffeeElement.textContent = coffeeAnimation.frames[coffeeAnimation.currentFrame];

    // Move to next frame
    coffeeAnimation.currentFrame = (coffeeAnimation.currentFrame + 1) % coffeeAnimation.frames.length;
}

// Start animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Set initial frame
    animateCoffee();

    // Animate every 500ms
    setInterval(animateCoffee, coffeeAnimation.speed);

    // Setup email copy functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:benpegg23@gmail.com"]');
    emailLinks.forEach(emailLink => {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const originalText = emailLink.textContent;

            navigator.clipboard.writeText('benpegg23@gmail.com').then(() => {
                emailLink.textContent = 'Copied!';
                emailLink.style.pointerEvents = 'none'; // Prevent double clicks

                setTimeout(() => {
                    emailLink.textContent = originalText;
                    emailLink.style.pointerEvents = 'auto';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
                // Fallback: let the mailto link work if copy fails
                window.location.href = emailLink.href;
            });
        });
    });
});

