addEventListener("DOMContentLoaded", (event) => {
    let darkMode = localStorage.getItem('darkMode');
    let EnOrNl = localStorage.getItem('EnOrNl');
    const lightOrDarkMode = document.getElementById('light-darkMode');
    const buttonEnOrDutch = document.getElementById('englishOrDutch');


    const enableDarkMode = () => {
        document.body.classList.add('darkMode');
        localStorage.setItem('darkMode', 'active');
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkMode');
        localStorage.setItem('darkMode', 'inactive');
    }




    localStorage.getItem('darkMode') === 'active' ? enableDarkMode() : disableDarkMode();



    lightOrDarkMode.addEventListener("click", () => {
        darkMode = localStorage.getItem('darkMode');
        darkMode !== "active" ? enableDarkMode() : disableDarkMode();
    });

});