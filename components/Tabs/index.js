// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
  

function tabComp(apiParam){
const topicTabParent = document.createElement('div');
topicTabParent.classList.add('tab');
 topicTabParent.textContent = apiParam.topics;
 return topicTabParent;
}
const parentTopics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response =>{
    console.log(response.data);
    const compData = tabComp(response.data)
    parentTopics.append(compData);
})
.catch(error => {
    console.log('data not returned', error)
  })
