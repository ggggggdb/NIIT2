var form1 = document.forms.Form1; 
var form2 = document.forms.Form2; 
var square = document.getElementById('square');  
  var result = document.getElementById('result'); 
var allFlat = document.getElementById('allFlat');  
var bath = document.getElementById('bath');  

           
form1.onchange = form1.oninput = calcTotal1; 
function calcTotal1() {	
      var typeValue = form1.selectionName.value;	
      var bathValue = form1.bathType.value;	
      var ceilValue = form1.selectionCeil.value;	
      var repairValue = form1.selectionRepair.value;
      var repaiValue = form1.selectionR.value;
      var repaqValue = form1.selectionv.value;
      var repaaValue = form1.selectionu.value;
      var repazValue = form1.selectiono.value;
      var repapValue = form1.selectionp.value;
      var etagValue = form1.etag1.value;
      var balconValue = form1.balcon1.value;
      var windowValue = form1.window1.value;
      var transportValue = form1.tq.value;
    
      
      
      result.innerHTML = Math.floor(typeValue * bathValue * ceilValue * repairValue * repaiValue * repaqValue * repaaValue * repazValue * repapValue * etagValue * balconValue * windowValue * transportValue); 
   }



