//  var some object = document.getElementById('id');
//selected the id of the html document

//  var something = document.createElement('li for example');  
//creates an element into the html file

// (very first step) Add values into the ul list :
var addgiftObj = document.getElementById('addgift');
var basket = [];
var storedBasket = localStorage.getItem('basket');
var pObj=  document.getElementById('list');
addgiftObj.onclick = function () {
    var giftObj = document.getElementById('gift');
    var giftName = giftObj.value;
    var newListItem = document.createElement('li');

    //  1)
    //  if the value length is smaller then 2, error message appears
    if (giftObj.value.length < 2) {
        alert('Your item should have 2 or more characters');

        return;
    }
    //  puts into the list:
    newListItem.innerHTML = giftName;
    var listObj = document.getElementById('shoppinglist');

    listObj.appendChild(newListItem);
    //  makes the input field empty again    
    giftObj.value = '';

    basket.push({
        name: giftName,
        price: Math.floor(Math.random() * 95) + 5,
    })
};

//  2) remove the first item on the list
var removeFirst = document.getElementById('removefirstgift');
removeFirst.onclick = function () {
    //  what to remove? the li element!
    var removingFirst = document.getElementsByTagName('li');
    //  where? on the first [0] position; how? with remove()
    removingFirst[0].remove();
}

//  3) remove the lasr item on the list
var removeLast = document.getElementById('removelastgift');
removeLast.onclick = function () {
    var removingLast = document.getElementsByTagName('li');
    //  removingLast.length is nessecary to enable js to calculate with a number (-1). Because the 'length' let js know there is now a number
    removingLast[removingLast.length - 1].remove();
}





var removeAllGift = document.getElementById('removeAll');



removeAllGift.onclick = function () {
    var removingAllGift = document.getElementById('shoppinglist');
    removingAllGift.remove();
    

    var newList = document.createElement('ul');
    newList.id= "shoppinglist";
    pObj.insertAdjacentElement('beforeend', newList);
};

if(storedBasket) {
    basket = JSON.parse(storedBasket);
}

console.log(basket);
var keepBasket = document.getElementById('sum');
keepBasket.onclick = function () {
    basket.push(basket.length);
    console.log(basket);
    
    var basketJSON = JSON.stringify(basket);
    localStorage.setItem('basket', basketJSON);
    
   //localStorage.clear();
}


var pressEnter = document.getElementById('gift');
pressEnter.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        document.getElementById('addgift').click();
    }
                            
});



/*
Task
Add the following functionality to your shopping list:

1) After an item has been put on the list, the textbox should be cleared. When adding an item only items that have at least 2 characters can be added.
2) When clicking on the removefirst button, the first item should be removed from the list
3) Same as 2) for the last item
4) When clicking on the "remove" button, all items with the value of the textbox will be removed
*/

/*

Additional Task:

Basket:

1) When adding a new item to the shopping list, add a new item to the basket array. Each item consists of a name and a price. Think of how you can represent this in a proper way.

The price is a random value between 5 and 100. The price is not a string, it is a number. Only integers, no float.

2) When removing the last or first item, also remove the last or first item in the basket array.

3) Whe removing a specific item, also remove the specific item in the array.

4) When the user presses the sum-Button, the total basket value will be alerted to the user.


*/
