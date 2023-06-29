'use strict';

const images = [
    { 'id': '1', 'url':'./ney/ney.png' },
    { 'id': '2', 'url':'./ney/delicia.png' },
    { 'id': '3', 'url':'./ney/lindo.png' },
    { 'id': '4', 'url':'./ney/gdt.png' },
    { 'id': '5', 'url':'./ney/perfeito.png' },
    { 'id': '5', 'url':'./ney/maravilha.png' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
