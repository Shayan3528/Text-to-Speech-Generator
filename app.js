
// let speech = new SpeechSynthesisUtterance();
// let voices = [];
// let  voiceSelect = document.querySelector("select");
// window.speechSynthesis.onvoiceschanged = ()=>{
//     window = window.speechSynthesis.getVoices();
//     speech.voices = voices[0];
//     voices.forEach((voice,i)=> (voiceSelect.options[i] = new Option(voice.name,i)));
// }


// document.querySelector("button").addEventListener("click",()=>{
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });


let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to load voices and populate the select dropdown
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        // Set the default voice to the first voice in the list
        // speech.voice = voices[0];

        // Clear previous options and populate the select dropdown
        voiceSelect.innerHTML = "";
        voices.forEach((voice, i) => {
            let option = new Option(voice.name, i);
            voiceSelect.options.add(option);
        });
    }
}

// Load voices once they are available and set default
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices(); // Call it directly to ensure voices are loaded
} else {
    console.error("Speech synthesis not supported in this browser.");
}

// Update the selected voice based on dropdown selection
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.selectedIndex];
});

// Set up the button to start speaking
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
