const titleClickHandler = function (event) {
  const clickedElement = this;
  console.log('Link was clicked!', clickedElement);

  /*[DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /*[DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');


  /*[DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

// document.getElementById('test-button').addEventListener('click', function(){
//   const links = document.querySelectorAll('.titles a');
//   console.log('links:', links);
// });

// const titleClickHandler = function (event) {
//   event.preventDefault();
//   const clickedElement = this;



//   /* remove class 'active' from all article links  */
//   const activeLinks = document.querySelectorAll('.titles a.active');
//   for (let activeLink of activeLinks) {
//     activeLink.classList.remove('active');
//     console.log('remove link');
//   }


//   /* add class 'active' to the clicked link */
//   console.log('clickedElement:', clickedElement);
//   clickedElement.classList.add('active');


//   /* remove class 'active' from all articles */
//   const activeArticles = document.querySelectorAll('article.active');
//   for (let activeArticle of activeArticles) {
//     activeArticle.classList.remove('active');
//     console.log('remove from article');
//   }


//   /* get 'href' attribute from the clicked link */
//   const clickedLink = clickedElement.getAttribute('href');
//   console.log('href form clicked element: ', clickedLink);


//   /* find the correct article using the selector (value of 'href' attribute) */
//   const correctArticle = clickedLink.currentTarget;
//   console.log('correctArticle: ', correctArticle);


//   /* add class 'active' to the correct article */
// }