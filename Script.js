document.getElementById('hablar').addEventListener('click', () => {
    let texto = document.getElementById('texto').value;
    decir(texto);
} );



const decir = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = function(){
        let voices = speechSynthesis.getVoices();
        voices.forEach(voice => {
            if(voice.lang === 'es-ES'){
                let hombre = voice;
                speechSynthesis.speak(new SpeechSynthesisUtterance('Hola, soy un robot, ¿Cómo te llamas?'), {voice: hombre});
            }else{
                let mujer = voice;
                speechSynthesis.speak(new SpeechSynthesisUtterance('Hello, I am a robot, how are you?'), {voice: mujer});
            }
        } );
    }
}