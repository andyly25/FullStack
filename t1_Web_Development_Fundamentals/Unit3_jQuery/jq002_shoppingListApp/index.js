`use strict`;

$(function () {
  
  $('#js-shopping-list-form').submit(event => {
    // prevent default form submission
    event.preventDefault();
    // grab the list
    const shoppingListEntry = $('.js-shopping-list-entry').val();

    // add a new list item
    // copy and pasted html code for list
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${shoppingListEntry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
    // let's have the textfield be blank after press add item
    $('.js-shopping-list-entry').val("");
  });

  // one for button 'check' to make linethrough or not for list item
  // recall using this with arrow functions is bad
  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    // recommended to use closest
    // wow, had a .shopping-item__checked the whole time, don't need the '.'
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  
  // one for deleting a list item
  // nearly copy and paste of above
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    // recommended to use closest: get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
    $(this).closest('li').remove();
  });
});
