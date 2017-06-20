/*$(function () {
    /!*$(".nav > li > a").click(function(){
        $(this).addClass("active").parents().siblings().find("a").removeClass("active");
    });*!/

    $(window).scroll(function(){
        var top = $(document).scrollTop();   //设置变量top,表示当前滚动条到顶部的值
        var menu = $("#menu");

        var items = $("#content").find(".item");
        var curId = "";
        items.each(function () {
            var m = $(this);
            var itemsTop = m.offset().top;
            if (top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else {
                return false;
            }
        });
        var curLink = menu.find(".active");
        if (curId && curLink.attr("href") !== curId){
            curLink.removeClass(".active");
            menu.find("[href=" + curId +"]").addClass(".active");
        }
        if (top > 70)                      //当滚动条到顶部的值大于70时，添加类".ce2"到".ce"中
        {
            $(".my-nav").addClass("bg2");
        }
        else                              //当滚动条到顶部的值小于等于70时，把".ce"中的类".ce2"删除
        {
            $(".my-nav").removeClass("bg2");
        }



        /!*var tt = $(window).height();    //设置变量tt,表示当前窗口高度的值
        var num =0;
        for(var i=0;i<5;i++)
        {
            if(top+200 >= i*tt && top+200 <= (i+1)*tt)  //在此处通过判断滚动条到顶部的值和当前窗口高度的关系（当前窗口的n倍 <= top <= 当前窗口的n+1倍）来取得和导航索引值的对应关系
            {
                num=i;
            }
            $(".nav > li > a").removeClass("active").eq(num).addClass("active");     //先删除导航所有的选中状态，在通过上面判断中获得的导航索引值给当前导航加选中样式！
        }*!/

    });

    $("#navon0").click(function(){
        $("html,body").animate({scrollTop:$("#item1").offset().top - 96},600);

    });
    $("#navon1").click(function(){
        $("html,body").animate({scrollTop:$("#item2").offset().top - 96},600);

    });
    $("#navon2").click(function(){
        $("html,body").animate({scrollTop:$("#item3").offset().top - 96},600);
    });
    $("#navon3").click(function(){
        $("html,body").animate({scrollTop:$("#item4").offset().top - 96},600);
    });
    $("#navon4").click(function(){
        $("html,body").animate({scrollTop:$("#item5").offset().top - 96},600);
    });

});*/



$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(document).scrollTop();          //定义变量，获取滚动条的高度
        var menu = $("#menu");                      //定义变量，抓取#menu
        var items = $("#content").find(".item");    //定义变量，查找.item

        var curId = "";                             //定义变量，当前所在的楼层item #id

        if (top > 70)                      //当滚动条到顶部的值大于70时，添加类".ce2"到".ce"中
        {
            $(".my-nav").addClass("bg2");
        }
        else                              //当滚动条到顶部的值小于等于70时，把".ce"中的类".ce2"删除
        {
            $(".my-nav").removeClass("bg2");
        }

        items.each(function(){
            var m = $(this);                        //定义变量，获取当前类
            var itemsTop = m.offset().top;        //定义变量，获取当前类的top偏移量
            if(top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });

        //给相应的楼层设置cur,取消其他楼层的cur
        var curLink = menu.find(".active");
        if( curId && curLink.attr("href") != curId ){
            curLink.removeClass("active");
            menu.find( "[href=" + curId + "]" ).addClass("active");
        }
        // console.log(top);
    });

    $("#navon0").click(function(){
        $("html,body").animate({scrollTop:$("#item1").offset().top - 96},600);

    });
    $("#navon1").click(function(){
        $("html,body").animate({scrollTop:$("#item2").offset().top - 96},600);

    });
    $("#navon2").click(function(){
        $("html,body").animate({scrollTop:$("#item3").offset().top - 96},600);
    });
    $("#navon3,.my-btn").click(function(){
        $("html,body").animate({scrollTop:$("#item4").offset().top - 96},600);
    });
    $("#navon4").click(function(){
        $("html,body").animate({scrollTop:$("#item5").offset().top - 96},600);
    });
});



























