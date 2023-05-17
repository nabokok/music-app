import collection from './collection.json' assert {type: 'json'};

const collectionList = document.querySelector('.collection');
const artistInput = document.querySelector('[name=artist]');
const genreInput = document.querySelector('[name=genre]');
const decadeInput = document.querySelector('[name=decade]');
const countryInput = document.querySelector('[name=country]');
const searchButton = document.querySelector('.filter__button');
const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
const myCollection = JSON.parse(localStorage.getItem('my-collection')) || [];
const currentCollection = JSON.parse(localStorage.getItem('filtred_collection')) || collection.data;
const backBtn = document.querySelector('.header__back');

document.addEventListener('DOMContentLoaded', () => {
    pagination(currentCollection);
    setCounter('.fav-counter', favorite.length);
    setCounter('.collection-counter', myCollection.length);
    setFavIcon();
    setButtonText();
});
// Reset filtration
backBtn.addEventListener('click', resetFiltration);
searchButton.addEventListener('click', filterCollection);
artistInput.addEventListener('keyup', validation);
collectionList.addEventListener('click', (event) => {
    handleFavorite(event);
    handleCollection(event);
})

function resetFiltration() {
    localStorage.removeItem('filtred_collection');
    pagination(currentCollection);
    artistInput.value = '';
    genreInput.value = '';
    decadeInput.value = '';
    countryInput.value = '';
}

function pagination(collectionData) {
    const itemsPerPage = 4;
    const pageRange = 2;
    const ellipsis = '...';

    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1;
    const totalPages = Math.ceil(collectionData.length / itemsPerPage);
    
    let pagination = [];

    if (totalPages <= 5) {
        pagination = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
        pagination.push(1);

        const startRande = Math.max(currentPage - pageRange, 2);
        const endRange = Math.min(currentPage + pageRange, totalPages - 1);

        if (startRande > 2) {
            pagination.push(ellipsis);
        }

        for (let i = startRande; i <= endRange; i++) {
            pagination.push(i);
        }

        if (endRange < totalPages - 1) {
            pagination.push(ellipsis);
        }

        pagination.push(totalPages);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCollectionData = collectionData.slice(startIndex, endIndex);
    const paginationElement = document.querySelector('.pagination');
    paginationElement.innerHTML = '';

    pagination.forEach(el => {
        const li = document.createElement('li');
        const pageLink = document.createElement('a');
        pageLink.classList.add('pagination__item');
        pageLink.href = `?page=${el}`;
        pageLink.textContent = el;
    
        if (el === currentPage) {
            pageLink.classList.add('pagination__item_active');
        }

        if (typeof el === 'string') {
            li.innerHTML = el;
            li.classList.add('pagination__item');
        } else {
            li.appendChild(pageLink);
        }
    
        paginationElement.appendChild(li);
    })
    
    renderCollection(currentCollectionData);
}

function renderCollection(collection = []) {
    collectionList.innerHTML = '';
    collection.forEach(el => {
        const li = document.createElement('li');
        li.className = 'collection__item';
        li.setAttribute('data-id', el.id)
        li.innerHTML = `
            <button class="collection__button-fav"></button>
            <picture>
                <source srcset="${el.img.url}, ${el.img.url2x} 2x" media="(min-resolution: 192dpi)"/>
                <img src=${el.img.url} alt=${el.img.alt} class="collection__image">
            </picture>
            <h2 class="collection__title">${el.title}</h2>
            <h3 class="collection__artist">${el.artist}</h3>
            <p><span class="light-text">Year: </span>${el.year}</p>
            <p class="collection__style"><span class="light-text">Style: </span>${el.style}</p>
            <p class="collection__country"><span class="light-text">Country: </span>${el.country}</p>
            <button class="collection__button-add">
                Add
                <img src="./assets/images/icons/plus.svg" alt="add">
            </button>
        `;
        collectionList.appendChild(li)
    }
    )
    const img = collectionList.querySelector('.collection__image');
    setImageHeight(img?.clientWidth)
}

function setImageHeight(clientWidth) {
    const images = document.querySelectorAll('.collection__image');
    const width = clientWidth ? `${clientWidth}px` : 'auto';
    images.forEach(img => {
        img.style.height = width
    })

}

function filterCollection() {
    const artistValue = artistInput.value.toLowerCase();
    const genreValue = genreInput.value;
    const decadeValue = Number(decadeInput.value);
    const countryValue = countryInput.value;

    localStorage.removeItem('filtred_collection');
    const filteredCollection = collection.data
        .filter(el => el.artist.toLowerCase().includes(artistValue))
        .filter(el => el.style.toLowerCase().includes(genreValue))
        .filter(el => el.country.toLowerCase().includes(countryValue))
        .filter((el, _, arr) => {
            if (!decadeValue) {
                return arr;
            }
            if (el.year >= decadeValue && el.year < (decadeValue + 10)) {
                return el;
            }
        })

        window.location = '/';
        localStorage.setItem('filtred_collection', JSON.stringify(filteredCollection));
        pagination(filteredCollection);
}

function validation() {
    const error = document.querySelector('.artist-error');
    if (artistInput.value.length > 20) {
        error.innerHTML = 'Maximum length is 20 characters'
    } else {
        error.innerHTML = ''
    }
}

function handleFavorite(event) {
    const isFavButton = event.target.classList.contains('collection__button-fav');
    if (!isFavButton) {
        return;
    }

    const id = event.target.parentElement.dataset.id;
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];

    if (favorite.includes(id)) {
        const filteredFavs = favorite.filter(el => el !== id);
        addFavsToLocalStorage(filteredFavs);
        setCounter('.fav-counter', filteredFavs.length)
    } else {
        favorite.push(id);
        addFavsToLocalStorage(favorite);
        setCounter('.fav-counter', favorite.length)
    }

    setFavIcon();
}

function addFavsToLocalStorage(favs) {
    localStorage.setItem('favorite', JSON.stringify(favs));
}

function handleCollection(event) {
    const addButton = event.target.closest('.collection__button-add');
    if (!addButton) {
        return;
    }

    const id = addButton.closest('[data-id]').dataset.id;
    const myCollection = JSON.parse(localStorage.getItem('my-collection')) || [];

    if (myCollection.includes(id)) {
        const filteredCollection = myCollection.filter(el => el !== id);
        addMyCollectionToLocalStorage(filteredCollection);
        setCounter('.collection-counter', filteredCollection.length)
    } else {
        myCollection.push(id);
        addMyCollectionToLocalStorage(myCollection);
        setCounter('.collection-counter', myCollection.length)
    }

    setButtonText();
}

function addMyCollectionToLocalStorage(myCollection) {
    localStorage.setItem('my-collection', JSON.stringify(myCollection));
}

function setCounter(selector, count) {
    const counter = document.querySelector(selector);
    counter.classList.toggle('icon__counter', count > 0);
    counter.textContent = count || '';
}

function setFavIcon() {
    const collectionItems = document.querySelectorAll('.collection__item');
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    collectionItems.forEach(el => {
        const favButton = el.querySelector('.collection__button-fav');
        favButton.classList.toggle('collection__button-fav_active', favorite.includes(el.dataset.id));
    })
}

function setButtonText() {
    const collectionItems = document.querySelectorAll('.collection__item');
    const myCollection = JSON.parse(localStorage.getItem('my-collection')) || [];
    collectionItems.forEach(el => {
        const addButton = el.querySelector('.collection__button-add')
        if (myCollection.includes(el.dataset.id)) {
            addButton.innerHTML = 'Remove'
        } else {
            addButton.innerHTML = 'Add <img src="./assets/images/icons/plus.svg" alt="add">'
        }
    })
}