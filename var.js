var form1 = document.forms.Form1; 
var form2 = document.forms.Form2; 
var square = document.getElementById('square');  
  var result = document.getElementById('result'); 
var allFlat = document.getElementById('allFlat');  
var bath = document.getElementById('bath');  

           
form1.onchange = form1.oninput = calcTotal1; 
function calcTotal1() {	
      var typeValue = Form1.selectionName.value;	
      var bathValue = Form1.bathType.value;	
      var ceilValue = Form1.selectionCeil.value;	
      var repairValue = Form1.selectionRepair.value;
      var repaiValue = Form1.selectionR.value;
      var repaqValue = Form1.selectionv.value;
      var repaaValue = Form1.selectionu.Value;
      var repazValue = Form1.selectiono.Value;
      var repapValue = Form1.selectionp.Value;
      var etagValue = Form1.etag1.Value;
      var balconValue = Form1.balcon1.Value;
      var windowValue = Form1.window1.Value;
      var transportValue = Form1.tq.Value;
    
      
      
      result.innerHTML = Math.floor(typeValue * bathValue * ceilValue * repairValue * repaiValue * repaqValue * repaaValue * repazValue * repapValue * etagValue * balconValue * windowValue * transportValue); 
   }



