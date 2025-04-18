const e=e=>fetch(`https://pixabay.com/api/?key=49798366-add1efa312560eace02750f13&editors_choice=true&per_page=6&page=${e}`).then(e=>e.json());let a=parseInt(localStorage.getItem("currentPage")||1);for(let t=1;t<a+1;t++)e(t).then(e=>document.querySelector("#image-gallery").innerHTML+=e.hits.map(e=>`<div class="image-container">
                 <img src="${e.largeImageURL}" alt="">
               </div>`).join(""));document.querySelector("#load-more-btn").addEventListener("click",t=>{e(++a).then(e=>document.querySelector("#image-gallery").innerHTML+=e.hits.map(e=>`<div class="image-container">
               <img src="${e.largeImageURL}" alt="">
             </div>`).join("")),localStorage.setItem("currentPage",a)});
//# sourceMappingURL=Editors-choice-hw.bc9cebac.js.map
