import { db } from './config.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

export async function writeToFirestore(faction, rollNumber, name) {
    try {
        // Select the target collection and document
        const docRef = doc(db, 'Synchronize', faction);
        // Add the fields
        await setDoc(docRef, { [rollNumber]: name }, { merge: true });
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}