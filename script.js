document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.querySelector('.imgContainer');
    const leftArrow = document.querySelector('.leftArrow');
    const rightArrow = document.querySelector('.rightArrow');

    function scrollContainer(direction) {
        const scrollAmount = 1395; 
        if (direction === 'left') {
            imgContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            imgContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    leftArrow.addEventListener('click', () => scrollContainer('left'));
    rightArrow.addEventListener('click', () => scrollContainer('right'));

    const projectsImgContainer = document.querySelector('.projectsImgContainer');

    function ProjectScrollContainer(direction) {
        const scrollAmount = 1395; 
        if (direction === 'left') {
            projectsImgContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            projectsImgContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    leftArrow.addEventListener('click', () => ProjectScrollContainer('left'));
    rightArrow.addEventListener('click', () => ProjectScrollContainer('right'));



    const feedbacks = document.querySelector('.feedbacks');

    function feedbackContainer(direction) {
        const scrollAmount = 1360; 
        if (direction === 'left') {
            feedbacks.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            feedbacks.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    leftArrow.addEventListener('click', () => feedbackContainer('left'));
    rightArrow.addEventListener('click', () => feedbackContainer('right'));
});

const container = document.querySelector('.imgContainers');
let isDown = false;
let startX;
let scrollLeft;
let autoScrollInterval;

// Duplicate content to create seamless loop
const cloneContent = () => {
    const content = container.innerHTML;
    container.innerHTML += content; // Append duplicate content
};

// Adjust container width after duplicating content
const adjustContainerWidth = () => {
    const totalWidth = container.scrollWidth / 2; // Half of total width
    container.style.width = `${totalWidth}px`;
};

// Initialize auto-scroll and content cloning
const init = () => {
    cloneContent();
    adjustContainerWidth();
    startAutoScroll();
};

// Function to start automatic scrolling
const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
        container.scrollLeft += 2; // Adjust scroll speed as needed
        // Optional: Reset scroll to start if it reaches the end
        if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
        }
    }, 50); // Adjust interval timing as needed
};

// Function to stop automatic scrolling
const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
};

// Start initialization
init();

// Event listeners for dragging functionality
container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    stopAutoScroll(); // Stop automatic scrolling when user starts dragging
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
    startAutoScroll(); // Resume automatic scrolling when user leaves the container
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
    startAutoScroll(); // Resume automatic scrolling when user releases the mouse
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    container.scrollLeft = scrollLeft - walk;
});

// const container = document.querySelector('.imgContainers');
// let isDown = false;
// let startX;
// let scrollLeft;
// let autoScrollInterval;

// // Function to start automatic scrolling
// const startAutoScroll = () => {
//     autoScrollInterval = setInterval(() => {
//         container.scrollLeft += 2; // Adjust scroll speed as needed
//         // Optional: Reset scroll to start if it reaches the end
//         if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
//             container.scrollLeft = 0;
//         }
//     }, 50); // Adjust interval timing as needed
// };

// // Function to stop automatic scrolling
// const stopAutoScroll = () => {
//     clearInterval(autoScrollInterval);
// };

// // Start automatic scrolling on page load
// startAutoScroll();

// container.addEventListener('mousedown', (e) => {
//     isDown = true;
//     container.classList.add('active');
//     startX = e.pageX - container.offsetLeft;
//     scrollLeft = container.scrollLeft;
//     stopAutoScroll(); // Stop automatic scrolling when user starts dragging
// });

// container.addEventListener('mouseleave', () => {
//     isDown = false;
//     container.classList.remove('active');
//     startAutoScroll(); // Resume automatic scrolling when user leaves the container
// });

// container.addEventListener('mouseup', () => {
//     isDown = false;
//     container.classList.remove('active');
//     startAutoScroll(); // Resume automatic scrolling when user releases the mouse
// });

// container.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - container.offsetLeft;
//     const walk = (x - startX) * 2; // Adjust scroll speed
//     container.scrollLeft = scrollLeft - walk;
// });
