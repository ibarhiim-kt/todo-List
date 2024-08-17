var check = document.getElementById("addButton").addEventListener("click",function(){
    var textFieldContent = document.getElementById("inputContent").value;
    var newPara = document.createElement("h3");
    if(textFieldContent != ""){       
    newPara.innerHTML=`<div id="newParaContent">${textFieldContent} <br>
                    <select id="optionSelector">
                        <option value="data-col1" id="toDo">To do</option>
                        <option value="data-col2" id="inProgress">In Progress</option>
                        <option value="data-col3" id="completed">Completed</option>
                    </select></div>`     
        document.getElementById("data-col1").appendChild(newPara);
        newPara.querySelector("select").addEventListener("change", function() {
        var selectedDivId = this.value;
        document.getElementById(selectedDivId).appendChild(newPara);
    });  
}
    textFieldContent = document.getElementById("inputContent").value = ""; 
})
