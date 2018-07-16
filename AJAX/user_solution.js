var userlinkObj = document.getElementById('userlink');
var commentlinkObj = document.getElementById('commentslink');
var adduserlinkObj = document.getElementById('adduserlink');
var addcommentlinkObj = document.getElementById('addcommentlink');

var mainObj = document.getElementById('main');
var adduserObj = document.getElementById()

userlinkObj.onclick = function () {
    mainObj.innerHTML = '';
    loadTable('users');
}

commentlinkObj.onclick = function () {
    mainObj.innerHTML = ''
}

adduserlinkObj.onclick = function () {
    mainObj.innerHTML = 'user list'
}
addcommentlinkObj.onclick = function () {
    mainObj.innerHTML = 'comment list'
}


function generateTable(a) {
    
/*
var a = [
    {a:1, b:2, c:3, d:4},
    {a:5, b:6, c:7, d:8},
    {a:9, b:10, c:11, d:12}
];
*/

var tableObj = document.createElement('table');
var trObj = document.createElement('tr');

for(var i = 0; i <a.length; i++) {
    var tr = document.createElement('tr');
    //tableObj.appendChild(tr);
    for(var mykey in a[i]) {
        var td = document.createElement('td');
        td.textContent = a[i][mykey];
        tr.appendChild(td);
    }
    
    tableObj.appendChild(tr);
}

return tableObj;
      
//mainObj.appendChild(generateTable(a));
       
}

/*
var a = [
    {a:1, b:2, c:3, d:4},
    {a:5, b:6, c:7, d:8},
    {a:9, b:10, c:11, d:12}
];
*/

function loadUsers() {

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://cileria.com:3050/users');
xhr.onload = function() {
    if(xhr.status === 200) {
       // console.log('data has arrived' + xhr.responseText);
    }
    
    var obj = JSON.parse(xhr.responseText);
    
    console.log(obj);
    mainObj.appendChild(generateTable(obj));
}

xhr.send();
    
}


function loadTable(url) {

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://cileria.com:3050/users' +url);
xhr.onload = function() {
    if(xhr.status === 200) {
       // console.log('data has arrived' + xhr.responseText);
    }
    
    var obj = JSON.parse(xhr.responseText);
    
    console.log(obj);
    mainObj.appendChild(generateTable(obj));
}

xhr.send();
    
}













