const theme = {
    init: function() {
        const themeSwitchElement = document.querySelector('#theme-switch');
        themeSwitchElement.addEventListener('click', theme.changeTheme);

        const isDarkModeActivatedAsString = localStorage.getItem('isDarkMode');

        const isDarkModeActivated = JSON.parse(isDarkModeActivatedAsString);

        if (isDarkModeActivated !== null){
            if (isDarkModeActivated) {
                document.querySelector('body').classList.add('theme-dark');
            }
        }
        const allColorButtonElements = document.querySelectorAll('.theme-button');
        for (const colorButtonElement of allColorButtonElements) {
            colorButtonElement.addEventListener('click', theme.handleThemeColorClick);
        };

        const themeColorSaved = localStorage.getItem('colorTheme');
        if (themeColorSaved !== null) {
            theme.changeColorTheme(themeColorSaved);
        }
    },
    
    changeTheme: function() {
        const bodyElement = document.querySelector('body');
        if (bodyElement.classList.contains('theme-dark')) {
            bodyElement.classList.remove('theme-dark');
        } else {
            bodyElement.classList.add('theme-dark');
        }
        
        const isDarkModeActivate = bodyElement.classList.contains('theme-dark');
        const isDarkModeActivatedStringified = JSON.stringify(isDarkModeActivate);
        localStorage.setItem('isDarkMode', isDarkModeActivatedStringified);
    },

    handleThemeColorClick: function(evt) {
        const buttonClicked = evt.currentTarget;
        const idButtonClicked = buttonClicked.id;
        theme.changeColorTheme(idButtonClicked);
        localStorage.setItem('colorTheme', idButtonClicked);
    },

    changeColorTheme: function(themeColor) {
        const bodyElement = document.querySelector('body');
        bodyElement.classList.remove('theme-red', 'theme-green', 'theme-blue');
        bodyElement.classList.add(themeColor);
        const logoElement = document.querySelector('.logo__image');
        logoElement.src = 'img/logo-' + themeColor + '.png';
    }
};
