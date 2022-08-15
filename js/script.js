const articlesSection = document.querySelector('section.posts');
let articles = document.querySelectorAll('article');
const listTitles = document.querySelector('aside .list.titles');
// console.log(articles)

const addTagEventListener = () => {
  const tagsLinks = document.querySelectorAll('a[href^="#tag-"');
  for (let tagLinks of tagsLinks) {
    tagLinks.addEventListener('click', tagClickHandler);
  }
}


const addAuthorEventListener = () => {
  const articleAuthors = articles.querySelectorAll('li a');
  for (let articleAuthor of articleAuthors) {
    articleAuthor.addEventListener('click', titleClickHandler);
  }
}

// const clearClassActive = (listElement) => {
//   for (let item of listElement) {
//     if (item.className === "active") {
//       item.classList.remove('active');
//     }
//   };
// }



const tagClickHandler = function (e) {
  e.preventDefault();
  const clickedElement = this;

  const tagClicked = clickedElement.getAttribute('href');
  const selectedTagList = document.querySelectorAll(`a[href='${tagClicked}']`);
  for (let element of selectedTagList) {
    element.classList.toggle('active');
  }

  const selectedTag = tagClicked.replace('#tag-', '')
  const selectedArticles = document.querySelectorAll(`[data-tags*='${selectedTag}']`);

  if (!selectedTagList[0].classList.contains('active')) {
    generateListTitles()
  } else {
    const articlesArray = []
    for (let element of selectedArticles) {
      articlesArray.push(element)
    }
    generateListTitles(articlesArray)
  }
}

const generateListTitles = (articlesList = articles) => {
  listTitles.innerHTML = '';

  for (let article of articlesList) {
    const articleTitle = article.querySelector('.post-title');
    const articleId = '#' + article.getAttribute('id');
    const linkArticleTitle = `<li><a href="${articleId}">${articleTitle.innerHTML}</a></li>`;
    listTitles.insertAdjacentHTML('beforeend', linkArticleTitle);
    listTitles.classList.remove('active');
  }

  listTitles.querySelector('a').classList.add('active');
  const firstArticleId = listTitles.children[0].children[0].getAttribute('href').replace('#', '');
  for (let el of articles) {
    if (el.id === firstArticleId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }

  addTitleEventListener();
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
    if (clickedTitle === title) {
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
  addTagEventListener();
};


//run generate tag
generateTags();

//run generate list of titles
generateListTitles();