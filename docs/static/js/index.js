// Get current datetime
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = year+month+day+'-'+hour+minute+second;   
     return dateTime;
}

currentTime = getDateTime();


const generateText = () => {


    // Grab the form selected answers
    const val1 = document.getElementById('fair-findable-1').value;
    const val2 = document.getElementById('fair-findable-2').value;
    const val3 = document.getElementById('fair-findable-3').value;
    const val4 = document.getElementById('fair-findable-4').value;
    const val5 = document.getElementById('fair-accessible-1').value;
    const val6 = document.getElementById('fair-accessible-2').value;
    const val7 = document.getElementById('fair-accessible-3').value;
    const val8 = document.getElementById('fair-interoperable-1').value;
    const val9 = document.getElementById('fair-interoperable-2').value;
    const val10 = document.getElementById('fair-interoperable-3').value;
    const val11 = document.getElementById('fair-reusable-1').value;
    const val12 = document.getElementById('fair-reusable-2').value;
    
    // Calculate the assessment rating of the selected answers 
    const ff1 = document.getElementById('fair-findable-1')
    const rating1 = ff1.options[ff1.selectedIndex].getAttribute('data-rating');
    const ff2 = document.getElementById('fair-findable-2')
    const rating2 = ff2.options[ff2.selectedIndex].getAttribute('data-rating');
    const ff3 = document.getElementById('fair-findable-3')
    const rating3 = ff3.options[ff3.selectedIndex].getAttribute('data-rating');
    const ff4 = document.getElementById('fair-findable-4')
    const rating4 = ff4.options[ff4.selectedIndex].getAttribute('data-rating');

    const fa1 = document.getElementById('fair-accessible-1')
    const rating5 = fa1.options[fa1.selectedIndex].getAttribute('data-rating');
    const fa2 = document.getElementById('fair-accessible-2')
    const rating6 = fa2.options[fa2.selectedIndex].getAttribute('data-rating');
    const fa3 = document.getElementById('fair-accessible-3')
    const rating7 = fa3.options[fa3.selectedIndex].getAttribute('data-rating');

    const fi1 = document.getElementById('fair-interoperable-1')
    const rating8 = fi1.options[fi1.selectedIndex].getAttribute('data-rating');
    const fi2 = document.getElementById('fair-interoperable-2')
    const rating9 = fi2.options[fi2.selectedIndex].getAttribute('data-rating');
    const fi3 = document.getElementById('fair-interoperable-3')
    const rating10 = fi3.options[fi3.selectedIndex].getAttribute('data-rating');

    const fr1 = document.getElementById('fair-reusable-1')
    const rating11 = fr1.options[fr1.selectedIndex].getAttribute('data-rating');
    const fr2 = document.getElementById('fair-reusable-2')
    const rating12 = fr2.options[fr2.selectedIndex].getAttribute('data-rating');

    // Calculate percentage result for Findable (total available = 17points)
    const ff_total =         
        parseInt(rating1) +
        parseInt(rating2) +
        parseInt(rating3) +
        parseInt(rating4)
    const ff_result = Math.round((ff_total/17)*100) 
    // Calculate percentage result for Accessible (total available = 10points)
    const fa_total =         
        parseInt(rating5) +
        parseInt(rating6) +
        parseInt(rating7)
    const fa_result = Math.round((fa_total/10)*100) 
    // Calculate percentage result for Interoperable (total available = 8points)
    const fi_total =         
        parseInt(rating8) +
        parseInt(rating9) +
        parseInt(rating10)
    const fi_result = Math.round((fi_total/8)*100) 
    // Calculate percentage result for Reusable (total available = 7points)
    const fr_total =         
        parseInt(rating11) +
        parseInt(rating12) 
    const fr_result = Math.round((fr_total/7)*100) 
    
    const total = 
        parseInt(rating1) +
        parseInt(rating2) +
        parseInt(rating3) +
        parseInt(rating4) +
        parseInt(rating5) +
        parseInt(rating6) +
        parseInt(rating7) +
        parseInt(rating8) +
        parseInt(rating9) +
        parseInt(rating10) +
        parseInt(rating11) +
        parseInt(rating12)

    const result = Math.round((total/42)*100) 

    // Generate text block for copying to clipboard
    const textBlock = 
    'This text has been generated from a tool that has been adapted from the ARDC FAIR Assessment Tool' + '\n\n' +
    
    'Findable' + '\n' +
    '--------' + '\n' +
    'Does the dataset have any identifiers assigned?' + '\n' +
    val1 + '\n\n' +
    'Is the dataset identifier included in all metadata records/files describing the data?</p>' + '\n' +
    val2 + '\n\n' +
    'How is the data described with metadata?' + '\n' +
    val3 + '\n\n' +
    'What type of repository or registry is the metadata record in?' + '\n' +
    val4 + '\n\n' +
    
    'Accessible' + '\n' +
    '----------' + '\n' +
    'How accessible is the data?' + '\n' +
    val5 + '\n\n' +
    'Is the data available online without requiring specialised protocols or tools once access has been approved?' + '\n' +
    val6 + '\n\n' +
    'Will the metadata record be available even if the data is no longer available?' + '\n' +
    val7 + '\n\n' +
    
    'Interoperable' + '\n' +
    '-------------' + '\n' +
    'What (file) format(s) is the data available in?' + '\n' +
    val8 + '\n\n' +
    'What best describes the types of vocabularies/ontologies/tagging schemas used to define the data elements?' + '\n' +
    val9 + '\n\n' +
    'How is the metadata linked to other data and metadata (to enhance context and clearly indicate relationships)?' + '\n' +
    val10 + '\n\n' +
    
    'Reusable' + '\n' +
    '--------' + '\n' +
    'Which of the following best describes the license/usage rights attached to the data?' + '\n' +
    val11 + '\n\n' +
    'How much provenance information has been captured to facilitate data reuse?' + '\n' +
    val12 + '\n'
    

    // Generate popup html block
    const htmlBlock = 
    '<h5>Your text has been copied to the clipboard and can now be pasted into the Macquarie University Research Data Repository</h5>' +
    '<h6>You can also download the results for later reuse <a href="#" id="download">here</a></h6>' +
    '<hr />' +
    '<h3>Results Summary</h3>' +
    'Your Overall FAIR assesment is:' + 
    '<h2>' + result + '%</h2>' + 
    '<progress style="width: 100%; height: 50px;" max="100" value="'+result+'"></progress>' +
    'Findable' + 
    '<p><progress style="width: 25%; height: 25px;" max="100" value="'+ff_result+'"></progress></p>' +
    'Accessible' + 
    '<p><progress style="width: 25%; height: 25px;" max="100" value="'+fa_result+'"></progress></p>' +
    'Interoperable' + 
    '<p><progress style="width: 25%; height: 25px;" max="100" value="'+fi_result+'"></progress></p>' +
    'Reusable' + 
    '<p><progress style="width: 25%; height: 25px;" max="100" value="'+fr_result+'"></progress></p>' +
    '<hr />' +

    '<h5>Findable</h5>' +
    '<strong>Does the dataset have any identifiers assigned?</strong>' +
    '<p>' + val1 + '</p>' +
    'Is the dataset identifier included in all metadata records/files describing the data?' +
    '<p>' + val2 + '</p>' +
    'How is the data described with metadata?' +
    '<p>' + val3 + '</p>' +
    'What type of repository or registry is the metadata record in?' +
    '<p>' + val4 + '</p>' +

    '<h5>Accessible</h5>' +
    'How accessible is the data?' +
    '<p>' + val5 + '</p>' +
    'Is the data available online without requiring specialised protocols or tools once access has been approved?' +
    '<p>' + val6 + '</p>' +
    'Will the metadata record be available even if the data is no longer available?' +
    '<p>' + val7 + '</p>' + 

    '<h5>Interoperable</h5>' +
    'What (file) format(s) is the data available in?' +
    '<p>' + val8 + '</p>' +
    'What best describes the types of vocabularies/ontologies/tagging schemas used to define the data elements?' +
    '<p>' + val9 + '</p>' +
    'How is the metadata linked to other data and metadata (to enhance context and clearly indicate relationships)?' +
    '<p>' + val10 + '</p>' +

    '<h5>Reusable</h5>' +
    'Which of the following best describes the license/usage rights attached to the data?' +
    '<p>' + val11 + '</p>' +
    'How much provenance information has been captured to facilitate data reuse?' +
    '<p>' + val12 + '</p>'

    
    // Write HTML block to modal inner text
    document.getElementById('main-modal-content').innerHTML = htmlBlock
    
    // Populate download text button

    var fileName = "FAIR_Results_" + currentTime + ".txt";
    var myFile = new Blob([textBlock], {type: 'text/plain'});

    window.URL = window.URL || window.webkitURL;
    var dlBtn = document.getElementById("download");

    dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
    dlBtn.setAttribute("download", fileName);

    // copy text to the clipboard
    copyToClipboard(textBlock)

    // Get the modal and open it
    var mainModal = document.getElementById("mainModal");
    // When the user clicks on the button, open the modal
    mainModal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == mainModal) {
        mainModal.style.display = "none";
      }
    }


};


const openFindableModal = () => {
    var findableModal = document.getElementById("findableModal");
    findableModal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == findableModal) {
          findableModal.style.display = "none";
        }
    }
}

const openAccessibleModal = () => {
    var accessibleModal = document.getElementById("accessibleModal");
    accessibleModal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == accessibleModal) {
          accessibleModal.style.display = "none";
        }
    }
}

const openInteroperableModal = () => {
    var interoperableModal = document.getElementById("interoperableModal");
    interoperableModal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == interoperableModal) {
          interoperableModal.style.display = "none";
        }
    }
}

const openReusableModal = () => {
    var reusableModal = document.getElementById("reusableModal");
    reusableModal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == reusableModal) {
          reusableModal.style.display = "none";
        }
    }
}
