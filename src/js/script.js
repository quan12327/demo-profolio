$(window).scroll(function(){
    if($(window).scrollTop()){
        $("navbar").addClass("white");
    }
    else{
        $("navbar").remove("white");
    }
})