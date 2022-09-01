document.getElementById('hablar').addEventListener('click', () => {
    let texto = document.getElementById('texto').value;
    decir(texto);
} );



const decir = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto), {lang: 'es-ES'}, {rate: 1.0}, {pitch: 1.0}, {volume: 1.0}, {voice: 'native'});
    /*
    rate: es para el velocidad de la voz
    pitch: es para el tono de la voz
    volume: es para el volumen de la voz
    voice: es para la voz que se usara

    Tipos de voz:
    native: es la voz nativa del navegador
    es-ES: es la voz española
    en-US: es la voz inglesa
    hombre: es la voz de un hombre
    mujer: es la voz de una mujer
    */
}
/* if(speechSynthesis.onvoiceschanged !== undefined){
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
} */