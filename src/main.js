
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import "./js/pixabay-api";
import { getPictures } from "./js/pixabay-api";

import "./js/render-functions";
import {reflectionPictures} from "./js/render-functions";



const formSearch = document.querySelector(".form-search");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

formSearch.addEventListener("submit", handlerSearch);

function handlerSearch(event) {
    event.preventDefault();

    gallery.innerHTML = "";
    loader.style.display = "block";

    const inputValue = event.target.elements.query.value;
    
    console.log(inputValue);
// function name(params) {
    
// }

}