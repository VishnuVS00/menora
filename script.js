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

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        container.scrollLeft = scrollLeft - walk;
    });

