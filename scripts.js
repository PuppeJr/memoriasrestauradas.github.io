document.addEventListener('DOMContentLoaded', function() {
    // Atualizar o ano no rodapé
    document.getElementById('ano-atual').textContent = new Date().getFullYear();

    // Menu mobile
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    menuMobile.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            menuMobile.classList.remove('active');
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Formulário de contato
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const nome = document.getElementById('nome').value;
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
            
            // Resetar formulário
            this.reset();
        });
    }

    // Adicionar classe ao header quando scrollar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.cabecalho');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});

// Funções globais
function abrirWhatsApp() {
    window.open('https://wa.me/5551992379901', '_blank');
}

function abrirModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    
    modal.style.display = 'block';
    modalImg.src = src;
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}