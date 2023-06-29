import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Spotify from './Spotify.js';

function getCategory() {
    Spotify.getCategory()
        .then(function(response) {
            if (response.categories && response.categories.items.length > 0) {
                printElements(response.categories.items);
            } else {
                printError('No categories found');
            }
        });
}

// UI Logic

function printElements(categories) {
    const list = document.querySelector('#response');
    list.innerHTML = ''; // Clear previous content

    categories.forEach(category => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = category.href;
        link.textContent = category.name;
        listItem.appendChild(link);
        list.appendChild(listItem);
    });
}

function printError(error) {
    document.querySelector('#response').innerText = `There was an error accessing the data: 
    ${error}.`;
}

function handleFormSubmit(event) {
    event.preventDefault();
    getCategory();
}

window.addEventListener("load", function() {
    document.querySelector("#get-cat-form").addEventListener("submit", handleFormSubmit);
});
