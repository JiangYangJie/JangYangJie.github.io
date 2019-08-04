$(function(){

var img_flag=1;

setInterval(showimg,5000); //跟换图片 5s


$(".header_name").hover(function(){
    $(".header_name").css("font-size","60px");
},function(){
    $(".header_name").css("font-size","50px");
}
)

$(".header_blog").hover(function(){
    $(".header_blog").css("background","red");
},function(){
    $(".header_blog").css("background","rgb(123, 255, 0)");
}
)

function showimg(){
    switch(img_flag){
        case 1:
            $("#Img").attr("src","../img/Img1.jpg");
            $("#img_text").text("唱");
            img_flag++;
            break;
        case 2:
            $("#Img").attr("src","../img/Img2.jpg");
            $("#img_text").text("跳");
            img_flag++;
            break;
        case 3:
            $("#Img").attr("src","../img/Img3.jpg");
            $("#img_text").text("RAP");
            img_flag=1;
            break;  
        default:
            img_flag=1;
            break;
    }
}
$("#qq").hover(function(){
    $("#test1").attr("src","../img/1.jpg").css("display","block");
},function(){
    $("#test1").css("display","none");
}
)
$("#wechat").hover(function(){
    $("#test1").attr("src","../img/2.jpg").css("display","block");
},function(){
    $("#test1").css("display","none");
}
)
})