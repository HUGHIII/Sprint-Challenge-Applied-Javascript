// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
const compParentHeader = document.createElement('div');
compDateSpan = document.createElement('span');
compH1 = document.createElement('h1');
compTempSpan = document.createElement('span');


compParentHeader.classList.add('header');
compDateSpan.classList.add('date');
compTempSpan.classList.add('temp');

compParentHeader.append(compDateSpan);
compParentHeader.append(compH1);
compParentHeader.append(compTempSpan);

compDateSpan.textContent = 'MARCH 28, 2019';
compH1.textContent = 'Lambda Times';
compTempSpan.textContent = '98 degrees';

return compParentHeader;
}

const htmlHeaderContainer = document.querySelector('.header-container');
htmlHeaderContainer.append(Header());