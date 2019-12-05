$(document).ready(function(){  // 等所有的 HTML 都載入，且 DOM 都以建構完成執行 { } 內容，將所有 function() 放入裡面是常見做法
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
          arrows:false,
          infinite: true,
          dots: true,
      }
    },
    {
      breakpoint: 568,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
      }
    }]
  });
 });