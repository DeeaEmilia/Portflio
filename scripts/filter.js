filterSelection('all');

function filterSelection(c) {
  let x = document.getElementsByClassName('card');
  if (c == 'all') { c = ''; }
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (let i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
  }
  
}

// Show filtered elements
function addClass(element, name) {
  let arr1 = element.className.split(' ');
  let arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  let arr1 = element.className.split(' ');
  let arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// Add active class to the current control button (highlight it)
let filterList = document.getElementById('filter-list');
let filterItems = filterList.getElementsByClassName('filter');
for (let i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}


