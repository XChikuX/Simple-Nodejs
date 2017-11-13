#!/usr/bin/env node
					// This create a link to my json.js file
fs = require('fs');
var OBJ;
function json()
{
	
	console.log("Entering JSON");  
        OBJ = require(__dirname + '/public/convertcsv.json');
        for(var obj in OBJ)
            {
                //console.log("Hi");
                if(OBJ[obj].state=="0")
                {
                    console.log(OBJ[obj].message + " DOWN\n");
                    //write a new cell to DOWN table
                }
                else if(OBJ[obj].state=="2")
                {
                    console.log(OBJ[obj].message+ " Trouble\n");
                    //write a new cell to Trouble table
                }
                else if(OBJ[obj].state=="1")
                {
                    console.log(OBJ[obj].message+ " Up \n");
                    //If you create a 'Running' table include it there
                }
                else{
                    console.log("Fatal Error. Status code in json doesn't have valid data");
                }
                //for(var key in OBJ[obj])
                //{
                //    
                //    console.log("key: "+key+", value: "+OBJ[obj][key]);
                //}
            }    
}

exports.json = json;