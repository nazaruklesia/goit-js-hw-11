import{S as p,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(n){const r="https://pixabay.com/api/",o="47376974-17318822de3408abf70e5a971",i=new URLSearchParams({key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}console.log(u());function m(n){return n.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:s,downloads:f})=>`
   <a class="gallery-item" href="${o}">
   <div class=all-gallary>
   <img src="${r}" alt="${i}">
   <div class="description">
   <p>"likes: ${e}"</p>
   <p>"views: ${t}"</p>
   <p>"comments: ${s}"</p>
   <p>"downloads: ${f}"</p>
   </div>
   </div>
   </a>
    `).join("")}const d=document.querySelector(".form-search"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let y=new p(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});d.addEventListener("submit",h);function h(n){n.preventDefault(),l.innerHTML="",c.style.display="block";const r=n.target.elements.query.value.trim();if(r===""){a.error({title:"Error",message:"Please enter a search query!"});return}l.innerHTML="",c.style.display="block",u(r).then(o=>{if(o.hits.lenght===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=m(o.hits);l.innerHTML=i,y.refresh()}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later!"})}).finally(()=>{c.style.display="none"})}
//# sourceMappingURL=index.js.map
