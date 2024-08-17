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