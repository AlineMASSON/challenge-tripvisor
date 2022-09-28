const reviews = {
    init: function()
    {
        const allCheckboxElements = document.querySelectorAll('.filter input[name="rating"]');
        for (const currentBox of allCheckboxElements) {
            currentBox.addEventListener('click', reviews.handleClickOnFilterCheckbox);
        }
    },

    handleClickOnFilterCheckbox: function(event)
    {
        const nbStars = event.currentTarget.value;
        const commentsWithNbStars = document.querySelectorAll(`.review[data-rating="${nbStars}"]`);
        console.log(commentsWithNbStars);
        const inputElement = event.currentTarget;
        if (inputElement.checked) {
            for (const currentComment of commentsWithNbStars) {
                currentComment.classList.remove('review--hidden');
            }
        } else {
            for (const currentComment of commentsWithNbStars) {
                currentComment.classList.add('review--hidden');
            }
        }
    }
};