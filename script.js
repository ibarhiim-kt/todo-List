var check = document.getElementById("addButton").addEventListener("click", function() {
    var textFieldContent = document.getElementById("inputContent").value;
    var newPara = document.createElement("h3");
    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
      
    if (textFieldContent !== "") {
        newPara.innerHTML = `<div id="newParaContent" draggable="true"><div><div class="textUpdate">${textFieldContent} </div><br>
                    <select id="optionSelector">
                        <option value="data-col1" id="toDo">To do</option>
                        <option value="data-col2" id="inProgress">In Progress</option>
                        <option value="data-col3" id="completed">Completed</option>
                    </select></div>
                    <div>
                    <button class="edit">edit</button>
                    <button class="delButton">x</button><div></div>`;

        document.getElementById("data-col1").appendChild(newPara);

        newPara.querySelector("select").addEventListener("change", function() {
            var selectedDivId = this.value;
            document.getElementById(selectedDivId).appendChild(newPara);
        });

        newPara.querySelector(".edit").addEventListener("click", function() {            
        
            var updatedValue = prompt("Please enter the new value");
            newPara.querySelector(".textUpdate").innerHTML = updatedValue;
            
        });

        newPara.querySelector(".delButton").addEventListener("click", function() {
            newPara.remove();
        });
    }

    document.getElementById("inputContent").value = ""; 
});
