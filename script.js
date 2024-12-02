//Box Shadow 
//Elements
const horizontalInput = document.querySelector("#horizontalInput");
const verticalInput = document.querySelector("#verticalInput");
const blurInput = document.querySelector("#blurInput");
const spreadInput = document.querySelector("#spreadInput");
const colorInput = document.querySelector("#colorInput");
const opacityInput = document.querySelector("#opacityInput");
const insetInput = document.querySelector("#insetInput");
const preview = document.querySelector(".preview");
const codeText =  document.querySelector(".code");
const copyBtn = document.querySelector(".copy-btn");
//Functions
const updatePreview = () => {
    const horizontal = horizontalInput.value;
    const vertical = verticalInput.value;
    const blur = blurInput.value;
    const spread = spreadInput.value;
    const color = colorInput.value;
    const opacity = opacityInput.value;
    const inset = insetInput.checked ? "inset" : "";
    preview.style.boxShadow = `${inset} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`;
    preview.style.opacity = opacity;
    updateCopy()
}
const updateCopy = () => {
    const code = `box-shadow: ${preview.style.boxShadow};\nopacity: ${preview.style.opacity};`;
    codeText.textContent = code;
}
const copytoClipboard = (text) => {
    navigator.clipboard.writeText(text)
}
copyBtn.addEventListener("click", () => {
    copytoClipboard(codeText.textContent)
    copyBtn.firstChild.style.color = "green";
    setTimeout(() => {
        copyBtn.firstChild.style.color = "black";
    }, 1000)
})
//Events
colorInput.addEventListener("input", updatePreview);
insetInput.addEventListener("input", updatePreview);
//Range Input Feedback (span)
//Elements
const rangeInputs = document.querySelectorAll('input[type="range"]');
const rangeValueSpans = document.querySelectorAll(".range-value");
//Events
rangeInputs.forEach(rangeInput => {
    rangeInput.nextElementSibling.textContent = rangeInput.value;
    updatePreview()
    rangeInput.addEventListener("input", (e) => {
        const value = rangeInput.value;
        rangeInput.nextElementSibling.textContent = value;
        updatePreview()
    })
})




