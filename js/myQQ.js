$(function () {
    setTimeout(function () {
        $('.section1').addClass('comein');
    },200);
    $('#fullpage').fullpage({
    //    ��ʾ��Ŀ����
        navigation:true,
    //ѭ������
        loopBottom:true,
    //    ����ǰ
        onLeave: function (index, nextIndex, direction) {
            // �������뿪��һ��Ļ��ʱ��section1 ���Ƴ� comein
            $(".section1").removeClass('comein');
            // �����һ��Ļ�ĵ��������� 1 ˵������Ҫ����һ��Ļ�� ��� comein
            if(nextIndex == 1) {
                $(".section1").addClass('comein');
            }

            if(nextIndex != 1){
                $('#bg').addClass('rotate');
            }else{
                $('#bg').removeClass('rotate');
            }

        //    �ڶ���Ļ
            if(nextIndex == 2){
                //jquery �����animate �ǲ�֧��transform��
                //jquery �����ͨ��css��transition����Ҳ�ܻ���ʵ������animateЧ��
                $('.p2').css('transform','translateX(-50%) translateY(-50%) translateZ(0px) scale(1)');
            }else{
                $('.p2').css('transform','translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)');
            }
            //    ������Ļ
            if(nextIndex == 3) {
                $(".p3").css("transform", "translateX(0px) translateZ(-50px) rotateX(30deg)");
                $(".title3").css("transform", "translateX(0px) translateZ(0px) rotateX(0deg)");
            }
        //    ������Ļ
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