
const createHeader = () => {
    const body = document.querySelector('body');

    // Header
    const header = document.querySelector('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Weather App';

    // Navigation
    const nav = document.createElement('nav');

    // Search div
    const form = document.createElement('form');
    form.method = 'get';

    const searchDiv = document.createElement('div');
    searchDiv.classList.add('search-div');

    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-magnifying-glass');

    const searchBox = document.createElement('input');
    searchBox.type = 'search';
    searchBox.classList.add('search-input')

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.classList.add('submit-button')
    submitButton.textContent = 'Search';

    form.append(icon, searchBox, submitButton);

    searchDiv.append(form);

    nav.append(searchDiv);

    header.append(h1, searchDiv);
}

export default createHeader;