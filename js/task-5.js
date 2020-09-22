const inputRef = document.querySelector('input[id="name-input"]');
//console.log(inputRef);
const outputRef = document.querySelector('span[id="name-output"]');
//console.log(outputRef);
inputRef.oninput = function () {
  outputRef.innerHTML = inputRef.value;
  if (inputRef.value === "") {
    outputRef.innerHTML = "незнакомец";
  }
};
