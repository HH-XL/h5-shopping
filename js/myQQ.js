$(function () {
    setTimeout(function () {
        $('.section1').addClass('comein');
    },200);
    $('#fullpage').fullpage({
    //    显示项目符号
        navigation:true,
    //循环滚动
        loopBottom:true,
    //    滑动前
        onLeave: function (index, nextIndex, direction) {
            // 当我们离开第一屏幕的时候，section1 就移除 comein
            $(".section1").removeClass('comein');
            // 如果下一屏幕的的索引号是 1 说明我们要到第一屏幕了 添加 comein
            if(nextIndex == 1) {
                $(".section1").addClass('comein');
            }

            if(nextIndex != 1){
                $('#bg').addClass('rotate');
            }else{
                $('#bg').removeClass('rotate');
            }

        //    第二屏幕
            if(nextIndex == 2){
                //jquery 里面的animate 是不支持transform等
                //jquery 里面的通过css和transition搭配也能基本实现类似animate效果
                $('.p2').css('transform','translateX(-50%) translateY(-50%) translateZ(0px) scale(1)');
            }else{
                $('.p2').css('transform','translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)');
            }
            //    第三屏幕
            if(nextIndex == 3) {
                $(".p3").css("transform", "translateX(0px) translateZ(-50px) rotateX(30deg)");
                $(".title3").css("transform", "translateX(0px) translateZ(0px) rotateX(0deg)");
            }
        //    第四屏幕
            if(nextIndex == 4) {
                $(".p3").css("transform", "translateZ(-200px) rotateX(-45deg)  rotateY(-60deg) translateX(3000px)");
                $(".title3").css("transform", "translateZ(1200px) rotateX(-60deg) ");
                $('.jiandao').css('transform','translateX(0px) translateY(0px) translateZ(0px) rotateY(0deg)');
                $('.jiantou').css('transform','translateX(0px) translateY(0px) translateZ(0px) rotateY(0deg)');
                $('.book').css('transform','translateY(0px) translateZ(0px) rotateY(0deg)');
                $('.wechat').css('transform','translateX(0px) translateY(0px) translateZ(0px) rotateY(0deg)');
                $('.words').css('transform','translateX(-50%) translateY(0px) translateZ(0px) rotateX(0deg)');
            }
        }
    });
});