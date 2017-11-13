var table,row1,cell1,cell2,OBJ;

xhr = new XMLHttpRequest();
var url = "json";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () { 
    if ((xhr.readyState == 4 && xhr.status == 200)) {
        //alert("DEBUG");
        OBJ = JSON.parse(xhr.response);
            for(var obj in OBJ)
            {
                //console.log("Hi");
                if(OBJ[obj].state=="0")
                {
                    //table = document.getElementById("down");
                    //row1 = table.insertRow();
                    //row1.className = 'danger';
                    //cell1 = row1.insertCell(0);
                    //cell2 = row1.insertCell(1);
                    //cell1.innerHTML = OBJ[obj].message;
                    //cell2.innerHTML = OBJ[obj].status;
                    console.log(OBJ[obj].message + " DOWN\n");
                    //write a new cell to DOWN table
                }
                else if(OBJ[obj].state=="2")
                {
                    table = document.getElementById("trouble");
                    row1 = table.insertRow();
                    row1.className = 'warning';
                    cell1 = row1.insertCell(0);
                    cell2 = row1.insertCell(1);
                    cell1.innerHTML = OBJ[obj].message;
                    cell2.innerHTML = OBJ[obj].status;
                    console.log(OBJ[obj].message+ " Trouble\n");
                    //write a new cell to Trouble table
                }
                else if(OBJ[obj].state=="1")
                {
                    console.log(OBJ[obj].message+ " Up \n");
                    //If you create a 'Running' table include it there
                }
                else{
                    alert("Fatal Error. Status code in json doesn't have valid data");
                }
                //for(var key in OBJ[obj])
                //{
                //    
                //    console.log("key: "+key+", value: "+OBJ[obj][key]);
                //}
                
            }
    }
};
var data = {"email":"hey@mail.com","password":"101010"};
xhr.send(data);

//function f3()
//{
//    table = document.getElementById("down");
//    var old_tbody = document.getElementById("down_body");
//    var new_tbody = document.createElement('tbody');
//    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
//}
function f1()
{
    var table = document.getElementById("down");
    while(table.rows.length > 1) { table.deleteRow(1); }
    var substring = document.getElementById("search").value; //Gets the text in the search box
    for(var obj in OBJ)
            {
                if(OBJ[obj].state=="0" && OBJ[obj].message.indexOf(substring) !== -1)
                {
                row1 = table.insertRow();
                row1.className = 'danger';
              
                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                cell1 = row1.insertCell(0);
                cell2 = row1.insertCell(1);
                
                // Add some text to the new cells:
                cell1.innerHTML = OBJ[obj].message;
                cell2.innerHTML = OBJ[obj].status;
                }
            }

f2();
}
function f2()
{
    var table = document.getElementById("trouble");
    while(table.rows.length > 1) { table.deleteRow(1); }
    var substring = document.getElementById("search").value; //Gets the text in the search box
    for(var obj in OBJ)
            {
                if(OBJ[obj].state=="2" && OBJ[obj].message.indexOf(substring) !== -1)
                {
                row1 = table.insertRow();
                row1.className = 'warning';
              
                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                cell1 = row1.insertCell(0);
                cell2 = row1.insertCell(1);
                
                // Add some text to the new cells:
                cell1.innerHTML = OBJ[obj].message;
                cell2.innerHTML = OBJ[obj].status;
                }
            }

}



