const articlesSection = document.querySelector('section.posts');
const articles = document.querySelectorAll('article');
const listTitles = document.querySelector('aside .list.titles');


const generateArticles = (articlesList) => {
  if(articlesList) {
    articlesSection.innerHTML = '';
    for(article of articlesList) {
      articlesSection.insertAdjacentHTML('beforend', article.outerHTML);
    }
  }
  document.querySelector('article').classList.add('active');
};

//does not work
const tagClickHendler = function (e) {
  e.preventDefault();
  const clickedElement = this;
  console.log(clickedElement);

}

const generateListTitles = () => {
  for (let article of articles) {
    const articleTitle = article.querySelector('.post-title');
    const articleId = '#' + article.getAttribute('id');
    const linkArticleTitle = `<li><a href=${articleId}>${articleTitle.innerHTML}</a></li>`;
    listTitles.insertAdjacentHTML('beforeend', linkArticleTitle);
    listTitles.classList.remove('active');
  }
  // listTitles.querySelector('li').classList.add('active');
  const articleTitles = listTitles.querySelectorAll('li a');
  for (let articleTitle of articleTitles) {
    articleTitle.addEventListener('click', titleClickHandler);
  }
};

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;

  const listOfTitle = listTitles.querySelectorAll('li a.active');
  for (let listTitle of listOfTitle) {
    listTitle.classList.remove('active');
  }

  clickedElement.classList.add('active');
  for (let article of articles) {
    const title = article.querySelector('.post-title').textContent;
    const clickedTitle = clickedElement.textContent;
    article.classList.remove('active');
    if(clickedTitle === title) {
      article.classList.add('active');
    }    
  }
};

const generateTags = () => {
  for (let article of articles) {
    const listTags = article.querySelector('ul.list');
    const tagsArray = article.getAttribute('data-tags').split(' ');
    const tag = tagsArray.map(element => {
      const link = '#tag-' + element;
      const tagElement = '#' + element;
      return `<li><a href=${link}>${tagElement}</a></li>`;
    });
    listTags.innerHTML = tag.join(' ');
  }
};

generateArticles();

//run generate tag
generateTags();

//run generate list of titles
generateListTitles();