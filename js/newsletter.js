const newsletter = {

    forbiddenDomains: [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ],

    init: function() {
        const newsletterMenuElement = document.querySelector("#menu__newsletter");
        newsletterMenuElement.addEventListener('click', newsletter.handleClickNewsletterMenu);
        const closeNewsletterElement = document.querySelector('button.newsletter__close');
        closeNewsletterElement.addEventListener('click', newsletter.handleCloseNewsletter);
        const formElement = document.querySelector('aside.newsletter form');
        formElement.addEventListener('submit', newsletter.handleFormNewsletterSubmit);
    },

    handleClickNewsletterMenu: function(event) {
        event.preventDefault();
        const newsletterElement = document.querySelector('aside.newsletter');
        newsletterElement.classList.add('newsletter--on');
    },

    handleCloseNewsletter: function() {
        const newsletterElement = document.querySelector('aside.newsletter');
        newsletterElement.classList.remove('newsletter--on');
    },

    handleFormNewsletterSubmit: function(event) {
        event.preventDefault();
        const inputElement = document.querySelector('#subscriber-email');
        const inputValue = inputElement.value;
        for (const currentDomain of newsletter.forbiddenDomains) {

            if (inputValue.includes(currentDomain)) {
                const asideElement = document.querySelector('aside.newsletter');
                newsletter.deleteMessages(asideElement);
                messages.addMessage('Les adresses jetables ne sont pas admises', asideElement)
            }
        }
        inputElement.value = "";
    },

    deleteMessages: function(parentElement) {
        const messageElements = parentElement.querySelectorAll('.message');

        for (const currentMessage of messageElements) {
            currentMessage.remove();   
        }
    }
};
