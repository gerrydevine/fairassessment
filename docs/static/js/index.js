const generateText = () => {
    val1 = document.getElementById('fair-findable-1').value;
    val2 = document.getElementById('fair-findable-2').value;
    val3 = document.getElementById('fair-findable-3').value;
    val4 = document.getElementById('fair-findable-4').value;
    val5 = document.getElementById('fair-accessible-1').value;
    val6 = document.getElementById('fair-accessible-2').value;
    val7 = document.getElementById('fair-accessible-3').value;
    val8 = document.getElementById('fair-interoperable-1').value;
    val9 = document.getElementById('fair-interoperable-2').value;
    val10 = document.getElementById('fair-interoperable-3').value;
    
    // Calculate the assessment rating of the selected answers 
    ff1 = document.getElementById('fair-findable-1')
    ff1.options[ff1.selectedIndex].getAttribute('data-rating');

    // Generate acknowledgement text
    const ack = "This text has been generated following the ARDC FAIR Assessment Tool"

    // Write text output
    document.getElementById('placeholder').innerHTML = 
    
    '<p>' + ack + '</p>' +
    '<h5>FINDABLE</h5>' +
    '<p>_______________</p>' +
    '<p>Does the dataset have any identifiers assigned?</p>' +
    '<p>' + val1 + '</p>' +
    '<br />' +
    '<p>Is the dataset identifier included in all metadata records/files describing the data?</p>' +
    '<p>' + val2 + '</p>' +
    '<br />' +
    '<p>How is the data described with metadata?</p>' +
    '<p>' + val3 + '</p>' +
    '<br />' +
    '<p>What type of repository or registry is the metadata record in?</p>' +
    '<p>' + val4 + '</p>' +
    '<br />' +
    '<h5>Accessible</h5>' +
    '<p>_______________</p>' +
    '<p>How accessible is the data?</p>' +
    '<p>' + val5 + '</p>' +
    '<br />' +
    '<p>Is the data available online without requiring specialised protocols or tools once access has been approved?</p>' +
    '<p>' + val6 + '</p>' +
    '<br />' +
    '<p>What type of repository or registry is the metadata record in?</p>' +
    '<p>' + val7 + '</p>' +
    '<br />' +
    '<h5>Interoperable</h5>' +
    '<p>_______________</p>' +
    '<p>What (file) format(s) is the data available in?</p>' +
    '<p>' + val8 + '</p>' +
    '<br />' +
    '<p>What best describes the types of vocabularies/ontologies/tagging schemas used to define the data elements?</p>' +
    '<p>' + val9 + '</p>' +
    '<br /> ' +
    '<p>How is the metadata linked to other data and metadata (to enhance context and clearly indicate relationships)?</p>' +
    '<p>' + val10 + '</p>' +
    '<br />' +
    '<h5>Reusable</h5>' +
    '<p>_______________</p>'

    const element_to_scroll_to = document.getElementById('toptext');
    element_to_scroll_to.scrollIntoView(behaviour='smooth');

    // Show Clear Text button
    var x = document.getElementById("clearTextBtn");
    x.style.display = "block";
    // Show Copy Clipboard button
    var y = document.getElementById("copyClipboardBtn");
    y.style.display = "block";


};

const clearText = () => {
    document.getElementById('placeholder').innerHTML = ""
    // Show Clear Text button
    var x = document.getElementById("clearTextBtn");
    x.style.display = "none";
    // Show Copy Clipboard button
    var y = document.getElementById("copyClipboardBtn");
    y.style.display = "none";
};


// ----- MODAL -----------
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// // COPY TO CLIPBOARD
// function copyToClipboard() {
//   /* Get the text field */
//   var copyText = document.getElementById("placeholder");

//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   // alert("Copied the text: " + copyText.value);
//   alert("The text has been copied to the clipboard");
// }
