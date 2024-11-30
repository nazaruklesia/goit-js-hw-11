


export function reflectionPictures(pictures) {
    return pictures.map(
        ({ webformatURL, largeImageURL, tags,
            likes, views, comments, downloads }) => `
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

