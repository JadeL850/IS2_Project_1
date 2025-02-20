document.addEventListener("scroll", function () {
    const summarizeMeElements = document.querySelectorAll(".summarize-me");
    const windowHeight = window.innerHeight;

    summarizeMeElements.forEach(function (summarizeMe, index) {
        const rect = summarizeMe.getBoundingClientRect();

        // The element should be halfway into the viewport
        const triggerPoint = windowHeight / 2;

        // When the element scrolls past the trigger point
        if (rect.top < triggerPoint && rect.bottom > 0) {
            if (!summarizeMe.classList.contains("fade-in")) {
                summarizeMe.classList.add("fade-in");
            }
        }

        // Stop showing elements if all 3 have appeared
        if (index >= 2 && rect.top < windowHeight) {
            summarizeMe.classList.add("fade-in");
        }
    }); 
});

document.addEventListener('DOMContentLoaded', function() {
    var summarizeText = document.getElementById('scrollText');
    var startedScrolling = false;

    window.addEventListener('scroll', function() {
        if (!startedScrolling) {
            // Only trigger when the user starts scrolling
            summarizeText.classList.add('scrolling');  // Add a class to trigger the animation
            startedScrolling = true;
        }

        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Adjust the position of the text to move up as the user scrolls
        summarizeText.style.transform = 'translateY(' + (scrollPosition * 0.3) + 'px)';
    });
});


