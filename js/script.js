const optArticleTagsSelector = '.post-tags ul.list';

// generate list titles
const generateListTitles = (filterArticle = '') => {
  const listTitles = document.querySelector('aside.sidebar ul.list.titles');

  // list title generation by js
  if (filterArticle === '') {
    const articles = document.querySelectorAll('article');
    for (let article of articles) {
      const articleId = '#' + article.getAttribute('id');
      const articleTitle = article.querySelector('h3.post-title').textContent;
      const link = `<li><a href=${articleId}><span> ${articleTitle} </span></a></li>`;
      listTitles.insertAdjacentHTML('beforeend', link);
    } 
  } 
  // else {
  //   // console.log('new fn: ', filterArticle);
  //   const articles = filterArticle;
  //   for (let article of articles) {
  //     // console.log(article);
  //     // const articleId = '#' + article.getAttribute('id');
  //     // const articleTitle = article.querySelector('h3.post-title').textContent;
  //     // const link = `<li><a href=${articleId}><span> ${articleTitle} </span></a></li>`;
  //     // listTitles.insertAdjacentHTML('beforeend', link);
  //   } 
  // }

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
  const allArticles = document.querySelectorAll('article.post');

  for (let singelArticle of allArticles) {
    const dataTags = singelArticle.querySelector(optArticleTagsSelector);
    const tags = singelArticle.getAttribute('data-tags');
    const tagsArray = tags.split(' ');
    const singelTagElement = tagsArray.map(element => {
      const link = '#tag-' + element;
      const tagElement = '#' + element;
      return `<li><a href=${link}>${tagElement}</a></li>`;
    });
    dataTags.innerHTML = singelTagElement.join(' ');
  }

};

//select tag function
const getAllLinksTag = () => {
  const getAllLinkTags = document.querySelectorAll(optArticleTagsSelector + ' a');

  for (let singelTagLink of getAllLinkTags) {
    singelTagLink.addEventListener('click', (e) => {
      e.preventDefault();
      const clickedTag = e.target;
      const clickedTagHrefValue = clickedTag.getAttribute('href');
      getAllActiveLinksTag(clickedTagHrefValue);
    });
  }
};


// add active class for selected tag
const getAllActiveLinksTag = (clickedTagHrefValue) => {
  // const allListTags = document.querySelectorAll(optArticleTagsSelector + ' a');
  const allListTags = document.querySelectorAll('article');
  let active = document.querySelector('section.posts');
  for (let element of allListTags) {
    const singelTags = element.querySelector('ul.list a');
    if (singelTags.getAttribute('href') === clickedTagHrefValue) {
      singelTags.classList.toggle('active');
    }
    // console.log(activeClass);
  }
  
  for (let element of allListTags) {
    const activeClass = element.querySelector('.post-tags a.active');
    if (activeClass) {
      console.log(element);
      active.appendChild(element);
    }
  }
  // const allActiveListTags = document.querySelectorAll(optArticleTagsSelector + ' a.active');
  // console.log(allListTags)
  generateListTitles(active);

};


//run generate list of titles
generateListTitles();

//run generate tag
generateTags();

//run singel tag click
getAllLinksTag();