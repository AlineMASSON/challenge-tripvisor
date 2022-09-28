const slider = {

    images: [
        'ocean.jpg',
        'ski.jpg',
        'city.jpg',
        'canyon.jpg',
        'road.jpg',
        'nature.jpg'
    ],

    currentPosition: 0,

    init: function () {

        slider.addImagesToSlider();
        const nextButtonElement = document.querySelector('#slider-next');
        nextButtonElement.addEventListener('click', slider.handleNextImage);
        const previousButtonElement = document.querySelector('#slider-previous');
        previousButtonElement.addEventListener('click', slider.handlePreviousImage);
    },

    addImagesToSlider: function () {
        for (const currentImage of slider.images) {
            const sliderElement = document.querySelector('section.slider');

            const imgElement = document.createElement('img');

            imgElement.classList.add('slider__img');

            imgElement.src = "img/" + currentImage;

            sliderElement.append(imgElement);
        }

        const imageElement = document.querySelector('.slider__img');
        imageElement.classList.add('slider__img--current');
    },

    handleNextImage: function () {
        const allImageElements = document.querySelectorAll('.slider__img');
        const currentSelectedImage = allImageElements[slider.currentPosition];
        currentSelectedImage.classList.remove('slider__img--current');
        
        let nextIndex = slider.currentPosition;
        if (nextIndex === 5) {
            nextIndex = 0;
        } else {
            nextIndex++;
        }
        const nextSelectedImage = allImageElements[nextIndex];
        nextSelectedImage.classList.add('slider__img--current');
        slider.currentPosition = nextIndex;
    },

    handlePreviousImage: function () {
        const allImageElements = document.querySelectorAll('.slider__img');
        const currentSelectedImage = allImageElements[slider.currentPosition];
        currentSelectedImage.classList.remove('slider__img--current');
        
        let previousIndex = slider.currentPosition;
        if (previousIndex === 0) {
            previousIndex = 5;
        } else {
            previousIndex--;
        }
        const previousSelectedImage = allImageElements[previousIndex];
        previousSelectedImage.classList.add('slider__img--current');
        slider.currentPosition = previousIndex;
    }
};