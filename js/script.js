$(document).ready(function(){
    $('.content .visual .visualSilder').slick({
        autoplay: true
    });

    $('header .icon1.iconBox').click(function(){
        $('header .icon1.iconBox .fas').toggle()
    })

    $('.popHead ul li').click(function(){
        $('.popHead ul li').css('background-color', 'white').css('color', 'black')
        $(this).css('background-color', '#1A48C4').css('color', 'white')

        let thisClass = '.' + $(this).attr('class')
        
        $('.popContent').css('display', 'none')
        $(thisClass).css('display', 'block')
    })

    $('.content .mainPageChart').click(function(){
        window.location.href = './sub_page.html'
    })

    $("header #menuChk").click( function(){
            $('header .menu').toggle();
            $('header .searchBar').toggle();
            $('header .footer_menu').toggle();

            /* 로그인, 검색 아이콘 토글 */
            $('header .icon2 span').toggle();
            $('header .icon2 .fa-search').toggle();

            $('.visual').toggle()
            $('.chart').toggle()
            $('.news').toggle()
            $('.video').toggle()
            $('.pop').toggle()
            $('.pop').toggle()
            $('footer.footer').toggle()

            $('.content').toggle()
    });

    /* 1등 곡 정보 버튼 (stats, news, share) 기능 */
    $('.no1data .dataMenu div').click(function(){
        $('.no1data .dataMenu .selectMenu').removeClass('selectMenu');
        $(this).addClass('selectMenu')

        $('.no1data .selected').removeClass('selected')

        let eventBtnName = $(this).prop('className')

        if (eventBtnName == 'statM selectMenu'){
            $('.no1data .dataStats').addClass('selected')
        }
        else if (eventBtnName == 'newsM selectMenu'){
            $('.no1data .dataNews').addClass('selected')
        }
        else if (eventBtnName == 'shareM selectMenu'){
            $('.no1data .dataShare').addClass('selected')
        }

    });

    $('header .icon1.iconBox').click(function(){
        $('header .icon1.iconBox .fas').toggle()
    })

    $('ul.chartSong').click(function(){
        let eventBox = $(this).next('.dropRow')
        let plusBtn = $(this).find('.viewMoreBtn .fa-plus')
        let minusBtn = $(this).find('.viewMoreBtn .fa-minus')

        if (minusBtn.is(':visible')){ /* 박스 열려있으면 */
            eventBox.css('display', 'none') /* 박스 닫기 */
            plusBtn.toggle(); minusBtn.toggle();
            
        } else { /* 박스 닫혀있으면 초기화 하고 진행 */
            $('.dropRow').css('display', 'none') 
            $('.viewMoreBtn .fa-minus').css('display', 'none') 
            $('.viewMoreBtn .fa-plus').css('display', 'block')

            eventBox.css('display', 'block')
            plusBtn.toggle(); minusBtn.toggle();
            
        }
    });



    $('.billboardHot100 .song').click(function(){
        let backImg = $(this).find('img').attr('src')
        $(this).find('.dropCover').css('background-image', 'url(' + backImg + ')');
        $(this).find('.dropCover').css('background-repeat', 'no-repeat');
        $(this).find('.dropCover').css('background-size', 'cover');
        $(this).find('.dropCover').css('background-position', 'center');
        // $(this).find('.dropCover').css('filter', 'blur(5px)');
        $(this).find('.dropCover').find('img').css('filter', 'inherit');
    })
})


