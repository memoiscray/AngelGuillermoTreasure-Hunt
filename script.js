$(".pg2").hide();
$(".maze").hide();
$(".pg3").hide();
$(".pg4").hide();
$(".pg5").hide();

$(".redB").click(function(){
    $(".pg1").hide();
    $(".pg2").show();
});

$(".bluepic").hover(function(){
    $(".maze").show();
    $(".hover").hide();
});

$(".maze").click(function(){
    $(".pg2").hide();
    $(".pg3").show();
});

$(".answer").click(function(){
    $(".pg3").hide();
    $(".pg4").show();
});


$(".answer2").click(function(){
    $(".pg4").hide();
    $(".pg5").show();
});

$(".w").click(function(){
    $(".pg3").hide();
    $(".pg4").hide();
    $(".pg1").show();
});
/* $(":not(.mazeimg,.pg1,img)").hover(function(){
    $(".pg1").show();
    $(".pg2").hide();
}) ;*/