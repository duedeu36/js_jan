/*
var addgiftObj = document.getElementById = ('addgift');

addgiftObj.onclick = function () {
    
    var giftObj = document.getElementById('gift');
    
    var giftName = giftObj.value;
    var newListItem = document.createElement('li');
    
    newListItem.innerHTML = giftName;
    
    var listObj = document.getElementById('shoppinglist');
    
    listObj.appendChild(newListItem);
    
//  1)
    var removeText = document.getElementById('remove');
    
    removeText.onclick = function () {
        var removeObj = document.getElementById('gift');
        
        removeObj.remove();
    }
    
    

}


Task
Add the following functionality to your shopping list:

1) After an item has been put on the list, the textbox should be cleared. When adding an item only items that habe at least 3 characters can be added.
2) When clicking on the removefirst button, the first item should be removed from the list
3) Same as 2) for the last item
4) When clicking on the "remove" button, all items with the value of the textbox will be removed

*/



var addgiftObj = document.getElementById('addgift');
var basket=[];

addgiftObj.onclick = function(){

   var giftObj = document.getElementById('gift');
   var giftName = giftObj.value;
    
// if the length of the value in the input box (giftObj) is smaller than 3, then massage
   if(giftObj.value.length < 3){
       alert('Please enter a valid shopping item');
   
      return;
   }

   var newListItem = document.createElement('li');
   newListItem.innerHTML = giftName;

   var listObj = document.getElementById('shoopinglist');
   listObj.appendChild(newListItem);
    
   giftObj.value = ''; // giftObj is still declared above, therefore we don't need a new var
    
    basket.push({
        name: giftName,
        price: Math.floor(Math.random()*100 + 5),
    });
    
    
}

    //  2)
    var removeFirst = document.getElementById('removefirstgift');
        removeFirst.onclick = function () {
    var theFirst = document.getElementsByTagName('li');
        theFirst[0].remove();   
   
    };

// When removing the last or first item, also remove the last or first
// item in the basket array.

// 3)

    var removeLast = document.getElementById('removelastgift');
    removeLast.onclick = function() {
        var theLast = document.getElementsByTagName('li');
        theLast[theLast.length - 1].remove();
    };

// 4)

/*
    var removeButton = document.getElementById('remove');
    removeButton.onclick = function() {
          var removeList = document.getElementsByTagName('li');
          removeList[removeList.length].remove();
        };
*/


/*

Basket:

1) When adding a new item to the shopping list, 
add this new item also to the basket array. Each item consists 
of a name and a price. Think of how you can represent
this in a proper way.

The price is a random value between 5 and 100. The price is not a string, 
it is a number. Only integers, no float.

2) When removing the last or first item, also remove the last or first
item in the basket array.

3) When removing a specific item, also remove the specific item
in the array.

4) When the user presses the sum-Button, the total basket value will be alerted to the user.

*/



































