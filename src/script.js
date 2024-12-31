const themeOneTogglerButton = document.getElementById('theme-1');
const themeTwoTogglerButton = document.getElementById('theme-2');
const themeThreeTogglerButton = document.getElementById('theme-3');
const container = document.querySelector('body');
const toggleContainerElement = document.querySelector('.toggle__container');
const calcDisplayElement = document.querySelector('.calc__display');
const keypadContainer = document.querySelector('.keypad__container');
const deleteButton = document.querySelector('.delete__button');
const resetButton = document.querySelector('.reset__button');
const equalButton = document.querySelector('.equal__button');
const numberButtons = document.querySelectorAll('.number__buttons')
const calcDisplayText = document.querySelector('.calc__display__text');

themeOneTogglerButton.addEventListener('click', applyThemeOne);
themeTwoTogglerButton.addEventListener('click', applyThemeTwo);
themeThreeTogglerButton.addEventListener('click', applyThemeThree);

function applyThemeOne() {
    removeThemeClasses();
    container.classList.add('bg-custom-very-dark-desaturated-blue-1', 'text-custom-white');
    toggleContainerElement.classList.add('bg-custom-very-dark-desaturated-blue-2');
    calcDisplayElement.classList.add('bg-custom-very-dark-desaturated-blue-3');
    calcDisplayText.classList.add('bg-custom-very-dark-desaturated-blue-3');
    keypadContainer.classList.add('bg-custom-very-dark-desaturated-blue-2', 'text-custom-very-dark-grayish-blue');
    deleteButton.classList.add('bg-custom-desaturated-dark-blue-1');
    resetButton.classList.add('bg-custom-desaturated-dark-blue-1');
    equalButton.classList.add('bg-custom-red');
    numberButtons.forEach(button => { 
        button.classList.add('bg-custom-white'); 
    });
    manageButtonState('theme-1', 'bg-custom-red');
}

function applyThemeTwo() {
    // themeOneTogglerButton.classList.remove('bg-custom-red');
    removeThemeClasses();
    container.classList.add('bg-custom-light-gray', 'text-gray-700');
    toggleContainerElement.classList.add('bg-custom-grayish-red');
    calcDisplayElement.classList.add('bg-custom-grayish-red');
    calcDisplayText.classList.add('bg-custom-grayish-red');
    keypadContainer.classList.add('bg-custom-grayish-red');
    deleteButton.classList.add('bg-custom-dark-moderate-cyan');
    resetButton.classList.add('bg-custom-dark-moderate-cyan');
    equalButton.classList.add('bg-custom-orange');
    numberButtons.forEach(button => { 
        button.classList.add('bg-custom-white'); 
    });
    manageButtonState('theme-2', 'bg-custom-orange');
}

function applyThemeThree() {
    removeThemeClasses();
    container.classList.add('bg-custom-very-dark-violet-1', 'text-custom-light-yellow');
    toggleContainerElement.classList.add('bg-custom-very-dark-violet-2');
    calcDisplayElement.classList.add('bg-custom-very-dark-violet-2');
    calcDisplayText.classList.add('bg-custom-very-dark-violet-2');
    keypadContainer.classList.add('bg-custom-very-dark-violet-2');
    deleteButton.classList.add('bg-custom-very-dark-violet-3', 'border-b-custom-vivid-magenta', 'hover:bg-purple-500');
    resetButton.classList.add('bg-custom-very-dark-violet-3', 'border-b-custom-vivid-magenta', 'hover:bg-purple-500');
    equalButton.classList.add('bg-custom-pure-cyan', 'border-b-custom-soft-cyan', 'hover:bg-cyan-300');
    numberButtons.forEach(button => { 
        button.classList.add('bg-custom-very-dark-violet-3', 'border-b-custom-vivid-magenta', 'hover:bg-purple-700');
    });
    manageButtonState('theme-3', 'bg-custom-pure-cyan');

}

function removeThemeClasses() {
    container.classList.remove('bg-custom-very-dark-desaturated-blue-1', 'bg-custom-light-gray', 'bg-custom-very-dark-violet-1', 'text-gray-700', 'text-custom-light-yellow', 'text-custom-white');
    toggleContainerElement.classList.remove('bg-custom-very-dark-desaturated-blue-2', 'bg-custom-grayish-red', 'bg-custom-very-dark-violet-2');
    calcDisplayElement.classList.remove('bg-custom-very-dark-desaturated-blue-3', 'bg-custom-grayish-red', 'bg-custom-very-dark-violet-2');
    calcDisplayText.classList.remove('bg-custom-very-dark-desaturated-blue-3', 'bg-custom-grayish-red', 'bg-custom-very-dark-violet-2');
    keypadContainer.classList.remove('bg-custom-very-dark-desaturated-blue-2', 'bg-custom-grayish-red', 'text-custom-very-dark-grayish-blue', 'bg-custom-very-dark-violet-2');
    deleteButton.classList.remove('bg-custom-desaturated-dark-blue-1', 'bg-custom-dark-moderate-cyan', 'bg-custom-very-dark-violet-3', 'border-b-custom-vivid-magenta', 'hover:bg-purple-500');
    resetButton.classList.remove('bg-custom-desaturated-dark-blue-1', 'bg-custom-dark-moderate-cyan', 'bg-custom-very-dark-violet-3', 'border-b-custom-vivid-magenta', 'hover:bg-purple-500');
    equalButton.classList.remove('bg-custom-red', 'bg-custom-orange', 'bg-custom-pure-cyan', 'border-b-custom-soft-cyan', 'hover:bg-cyan-300');
    numberButtons.forEach(button => { 
        button.classList.remove('bg-custom-white', 'bg-custom-very-dark-violet-3', 'border-b-custom-vivid-magenta', 'hover:bg-purple-700'); 
    });
    themeOneTogglerButton.classList.remove('hover:bg-custom-red', 'hover:bg-custom-orange', 'hover:bg-custom-pure-cyan');
    themeTwoTogglerButton.classList.remove('hover:bg-custom-red', 'hover:bg-custom-orange', 'hover:bg-custom-pure-cyan');
    themeThreeTogglerButton.classList.remove('hover:bg-custom-red', 'hover:bg-custom-orange', 'hover:bg-custom-pure-cyan');
}

function manageButtonState(activeButtonId, buttonColor) {
    const buttons = [themeOneTogglerButton, themeTwoTogglerButton, themeThreeTogglerButton];
    buttons.forEach(button => {
        
        if (button.id === activeButtonId) {
            button.classList.add(buttonColor);
            themeOneTogglerButton.classList.add('hover:' + buttonColor);
            themeTwoTogglerButton.classList.add('hover:' + buttonColor);
            themeThreeTogglerButton.classList.add('hover:' + buttonColor);
        } else {
            button.classList.remove('bg-custom-red','bg-custom-orange', 'bg-custom-pure-cyan', 'bg-custom-very-dark-desaturated-blue-2');
            
        }
    });
}