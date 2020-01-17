// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log('data not returned', error)
  })

  function articleComp(authorData){
      const cardDivParent = document.createElement('div');
      headlineDiv = document.createElement('div');
      authorDiv = document.createElement('div');
      imgDiv = document.createElement('div');
      imgUrl = document.createElement('img');
      authorNameSpan = createImageBitmap('span');

      cardDivParent.classList.add('card');
      headlineDiv.classList.add('headline');
      authorDiv.classList.add('author');
      imgDiv.classList.add('img-container');

        cardDivParent.append(headlineDiv);
        cardDivParent.append(authorDiv);
        authorDiv.append(imgDiv);
        authorDiv.append(authorNameSpan)
        imgDiv.append(imgUrl);

        headlineDiv.textContent = authorData.headline;
        imgUrl.src = authorData.authorPhoto;
        authorNameSpan.textContent = authorData.authorName;

        return cardDivParent;
  }

  const htmlCardsCont = document.querySelector('cards-container');