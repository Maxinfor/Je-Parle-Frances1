// Módulo de Áudio Profissional com Web Speech API Nativa
function tocarAudio(texto) {
    if (!('speechSynthesis' in window)) {
        console.log("Síntese de fala não suportada neste navegador.");
        return;
    }

    // Cancela qualquer áudio anterior em andamento para evitar sobreposição
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'fr-FR'; // Francês nativo da França
    utterance.rate = 0.9;     // Velocidade ligeiramente pausada para o aprendizado ideal
    utterance.pitch = 1.0;    // Tom natural de voz

    // Busca por uma voz em francês de alta qualidade instalada no aparelho (Google, Siri, Microsoft)
    const voces = window.speechSynthesis.getVoices();
    const vozFrancesa = voces.find(v => v.lang === 'fr-FR' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Siri') || v.name.includes('Amélie') || v.name.includes('Thomas')));
    
    if (vozFrancesa) {
        utterance.voice = vozFrancesa;
    }

    window.speechSynthesis.speak(utterance);
}

// Garante o mapeamento correto das vozes assíncronas do sistema
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}
