<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <title>*</title>
        <script src="http://cdn.staticfile.org/jquery/2.0.0/jquery.min.js"></script>
        <script>
            $(function(){
            /**/
                if($('.AC-MENU_Btn').length!=0&&!$($('.container-label.baidu input')[0]).is(':checked')){
                    console.log('开启了AC-baidu脚本')
                                $('body').prepend($('<style>').prepend('#page{position: relative;}#b_content #b_results>li:not(#mfa_root) {background-color: #ffffffc2;}#rso .g, .vk_c{background-color: #fff9;}.container_s #content_right{width: 223px;}#wrapper #rs, #wrapper #content_left .result, #wrapper #content_left .c-container{background-color: #fff9;}'))
                }else{
                    console.log('未开启AC-baidu脚本')
                    $('body').prepend('<style>#page{position: relative;}#b_results>li{background-color: #ffffff94;}#b_context .b_ans, #b_context #wpc_ag{background-color: #ffffff94;}.container_s #content_right{width: 223px;}.wrapper_new #content_left{background: #f0f8ff94;padding-left: 35px; margin-left: 140px; width: 585px;}</style>')
                    $('#res').attr({style:'background: #ffffff94;width: 680px;padding: 10px 35px;margin-top: 10px;'})
                    $('#main').attr({style:'width: 680px;padding: 10px 35px;margin-top: 10px;margin-bottom: 20px;'})
                }
                $('.container-label.baidu input').on('click',function(){
                    console.log('AC-baidu脚本切换')
                    if(this.value == '0'){
                        console.log('AC-baidu脚本切换为原始模式')
                        $('#content_left').attr({style:' background: #ffffff94; margin-left: 140px; width: 585px; padding-left: 35px;'})
                    }else{
                        console.log('非原始模式')
                        $('#content_left').removeAttr('style')
                    }
                })
            })
            $(function(){
                var Anime=[
                    'https://upyun.calendarli.com/Anime/063f89738882f07b08aaebaeaff23510.jpg',
                    'https://upyun.calendarli.com/Anime/1fa0ed09fe6ef8a09b114ba40b8c22f3.jpg',
                    'https://upyun.calendarli.com/Anime/5bc35d75b52b852d12544b7d8c1b88c6.jpg',
                    'https://upyun.calendarli.com/Anime/11fed6086ab5ee4cd24989a2a816db77.jpg',
                    'https://upyun.calendarli.com/Anime/2261e9ba9daeccc5d2e9d235bb5e20b1.jpg',
                    'https://upyun.calendarli.com/Anime/44ffdc1e475e5374f7d080b2e1617114.jpg',
                    'https://upyun.calendarli.com/Anime/55c024df52c2d98ec186bcec889b1fab.jpg',
                    'https://upyun.calendarli.com/Anime/773186d9b3b7072964573fbeb91c4a5c.jpg',
                    'https://upyun.calendarli.com/Anime/84627ff4644ee9bb3838f43bd1cf808e.jpeg',
                    'https://upyun.calendarli.com/Anime/97df6b36ec9e6c924f9075a40452fe26.jpg',
                    'https://upyun.calendarli.com/Anime/acf57c383d119b6cc8d92b1a77d47878.jpg',
                    'https://upyun.calendarli.com/Anime/b2e4b4e787b190a18522154564c5d510.jpg',
                    'https://upyun.calendarli.com/Anime/cc31ab7a6d4ad922b32313cb7297862c.jpeg',
                    'https://upyun.calendarli.com/Anime/dfeb5880917bec18684be6f49cf86d70.jpg',
                    'https://upyun.calendarli.com/Anime/e19b3d082f6a6274464d5f886736ea37.jpg',
                    'https://upyun.calendarli.com/Anime/e28f681cec0e89ec135333fa9e813242.jpg',
                    'https://upyun.calendarli.com/Anime/f9c6ee1426014073aeb190c5e83a1ba1.jpg'
                ]
                var landscape=[
                    'https://upyun.calendarli.com/landscape/150909a21756042f3a38e0db3d47c2c5.jpg',
                    'https://upyun.calendarli.com/landscape/4940e494d71f9400a85f63288cefe8de.jpeg',
                    'https://upyun.calendarli.com/landscape/d5603970a58c68cb2e758f8e4924487a.jpeg',
                    'https://upyun.calendarli.com/landscape/db27f9d0e53d7571926c05faf63ce9a0.jpg'
                ]

                // 设置cookie值
                function setCookie(cname,cvalue,exdays){
                    var d = new Date();
                    d.setTime(d.getTime()+(exdays*24*60*60*1000));
                    var expires = "expires="+d.toGMTString();
                    document.cookie = cname + "=" + cvalue + "; " + expires;
                }

                //读取cookie值
                function getCookie(cname){
                    var name = cname + "=";
                    var ca = document.cookie.split(';');
                    for(var i=0; i<ca.length; i++) {
                        var c = ca[i].trim();
                        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
                    }
                    return "";
                }
                var honeySwitch = {};
                honeySwitch.themeColor = "rgb(100, 189, 99)";
                honeySwitch.init = function() {
                    var s = "<span class='slider'></span>";
                    $("[class^=switch]").append(s);
                    $("[class^=switch]").on('click',function() {
                        if ($(this).hasClass("switch-on wifi")) {
                            $(this).removeClass("switch-on wifi").addClass("switch-off wifi");
                            setCookie($(this).data('cookiename'),'switch-off wifi','31');
                        } else {
                            $(this).removeClass("switch-off wifi").addClass("switch-on wifi");
                            setCookie($(this).data('cookiename'),'switch-no wifi','31');
                        }
                    });
                };
                $(function() {
                    honeySwitch.init();
                });
                var div_css={
                'css':[{
                    CssName:'body',
                    CssVal:'background-position-x: center;background-attachment: fixed;background-size: cover;'
                },{
                    CssName:'[class|=switch]',
                    CssVal:'position: relative;display: inline-block;width: 35px;height: 15px;border-radius: 16px;line-height: 32px;-webkit-tap-highlight-color:rgba(255,255,255,0);'
                },{
                    CssName:'.switch-on',
                    CssVal:'border: 1px solid white;transition: border 0.4s, box-shadow 0.2s, background-color 1.2s;cursor: pointer;border-color: rgb(100, 189, 99);box-shadow: rgb(100, 189, 99) 0px 0px 0px 16px inset;background-color: rgb(100, 189, 99);'
                },{
                    CssName:'.slider',
                    CssVal:'position: absolute;display: inline-block;width: 15px;height: 15px;background: white;box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);border-radius: 50%;left: 0;top: 0;'
                },{
                    CssName:'.switch-on .slider',
                    CssVal:'left: 20px;transition: background-color 0.4s, left 0.2s;'
                },{
                    CssName:'.switch-off',
                    CssVal:'border: 1px solid #dfdfdf;transition: border 0.4s, box-shadow 0.4s;cursor: pointer;border-color: rgb(223, 223, 223);box-shadow: rgb(223, 223, 223) 0px 0px 0px 0px inset;background-color: rgb(255, 255, 255);'
                },{
                    CssName:'.switch-off .slider',
                    CssVal:'left: 0;transition: background-color 0.4s, left 0.2s;'
                },{
                    CssName:'.switch-on.switch-disabled',
                    CssVal:'opacity:.5;cursor:auto;'
                },{
                    CssName:'.switch-off.switch-disabled',
                    CssVal:'background-color:#F0F0F0 !important;cursor:auto;'
                },{
                    CssName:'.calendar_div_left',
                    CssVal:'left: 0px;z-index: 99;width: 100px;height: 60px;background: #ffffff69;line-height: 29px;border-bottom-right-radius: 15px;border-top-right-radius: 15px;'
                },{
                    CssName:'.calendar_switch',
                    CssVal:'margin-top: 10px;'
                },{
                    CssName:'.calendar_previous',
                    CssVal:'margin-top: 10px;background:none;margin-bottom: 20px;'
                },{
                    CssName:'.calendar_previous>div',
                    CssVal:'cursor: pointer;width: 50px;height: 30px;background: #ffffff69;border-bottom-right-radius: 15px;border-top-right-radius: 15px;line-height: 30px;margin-bottom: 10px;'
                },{
                    CssName:'.calendar_Anime',
                    CssVal:'margin-top: 10px;'
                },{
                    CssName:'.calendar_Anime>div',
                    CssVal:'cursor: pointer;'
                },{
                    CssName:'.calendar_op',
                    CssVal:'margin-top: 10px;'
                },{
                    CssName:'.calendar_op>p',
                    CssVal:'font-size: 10px;line-height: 20px;margin: 0;'
                },{
                    CssName:'.calendar_op>input',
                    CssVal:'width:35px'
                },{
                    CssName:'.calendar_op>div',
                    CssVal:'float: right;margin-right: 12px;cursor: pointer;'
                },{
                    CssName:'.nums_text,.search_tool_tf,.c-gap-left,.num-tips',
                    CssVal:'color: #477553;'
                },{
                    CssName:'.fk strong,#page strong,.page-inner a',
                    CssVal:'background: none;'
                },{
                    CssName:'#page strong .pc',
                    CssVal:'background: aliceblue;'
                },{
                    CssName:'.s_tab_inner',
                    CssVal:'padding-top: 12px;'
                },{
                    CssName:'div#b_content',
                    CssVal:'position: relative;'
                },{
                    CssName:'#appbar,.yg51vc,#hdtb',
                    CssVal:'background: #ffffff9e;'
                },{
                    CssName:'.Xeztj ,.YSlUOe,.MGqjK',
                    CssVal:'background: #ffffff9e;'
                },{
                    CssName:'.Nxb87',
                    CssVal:'padding-top: 10px;'
                },{
                    CssName:'.Masklayer',
                    CssVal:'background: #fff;width: 10090px;height: 10080px;z-index: 0;position: fixed;top: 0px;left: 0px;'
                },{
                    CssName:'div#s_tab',
                    CssVal:'position: relative;'
                },{
                    CssName:'#page a, #page strong',
                    CssVal:'background: none;'
                },{
                    CssName:'.calendar_text_AD',
                    CssVal:'position: relative;top: -3px;font-size: 10px;'
                },{
                    CssName:'#calendar_div_left',
                    CssVal:'position: fixed;left:-100px;margin-top: 170px;z-index: 99;width: 131px;transition: left 0.3s;'
                },{
                    CssName:'#calendar_la',
                    CssVal:'width: 20px; background: #459be6d9; position: absolute; height: 40%; top: 34%; right: 0px; line-height: 116px; color: #fff;padding-left: 10px;opacity: 0.7;transition: opacity 0.3s;'
                },{
                    CssName:'.calendar_div_left.calendar_switch p',
                    CssVal:'display: inline;'
                }
                ]}
                /*
                *ans(css)
                *css:用来储存css样式的JSON数据
                */
                function ans(css){
                var len=css["css"].length
                var styCss='';
                for(var i=0;i<=len-1;i++){
                    styCss=styCss + css["css"][i]['CssName']+'{'+css["css"][i]['CssVal']+'}'
                }
                return styCss
            }
                function a(arr,op,switchArry){
                    // 图片加载函数
                    var obj=new Image();
                    obj.src=arr;
                    obj.onload=function(){
                        $('body').attr({style:'background-image:url('+this.src+');'})
                        $('#optext')[0].value=op
                        $('.Masklayer').attr({style:'opacity:'+op+';'})
                        for(var i in switchArry){
                            var adww=$('.wifi')[i].className
                            adww!=switchArry[i]?$('.wifi')[i].click():'';
                            console.log('cookie'+i+':'+switchArry[i])
                        }
                        /*
                        *t(name,fun)
                        *name:开关存在cookie里面的name
                        *fun：当开关打开时执行的语句 function(){}
                        */
                        function t(name,fun){if(name=="switch-no wifi"){fun()}}

                        t(switchArry[0],function(){
                            //清除右侧推荐栏
                            console.log('清除右侧推荐栏')
                            $('#content_right').remove()
                        })
                        t(switchArry[1],function(){
                            //清除Google广告
                            console.log('清除Google广告')
                            $('#bottomads,#taw').remove()
                        })
                    }
                }
                //页面加载检测cookie
                function checkCookie(){
                    console.log('开始执行')
                    var username=getCookie("PicturesGrouping");
                    var uservalue=getCookie("PictureTheSubscript");
                    var opa=getCookie('opacity')
                    var Cache_lm=getCookie('Cache_lm')
                    var Cache_Google_AD=getCookie('Cache_Google_AD')
                    if (username!=""&&uservalue!=""&&opa!=''&&Cache_lm!=''){
                        //加载图片
                        console.log(opa)
                        switchArry=[Cache_Google_AD,Cache_lm]
                        username=='Anime'?a(Anime[uservalue],opa,switchArry):a(landscape[uservalue],opa,Cache_lm);
                    }else{
                        //初始化cookie...
                        console.log('开始初始化..')
                        setCookie('PictureTheSubscript','0','31');
                        setCookie('PicturesGrouping','Anime','31')
                        setCookie('opacity','0.6','31')
                        setCookie('Cache_lm','switch-off wifi','31')
                        setCookie('Cache_Google_AD','switch-off wifi','31')
                        console.log('初始化完成')
                        //初始化完成
                        checkCookie();
                    }
                }
                // 设置遮罩层
                $('body').prepend($('<div id="calendar_div_left">')).prepend('<div class="Masklayer"></div>')
                $('#calendar_div_left').prepend($('<div id=calendar_la>>')).prepend(
                            $('<div class="calendar_div_left calendar_switch">').prepend(
                                $('<p><span class="switch-off wifi" data-cookiename="Cache_lm">').append($('<span class="calendar_text_AD">').html('删除侧栏')))).prepend(
                        '<div class="calendar_div_left calendar_op"><p>背景透明度</p><input type="text" title="背景透明度0-1"  id="optext" /><div id="opbc" title="遮罩层透明度0-1">保存</div></div>').prepend(
                    '<div class="calendar_div_left calendar_Anime"><div id="Anime">动漫</div><div id="landscape">自然风景</div></div>').prepend(
                    '<div class="calendar_div_left calendar_previous"><div id="previous">上一张</div><div id="next">下一张</div></div>').prepend($('<style>').html(ans(div_css)))
                $('.calendar_switch').prepend($('<p><span class="switch-off wifi" data-cookiename="Cache_Google_AD">').append($('<span class="calendar_text_AD">').html('清除广告')))
                
                //百度
                $('#rs,.fk i').remove()
                //必应
                $('#b_results>li.b_ad').remove()
                //Google
                $('#botstuff').remove()
                checkCookie()
                $('#calendar_div_left').hover(function(){
                    $(this).attr({style:'left:0px'})
                    $('#calendar_la').attr({style:'opacity: 0;'})
                },function(){
                    $(this).removeAttr('style')
                    $('#calendar_la').removeAttr('style')
                })
                // 点击上一张的函数
                $('#previous').on('click',function(){
                    //读取下标并转为数字类型
                var PictureTheSubscript=Number(getCookie('PictureTheSubscript'))
                    //读取分组
                var PicturesGrouping=getCookie("PicturesGrouping");
                var pi=PictureTheSubscript-1
                    //读取当前分组的数组下标
                    PicturesGrouping=='Anime'?len=Anime.length-1:len=landscape.length-1;
                    // 当下标为0并点击上一张时回到数组的最后一位
                    if(0<PictureTheSubscript){
                        setCookie('PictureTheSubscript',pi,'31');
                        checkCookie();
                    }else{
                        setCookie('PictureTheSubscript',len,'31');
                        checkCookie();
                    }
                })
                // 点击下一张的函数
                $('#next').on('click',function(){
                var PictureTheSubscript=Number(getCookie('PictureTheSubscript'))
                var PicturesGrouping=getCookie("PicturesGrouping");
                var pi=PictureTheSubscript+1;
                    // 获取数组长度
                var Animelen=Anime.length;
                var landscapelen=landscape.length;
                    // 获取当前数组下标
                    PicturesGrouping=='Anime'?len=Anime.length-1:len=landscape.length-1;
                    if(PictureTheSubscript<len){
                        setCookie('PictureTheSubscript',pi,'31');
                        checkCookie();
                    }else{
                        setCookie('PictureTheSubscript',0,'31');
                        checkCookie();
                    }
                })
                $('#Anime').on('click',function(){
                    setCookie('PictureTheSubscript','0','31');
                    setCookie('PicturesGrouping','Anime','31')
                    checkCookie();
                })
                $('#landscape').on('click',function(){
                    setCookie('PictureTheSubscript','0','31');
                    setCookie('PicturesGrouping','landscape','31')
                    checkCookie();
                })
                $('#opbc').on('click',function(){
                    var al=$('#optext')[0].value;
                    if(al>1||al<0){
                        console.log('输入错误')
                        alert('请输入0-1之间的透明度数值')
                    }else{
                        setCookie('opacity',al,'31')
                        checkCookie();
                    }
                })
            })
        </script>
    </head>
<body>
</body>
</html>
