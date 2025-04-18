export const getData = (page) =>
  fetch(
    `https://pixabay.com/api/?key=49798366-add1efa312560eace02750f13&editors_choice=true&per_page=6&page=${page}`
  ).then((response) => response.json());
