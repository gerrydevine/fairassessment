// COPY TO CLIPBOARD
function copyToClipboard(textBlock) {
    //getting text from P tag
    var copyText = document.getElementById("modal-content");  
    // creating textarea of html
    var input = document.createElement("textarea");
    //adding p tag text to textarea 
    // input.value = copyText.textContent;
    input.value = textBlock;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    // removing textarea after copy
    input.remove();
    // alert(input.value);
}