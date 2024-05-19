const symbolInput = document.getElementById("textInput");
symbolInput.addEventListener('input', convertToSpeech);

document.addEventListener('keydown', function(event) {
    // Проверяем, была ли нажата клавиша "правая стрелка" (код 39)
    if (event.keyCode === 39) {
        if(document.activeElement === symbolInput){
            console.log('dawdaw')
        } else {
            console.log('фывфывы')
        }
    }
});


function convertToSpeech() {
    console.log('start');
    const text = symbolInput.value;

    if (text === "" || text.length > 1) return;

    symbolInput.disabled = true;
    textToSpeech(text);
    setTimeout(() => {
        symbolInput.disabled = false;
        symbolInput.value = "";
        symbolInput.focus();
    }, 1000);
}

function textToSpeech(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.lang.startsWith('ru')) || voices[0];
    utterance.voice = selectedVoice;

    // Проигрывание речи
    speechSynthesis.speak(utterance);
}
