import { processCSV } from './csvProcessor.js';
import { writeToFirestore } from './firebaseService.js';

function uploadCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    // Check if a file is selected
    if (!file) {
        alert("Please select a CSV file.");
        return;
    }

    // Function call to send the processed data into the firestore database
    processCSV(file, async (faction, rollNumber, name) => {
        await writeToFirestore(faction, rollNumber, name);
    });

    alert("CSV uploaded successfully!");
}

// Attach to the global window object
window.uploadCSV = uploadCSV;
