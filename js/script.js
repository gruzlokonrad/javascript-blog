const generationListTitles = () => {
  const listTitles = document.querySelector('h2.section-title + ul.list.titles');

  // clear title list
  listTitles.innerHTML = '';


  // list title generation by js
  const articles = document.querySelectorAll('article');
  for (let article of articles) {
    const articleId = '#' + article.getAttribute('id');
    const articleTitle = article.querySelector('h3.post-title').textContent;
    const link = `<li><a href=${articleId}><span> ${articleTitle} </span></a></li>`;
    listTitles.insertAdjacentHTML('beforeend', link);
  }

  // add event listeners
  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
};

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;

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

  /*[DONE] get 'href' attribute from the clicked link */
  const getHrefAttribute = clickedElement.getAttribute('href');

  /*[DONE] find the correct article using the selector (value of 'href' attribute) */
  const findArticle = document.querySelector(getHrefAttribute);

  /*[DONE] add class 'active' to the correct article */
  findArticle.classList.add('active');
};


//function tag generation
const generateTags = () => {
  const optArticleTagsSelector = '.post-tags ul.list';
  const allArticles = document.querySelectorAll('article.post');

  for (let singelArticle of allArticles) {
    const dataTags = singelArticle.querySelector(optArticleTagsSelector);
    const tags = singelArticle.getAttribute('data-tags')
    const tagsArray = tags.split(' ');
    const singelTagElement = tagsArray.map(element => {
      const link = "#tag-" + element ;
      const tagElement = "#" + element
      return `<li><a href=${link}>${tagElement}</a></li>`
  })
    dataTags.innerHTML = singelTagElement.join(' ');
  }

}


// [DONE]
  /* find all articles */
  /* START LOOP: for every article: */
  /* find tags wrapper */
  /* make html variable with empty string ???*/
  /* get tags from data-tags attribute */
  /* split tags into array */
  /* START LOOP: for each tag */
  /* generate HTML of the link */
  /* add generated code to html variable */
  /* END LOOP: for each tag */
  /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */


// run generation list of titles
generationListTitles();

//run generation tag
generateTags();