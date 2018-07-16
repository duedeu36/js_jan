/*
Task
Add the following functionality to your shopping list:

1) Fill the list by clicking on the Add item button
2) After an item has been put on the list, the textbox should be cleared. When adding an item only items that have at least 2 characters can be added.
3) When clicking on the removefirst button, the first item should be removed from the list
4) Same as 2) for the last item
5) When clicking on the "remove" button, ALL items will be removed
*/

// Help
/*     
var ... = document.getElementById('...');
....onclick = function () {
var ... = document.createElement('...');

*/

// 1) Fill the list by clicking on the Add item button
var addItem = document.getElementById('addgift');
    addItem.onclick = function () {
var takeValue = document.getElementById('gift');
var valueOfGift = takeValue.value;
var addToList = document.createElement('li');
    };


/*
Additional Task:

Basket:

1) When adding a new item to the shopping list, add a new item to the basket array. Each item consists of a name and a price. Think of how you can represent this in a proper way.

The price is a random value between 5 and 100. The price is not a string, it is a number. Only integers, no float.

2) When removing the last or first item, also remove the last or first item in the basket array.

3) Whe removing a specific item, also remove the specific item in the array.

4) When the user presses the sum-Button, the total basket value will be alerted to the user.
*/