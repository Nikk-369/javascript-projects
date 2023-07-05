function appendCharacter(char) {
    document.getElementById("result").value += char;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteLastCharacter() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function calculate() {
    var result = document.getElementById("result").value;
    try {
      var output = eval(result);
      document.getElementById("result").value = output;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }
  