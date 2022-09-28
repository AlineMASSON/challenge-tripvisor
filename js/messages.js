const messages = {
    addMessage: function(messageContent, parentElement) {
    
        const pElement = document.createElement('p');
        pElement.className = 'message';

        pElement.textContent = messageContent;
    
        parentElement.append(pElement);
    }
};

