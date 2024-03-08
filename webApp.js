function addItem() {
    // Get the input value
    var itemInput = document.getElementById('itemInput');
    var newItemText = itemInput.value;

    // Create a new list item
    var newItem = document.createElement('li');
    newItem.textContent = newItemText;

    // Append the new item to the list
    var itemList = document.getElementById('itemList');
    itemList.appendChild(newItem);

    // Clear the input field
    itemInput.value = "";
}