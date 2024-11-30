
// Галерея і картки зображень

// Елемент галереї(список однотипних елементів) міститься в HTML - документі,
//     і в нього необхідно додавати розмітку карток зображень після HTTP - запитів.
// Кожне зображення описується об'єктом, з якого тобі цікаві тільки такі властивості:
// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень
// Перед пошуком за новим ключовим словом необхідно повністю очищати вміст галереї,
//     щоб не змішувати результати запитів.



export function reflectionPictures(pictures) {
    return pictures.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
   <a class="gallery-item" href="${largeImageURL}">
   <div class=all-gallary>
   <img src="${webformatURL}" alt="${tags}">
   <div class="description">
   <p>"likes: ${likes}"</p>
   <p>"views: ${views}"</p>
   <p>"comments: ${comments}"</p>
   <p>"downloads: ${downloads}"</p>
   </div>
   </div>
   </a>
    `).join("");
}

