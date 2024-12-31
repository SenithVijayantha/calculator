const themeOneTogglerButton = document.getElementById('theme-1');
const themeTwoTogglerButton = document.getElementById('theme-2');
const themeThreeTogglerButton = document.getElementById('theme-3');
const container = document.querySelector('.container');


themeOneTogglerButton.addEventListener('click', applyThemeOne);
themeTwoTogglerButton.addEventListener('click', applyThemeTwo);
themeThreeTogglerButton.addEventListener('click', applyThemeThree);

function applyThemeOne() {
    removeThemeClasses();
    container.classList.add('bg-custom-very-dark-desaturated-blue-1');
    manageButtonState('theme-1');
}

function applyThemeTwo() {
    themeOneTogglerButton.classList.remove('bg-custom-red');
    removeThemeClasses();
    container.classList.add('bg-custom-light-gray');
    manageButtonState('theme-2');
}

function applyThemeThree() {
    removeThemeClasses();
    container.classList.add('bg-custom-very-dark-violet-1');
    manageButtonState('theme-3');
}

function removeThemeClasses() {
    container.classList.remove('bg-custom-very-dark-desaturated-blue-1', 'bg-custom-light-gray', 'bg-custom-very-dark-violet-1')
}

function manageButtonState(activeButtonId) {
    const buttons = [themeOneTogglerButton, themeTwoTogglerButton, themeThreeTogglerButton];
    buttons.forEach(button => {
        if (button.id === activeButtonId) {
            button.classList.add('bg-custom-red');
        } else {
            button.classList.remove('bg-custom-red');
        }
    });
}