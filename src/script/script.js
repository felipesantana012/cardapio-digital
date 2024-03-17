
$(document).ready(function(){

    //botão do menu hamburguer, para mostrar o menu em mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');   
    });


    //botão para ativar o dark
    $('#modoDark').click(function() {
        $('body').toggleClass('modo-dark');
    });


     // Mostrar o botão "voltar ao topo" quando o usuário rolar para baixo
     $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#btnVoltarTopo').fadeIn();
        } else {
            $('#btnVoltarTopo').fadeOut();
        }
    });


     // Rolagem suave para o topo da página quando o botão é clicado
     $('#btnVoltarTopo').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
    

    //função para elementos aparecer apartir do topo da tela
    function revelarElementoTop(seletor) {
        ScrollReveal().reveal(seletor, {
            origin: 'top',
            duration: '2000',
            distance: '20%'
        });
    }

    //percorrer o array com as tags e depois chamar a função
    const seletores = ['#cta','#banner','.shape','.feedback']
    for (const key in seletores) {
        revelarElementoTop(seletores[key]);
    }
   

    //para elementos aparecer apartir do lado esquerdo da tela
    ScrollReveal().reveal('.testimonials_chef', {
        origin:'left',
        duration: '2300',
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin:'left',
        duration: '2300',
        distance: '20%'
    });

    

   
   

});




