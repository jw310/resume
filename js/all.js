($(document).ready(function () {  // 等所有的 HTML 都載入，且 DOM 都以建構完成執行 { } 內容，將所有 function() 放入裡面是常見做法
  //console.log("Hello World!");
  $('.slick').slick({
    dots: true,             //顯示輪播圖片會顯示圓圈
    infinite: true,         //重覆輪播
    slidesToShow: 2,         //輪播顯示個數
    slidesToScroll: 2,      //輪播捲動個數
    autoplay: true,         //autoplay : 自動播放
    speed: 300,
    responsive: [  // RWD
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
  });

  // 點選箭頭圖示回到頂端
  $("#top").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
  // 捲動頁面後，元素淡入效果
  $(window).scroll(function () {
    // 視窗捲動的位置
    var scrollPos = $(window).scrollTop();
    // 視窗的高度
    var windowHeight = $(window).height();

    // console.log(scrollPos, windowHeight);
    $(".animatedJS").each(function () {
      // 取 y 軸座標
      var thisPos = $(this).offset().top;
      // console.log(thisPos);
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
    $(".animatedTop").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
    $(".animatedRight").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos > thisPos) {
        $(this).addClass("fadeRight");
      }
    });
    $(".animatedLeft").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos > thisPos) {
        $(this).addClass("fadeLeft");
      }
    });
  });

  $('.showmenu').on('click', function (e) {
    // 用 on 監聽 .burgar_btn 的點擊功能
    e.preventDefault();
    // 點擊 burgar_btn 時，讓原本的 a 連結效果無效
    $('body').toggleClass('menu-show');
  });

}))();