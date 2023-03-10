$(document).ready(function(){
    $('.teacher-card-1').mouseenter(function(){
        $('#Bianca').css('color','#FF6108');
        $('.teacher-1-social-acount').slideDown('slow').css('display','flex')
        $('.teacher-1-social-acount').fadeIn('slow');
        

    })
    $('.teacher-card-1').mouseleave(function(){
        $('.teacher-1-social-acount').slideUp('slow');
        $('#Bianca').css('color','#111129')

    })

    $('.teacher-card-2').mouseenter(function(){
        $('.teacher-2-social-acount').slideDown('slow').css('display','flex');
        $('#MitchParker').css('color','#FF6108');
    })

    $('.teacher-card-2').mouseleave(function(){
        $('.teacher-2-social-acount').slideUp('slow')
        $('#MitchParker').css('color','#111129');

    })

    $('.teacher-card-3').mouseenter(function(){
     $('.teacher-3-social-acount').slideDown('slow').css('display','flex');
     $('#SetellaSmith').css('color','#FF6108')


    });

    $('.teacher-card-3').mouseleave(function(){
        $('.teacher-3-social-acount').slideUp('slow')
        $('#SetellaSmith').css('color','#111129');
    });

    $('.teacher-card-4').mouseenter(function(){
     $('.teacher-4-social-acount').slideDown('slow').css('display','flex');
     $('#Monshe').css('color','#FF6108')


    })

    $('.teacher-card-4').mouseleave(function(){
    $('.teacher-4-social-acount').slideUp('slow');
    $('#Monshe').css('color','#111129');


    })
})