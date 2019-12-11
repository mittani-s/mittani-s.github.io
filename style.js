    // スクロールフェードイン
    $(function(){
        $(window).scroll(function (){
            $('.effect-fade').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight){
                    $(this).addClass('effect-scroll');
                }
            });
        });
        jQuery(window).scroll();
    });
    // スクロールスキルバー
    $(function(){
        $(window).scroll(function (){
            $('.progress').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight){
                    $(this).addClass('effect-progress');
                }
            });
        });
        jQuery(window).scroll();
    });
    // モーダルウィンドウ
    $(function(){
        var winScrollTop;       /* js-modal-closeのクリック時にも使用するので、ここで宣言する必要がある */
        $('.js-modal-open').each(function(){
            $(this).on('click',function(){
                winScrollTop = $(window).scrollTop();
                var target = $(this).data('target');
                var modal = document.getElementById(target);
                $( modal ).fadeIn();
                return false;
            });
            $('.js-modal-close').on('click',function(){
                $('.js-modal').fadeOut();
                $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
                return false;
            });
        });
    });
    // スクロールジャンプ
    $(".jump").click(function(){
        var vTag = $(this).attr('id');
        if(vTag == 'home_scroll'){
            var target = "#ABOUT";
        }
        else{
            var target = "#" + $(this).html();
        }
        console.log(target);
        var th = $(target).offset();
        console.log(th);
        var pos = th.top;
        $("html,body").animate({
            scrollTop: pos
        },"slow", "swing");
    });
    // ナビ色付け
    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()){
                $('nav').addClass('bg-dark');
            }
            else{
                $('nav').removeClass('bg-dark');
            }
        })
        jQuery(window).scroll();
    })
// お問い合わせフォームの遷移
    function submitForm(){
        document.myForm.submit();
        document.getElementById('formWrapper').style.display = 'none';
        document.getElementById('thxMessage').style.display = 'block';
    }