const inputRangeRef = document.querySelector('input[id="font-size-control"]');
//console.log(inputRangeRef);
const textRef = document.querySelector('span[id="text"]');
//console.log(textRef)
const fontSizeControlFoo = () => {
  textRef.style.fontSize = `${inputRangeRef.value}px`;
};
inputRangeRef.addEventListener("input", fontSizeControlFoo);
