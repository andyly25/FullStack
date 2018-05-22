/* Exercise: implementing the Delete functionality */
function removeListItem (itemIndex) {
  // https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
  // we're directly modifying the array and removing a list object
  return STORE.splice(itemIndex, 1);
}

function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // This function should be similar to handleItemCheckClicked()
  $('.js-shopping-list').on('click', `.js-item-delete`, event => {
    console.log('`handleDeleteItemClicked` ran');
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    // calling my remove function
    removeListItem(itemIndex);
    // rerender the list and everything should work!
    renderShoppingList();
  });
}