document.addEventListener("DOMContentLoaded", function() {
    const dados = {
            "ola": "Olá, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajudá-lo?",
            "hello": "Hello, I am JHINFERENT'AI, a Chatbot made by Ericky Cardoso, how can I help you?",
            "oi": "Oi, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajudá-lo?",
            "hi": "Hi, I'm JHINFERENT'AI, a Chatbot made by Ericky Cardoso, how can I help you?", 
            "oie": "Oie, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajudá-lo?",
            "bom dia": "Bom dia, o sol já nasceu na fazendinha, como posso ajudá-lo?",
            "good morning": "Good morning! The sun has already come up on the little farm, how can I help you?",
            "boa tarde": "Boa tarde, como vais? Como posso ajudá-lo?",
            "good afternoon": "Good Afternoon, I'm JHINFERENT'AI, how can I help you?",
            "boa noite": "Boa noite, eu sou o JHINFERENT'AI, como posso ajudá-lo?",
            "good evening": "Good Evening, I'm JHINFERENT'AI, how can I help you?",
            "boa madrugada": "Que escuridão... Como posso ajudá-lo?"
        };
    const textarea = document.querySelector('textarea');
    const containeria = document.querySelector('.container-ia');
    let input;
    function resposta () {
        if (input in dados) {
            const msg = document.createElement('div');
            msg.textContent = dados[input];
            msg.classList.add('msg');
            containeria.appendChild(msg);
        } else {
            const msg = document.createElement('div');
            msg.textContent = ("Mil perdões, mas não consigo te ajudar com isso. Digite 'ajuda' para saber mais.");
            msg.classList.add('msg');
            containeria.appendChild(msg);
        }
    } 
    document.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') {
            input = textarea.value.toLowerCase().trim();
            textarea.value = '';
            event.preventDefault();
            textarea.style.height = '25px';
            resposta();
        }
    });
    textarea.addEventListener('input', () => {
        if (textarea.value === '') {
            textarea.style.height = '25px';
        } else {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    });
});