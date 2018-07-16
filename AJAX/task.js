

function createTable() {
    
    var arr = [
        {a:1, b:2, c:3},
        {d:1, e:2, f:3}
    ];
    var tableObj = document.createElement('table');
    var trObj = document.createElement('tr');
    var tdObj = document.createElement('td');
    
    
    trObj.appendChild(tdObj);
    tableObj.appendChild(trObj);
    
    var containerObj = document.getElementById('container');
    containerObj.appendChild(tableObj);
   // trObj.appendChild(tableObj);
    //tdObj.appendChild(trObj);
      
}

createTable();

    ///document.querySelector('td').textContent = 'Hallo';















