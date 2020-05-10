 $(document).ready(()=>{
    $(".list").hide();
    $(".p1").show();
    $(".p2").hide();
    $(".p3").hide();
  //  $(".popup").hide();
$(".collaps1").click(()=>{
    $(".p1").toggle();
    $(".p2").hide();
    $(".p3").hide();
})
$(".collaps2").click(()=>{
    $(".p2").toggle();
    $(".p1").hide();
    $(".p3").hide();
})
$(".collaps3").click(()=>{
    $(".p3").toggle();
    $(".p2").hide();
    $(".p1").hide();

})
$(".demo").click(()=>{
    $(".popup").fadeIn(); 
})
$(".clsoe").click(()=>{
    $(".popup").fadeOut(); 
})
$(".closebutton").click(()=>{
    $(".popup").fadeOut(); 
})
if($(window).width() < 767)
{
    $(".navhide").hide();
    $(".list").show();
    $(".list").click(()=>{
        $(".navhide").toggle();
      //  $(".navbar").height(300);
    })
}

})

 