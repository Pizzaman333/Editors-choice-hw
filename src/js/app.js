import { getData } from "./get-data";
let page = parseInt(localStorage.getItem("currentPage") || 1);

for (let i = 1; i < page + 1; i++) {
    getData(i).then(
        (data) =>
          (document.querySelector("#image-gallery").innerHTML += data.hits
            .map(
              (element) =>
                `<div class="image-container">
                 <img src="${element.largeImageURL}" alt="">
               </div>`
            )
            .join(""))
      );
}


document.querySelector("#load-more-btn").addEventListener("click", (event) => {
  page++;
  getData(page).then(
    (data) =>
      (document.querySelector("#image-gallery").innerHTML += data.hits
        .map(
          (element) =>
            `<div class="image-container">
               <img src="${element.largeImageURL}" alt="">
             </div>`
        )
        .join(""))
  );
  localStorage.setItem("currentPage", page);
});
