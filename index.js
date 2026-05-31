import{S as v,a as q,i as n}from"./assets/vendor-DZWlGVzj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),M=new v(".gallery a",{captionsData:"alt",captionDelay:250});function f(o){const t=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:r,views:i,comments:w,downloads:S})=>`
        <li class="gallery-item">
          <a href="${c}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${r}</p>
            <p><b>Views</b> ${i}</p>
            <p><b>Comments</b> ${w}</p>
            <p><b>Downloads</b> ${S}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",t),M.refresh()}function P(){u.innerHTML=""}function m(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}function B(){p.classList.remove("hidden")}function d(){p.classList.add("hidden")}const R="https://pixabay.com/api/",$="56002305-72176059533bc29105aa8638a";async function y(o,t){return(await q.get(R,{params:{key:$,q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const L=document.querySelector(".form"),O=document.querySelector(".load-more");let l="",a=1;const b=15;L.addEventListener("submit",x);O.addEventListener("click",E);async function x(o){if(o.preventDefault(),l=o.currentTarget.elements["search-text"].value.trim(),!l){n.warning({message:"Please enter a search query!",position:"topRight"});return}a=1,P(),d(),m();try{const t=await y(l,a);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(t.hits);const s=Math.ceil(t.totalHits/b);a<s?B():(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{g(),L.reset()}}async function E(){a+=1,m();try{const o=await y(l,a);f(o.hits);const t=Math.ceil(o.totalHits/b);a>=t&&(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),A()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{g()}}function A(){const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
