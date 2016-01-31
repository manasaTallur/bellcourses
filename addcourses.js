
function save1(){
   var tr=document.createElement('tr')
var td0=document.createElement('td');
    var td1=document.createElement('td');
     var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');
var td5=document.createElement('td');
 
    var table=document.getElementById("table");
    
    td0.innerHTML=document.getElementById("name").value;
    td1.innerHTML=document.getElementById("courses").value;
    td2.innerHTML=document.getElementById("subtopics").value;
    td3.innerHTML=document.getElementById("duration").value;
    td4.innerHTML=document.getElementById("fee").value;
    td5.innerHTML=document.getElementById("level").value;
    
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
   tr.appendChild(td3);
    tr.appendChild(td4);
   tr.appendChild(td5);
    table.appendChild(tr);
showResults();
}
function openform() {
    document.getElementById("demo").style.display = "block";
    document.getElementById("table").style.display = "none";
    document.getElementById("addcourses1").style.display = "none";
}

function showResults() {
    document.getElementById("demo").style.display = "none";
    document.getElementById("table").style.display = "block";
    document.getElementById("addcourses1").style.display = "block";
}

  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
