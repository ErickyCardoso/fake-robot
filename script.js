document.addEventListener("DOMContentLoaded", function() {
    const dados = {
            "ajuda": "Você pode se comunicar comigo de maneira simples! Eu posso responder perguntas básicas sobre o mundo da programação, conhecimentos gerais, etc! Mas infelizmente não entendo girias como 'vc', 'ce', 'td', etc.... então por favor sejas paciente! Não sou uma IA de verdade, tenho somente um banco de respostas!",
            "ajudar": "Você pode se comunicar comigo de maneira simples! Eu posso responder perguntas básicas sobre o mundo da programação, conhecimentos gerais, etc! Mas infelizmente não entendo girias como 'vc', 'ce', 'td', etc.... então por favor sejas paciente! Não sou uma IA de verdade, tenho somente um banco de respostas!",

            "jhinferent'ai": "Eu sou o JHINFERENT'AI! Como posso ajudá-lo?",
            "jhinferentai": "Eu sou o JHINFERENT'AI! Como posso ajudá-lo?",
            "jhinferent ai": "Eu sou o JHINFERENT'AI! Como posso ajudá-lo?",
            "quem e voce": "Eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajudá-lo?",
            "banco de respostas": "Todas as minhas respostas são pré-definidas em um banco de respostas vasto, então não sou uma IA de verdade!",
            "resposta": "Todas as minhas respostas são pré-definidas em um banco de respostas vasto, então não sou uma IA de verdade!",
            "respostas": "Todas as minhas respostas são pré-definidas em um banco de respostas vasto, então não sou uma IA de verdade!",
            "o que voce e": "Eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajudá-lo?",
            "quem te criou": "Fui criado pelo Ericky Cardoso, durante as férias de 2025, para treinar minhas habilidades!",
            "ericky": "Ericky Cardoso é o meu criador! Nascido no dia 21 de dezembro de 2010, em Matão-SP!",
            "ericky cardoso": "Ericky Cardoso é o meu criador! Nascido no dia 21 de dezembro de 2010, em Matão-SP!",

            "ola": "Olá, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajudá-lo?",
            "oi": "Oi, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajudá-lo?",
            "oie": "Oie, eu sou o JHINFERENT'AI, um Chat criado pelo Ericky Cardoso, como posso ajudá-lo?",
            "bom dia": "Bom dia, o sol já nasceu na fazendinha, como posso ajudá-lo?",
            "boa tarde": "Boa tarde, como vais? Como posso ajudá-lo?",
            "boa noite": "Boa noite, eu sou o JHINFERENT'AI, como posso ajudá-lo?",
            "boa madrugada": "Que escuridão... Como posso ajudá-lo?",
            
            "como esta": "Estou bem, muito obrigado!",
            "como ce ta": "Tô otimo, valeu!", 
            "como voce esta": "Eu estou bem, obrigado!",
            "voce ta bem": "Tô muito bem, obrigado pela preocupação!",
            "tudo bem com voce": "Estou muito bem, obrigado!",

            "obrigado": "De nada! 🤟 ",
            "de nada": "🤟",
            "valeu": "De nada! 🤟 ",
            "brigado": "De nada! 🤟 ",
            "brigadão": "De nada! 🤟 ",
            "muito obrigado": "De nada! 🤟 ",
            "denada": "🤟",
            
            "js": "JavaScript é uma linguagem de programação leve, interpretada e baseada em objetos. É amplamente utilizada para desenvolvimento web, permitindo a criação de páginas interativas e dinâmicas.",
            "javascript": "JavaScript é uma linguagem de programação leve, interpretada e baseada em objetos. É amplamente utilizada para desenvolvimento web, permitindo a criação de páginas interativas e dinâmicas.",
            "java script": "JavaScript é uma linguagem de programação leve, interpretada e baseada em objetos. É amplamente utilizada para desenvolvimento web, permitindo a criação de páginas interativas e dinâmicas.",
            "html": "HTML (HyperText Markup Language) é a linguagem padrão usada para criar e estruturar páginas na web. Ele define a estrutura do conteúdo, como textos, imagens, links e outros elementos.",
            "css": "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou XML. Ele controla o layout, cores, fontes e outros aspectos visuais das páginas web.",
            "css3": "CSS3 é a terceira versão do CSS, que introduz novos recursos e melhorias para estilizar páginas web, como animações, transições, gradientes e layouts flexíveis.",
            "html5": "HTML5 é a quinta versão do HTML, que traz novos elementos e APIs para melhorar a estrutura e funcionalidade das páginas web, como suporte a multimídia, gráficos e armazenamento local.",
            "o que e ia": "IA, ou Inteligência Artificial, refere-se à simulação de processos de inteligência humana por máquinas, especialmente sistemas de computador. Isso inclui aprendizado, raciocínio, percepção e tomada de decisões.",
            "o que e inteligencia artificial": "IA, ou Inteligência Artificial, refere-se à simulação de processos de inteligência humana por máquinas, especialmente sistemas de computador. Isso inclui aprendizado, raciocínio, percepção e tomada de decisões.",
            "o que e ai": "AI, ou Inteligência Artificial, refere-se à simulação de processos de inteligência humana por máquinas, especialmente sistemas de computador. Isso inclui aprendizado, raciocínio, percepção e tomada de decisões.",
            "ai": "AI, ou Inteligência Artificial, refere-se à simulação de processos de inteligência humana por máquinas, especialmente sistemas de computador. Isso inclui aprendizado, raciocínio, percepção e tomada de decisões.",
            "ia": "IA, ou Inteligência Artificial, refere-se à simulação de processos de inteligência humana por máquinas, especialmente sistemas de computador. Isso inclui aprendizado, raciocínio, percepção e tomada de decisões.",
            "o que e c": "C é uma linguagem de programação de propósito geral, desenvolvida na década de 1970. É conhecida por sua eficiência e controle de baixo nível, sendo amplamente utilizada em sistemas operacionais, desenvolvimento de software e aplicações embarcadas.", 
            "c": "C é uma linguagem de programação de propósito geral, desenvolvida na década de 1970. É conhecida por sua eficiência e controle de baixo nível, sendo amplamente utilizada em sistemas operacionais, desenvolvimento de software e aplicações embarcadas.",        
            "o que e c++": "C++ é uma linguagem de programação de propósito geral que estende a linguagem C, adicionando recursos de programação orientada a objetos. É amplamente utilizada em desenvolvimento de software, jogos, sistemas embarcados e aplicações de alto desempenho.",
            "c++": "C++ é uma linguagem de programação de propósito geral que estende a linguagem C, adicionando recursos de programação orientada a objetos. É amplamente utilizada em desenvolvimento de software, jogos, sistemas embarcados e aplicações de alto desempenho.",
            "o que e python": "Python é uma linguagem de programação de alto nível, interpretada e de propósito geral. É conhecida por sua sintaxe clara e legibilidade, sendo amplamente utilizada em desenvolvimento web, ciência de dados, automação, inteligência artificial e muito mais.",
            "python": "Python é uma linguagem de programação de alto nível, interpretada e de propósito geral. É conhecida por sua sintaxe clara e legibilidade, sendo amplamente utilizada em desenvolvimento web, ciência de dados, automação, inteligência artificial e muito mais.",
            "o que e ruby": "Ruby é uma linguagem de programação dinâmica, de código aberto e orientada a objetos. É conhecida por sua simplicidade e produtividade, sendo amplamente utilizada no desenvolvimento web, especialmente com o framework Ruby on Rails.",
            "ruby": "Ruby é uma linguagem de programação dinâmica, de código aberto e orientada a objetos. É conhecida por sua simplicidade e produtividade, sendo amplamente utilizada no desenvolvimento web, especialmente com o framework Ruby on Rails.",
            "o que e php": "PHP é uma linguagem de programação de código aberto amplamente utilizada para desenvolvimento web. É especialmente adequada para criação de páginas dinâmicas e interativas, sendo frequentemente usada em conjunto com bancos de dados.",
            "php": "PHP é uma linguagem de programação de código aberto amplamente utilizada para desenvolvimento web. É especialmente adequada para criação de páginas dinâmicas e interativas, sendo frequentemente usada em conjunto com bancos de dados.",
            "o que e java": "Java é uma linguagem de programação de propósito geral, orientada a objetos e baseada em classes. É amplamente utilizada para desenvolvimento de aplicativos empresariais, aplicativos móveis (Android), sistemas embarcados e muito mais.",
            "java": "Java é uma linguagem de programação de propósito geral, orientada a objetos e baseada em classes. É amplamente utilizada para desenvolvimento de aplicativos empresariais, aplicativos móveis (Android), sistemas embarcados e muito mais.",
            
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
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            const msg = document.createElement('div');
            msg.textContent = ("Mil perdões, mas não consigo te ajudar com isso. Digite 'ajuda' para saber mais.");
            msg.classList.add('msg');
            containeria.appendChild(msg);
            window.scrollTo(0, document.body.scrollHeight);
        }
    } 
    textarea.addEventListener("keydown", function(event) {
        if (event.key === 'Enter' && textarea.value.trim() !== '') {
            document.querySelector('.inicio').style.display = 'none';
            const msgin = document.createElement('div');
            msgin.textContent = textarea.value;
            msgin.classList.add('msgin');
            containeria.appendChild(msgin);
            window.scrollTo(0, document.body.scrollHeight);
            input = textarea.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.!?,;:]+$/, "").trim();
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