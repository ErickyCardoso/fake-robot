document.addEventListener("DOMContentLoaded", function() {
    const dados = {
            "ola": "Olá, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajuda-lo?",
            "hello": "Hello, I am JHINFERENT'AI, a Chatbot made by Ericky Cardoso, how can I help you?",
            "oi": "Oi, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajuda-lo?",
            "hi": "Hi, I'm JHINFERENT'AI, a Chatbot made by Ericky Cardoso, how can I help you?", 
            "oie": "Oie, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajuda-lo?",
            "bom dia": "Bom dia, o sol já nasceu na fazendinha, como posso ajuda-lo?",
            "good morning": "Good morning! The sun has already come up on the little farm, how can I help you?",
            "boa tarde": "Boa tarde, como vais? Como posso ajuda-lo?",
            "good afternoon": "Good Afternoon, I'm JHINFERENT'AI, how can I help you?",
            "boa noite": "Boa noite, eu sou o JHINFERENT'AI, como posso ajuda-lo?",
            "boa madrugada": "Que escuridão... Como posso ajuda-lo?",
        };
        let input = (prompt("DIGITE:")).toLowerCase();
        document.getElementById("textoin").textContent = input;
        function resposta () {
            if (input in dados) {
                console.log(dados[input]);
                document.getElementById("textoia").textContent = (dados[input]);
            } else {
                console.log("Mil perdões, mas não consigo te ajudar com isso. Digite 'ajuda' para saber mais."); 
            }
        }
        resposta();
});
