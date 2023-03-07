filterSelection('all');

// Filter the card elements based on the active category
function filterSelection(category) {
  const cards = document.getElementsByClassName('card');

  // Add the 'show' class to the filtered elements, and remove it from the elements that are not selected
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    if (category === 'all' || card.classList.contains(category)) {
      addClass(card, 'show');
    } else {
      removeClass(card, 'show');
    }
  }
}

// Add the 'show' class to the element and trigger the transition effect
function addClass(element, className) {
  element.classList.add(className);
  element.offsetWidth; // trigger a reflow to ensure the transition is applied
  element.classList.add('show');
}

// Remove the 'show' class from the element and trigger the transition effect
function removeClass(element, className) {
  element.classList.remove('show');
  element.offsetWidth; // trigger a reflow to ensure the transition is applied
  element.classList.remove(className);
}

// Add an event listener to each filter item that calls the filterSelection function with the category
const filterList = document.getElementById('filter-list');
const filterItems = filterList.querySelectorAll('.filter');
for (let i = 0; i < filterItems.length; i++) {
  const filterItem = filterItems[i];
  filterItem.addEventListener('click', function() {
    const category = filterItem.getAttribute('data-filter');
    filterSelection(category);

    // Add the 'active' class to the clicked filter item and remove it from the others
    const activeFilter = filterList.querySelector('.filter.active');
    activeFilter.classList.remove('active');
    filterItem.classList.add('active');
  });
}



