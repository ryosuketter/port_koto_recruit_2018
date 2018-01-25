var $counter = 2;

$(function circle() {

  var $content = $('#js-Circle_Wrapper'),
  $charts = $content.find('#js-Circle_Chart'),
  $dots = $content.find('#js-Circle_Dots span'),
  $Bg_Img01 = $("#js-Bg_Img01"),
  $Bg_Img02 = $("#js-Bg_Img02"),
  $Bg_Img03 = $("#js-Bg_Img03");

  // 円チャートごとの処理
  $charts.each(function(){
    var $chart = $(this),
    // 「マスク」を保存し、角度 0 を指定
    $circleLeft = $chart.find('.left .top-Circle_MaskInner')
    .css({ transform: 'rotate(0)' }),
    $circleRight = $chart.find('.right .top-Circle_MaskInner')
    .css({ transform: 'rotate(0)' }),

    // パーセンテージ値を入力
    percentData = 100;

    // 角度のアニメーション
    $({ percent: 0 }).delay(200).animate({ percent: percentData }, {
      duration: 4100,
      progress: function () {
        var now = this.percent,
        deg = now * 360 / 100,
        degRight = Math.min(Math.max(deg, 0), 180),
        degLeft  = Math.min(Math.max(deg - 180, 0), 180);
        $circleRight.css({ transform: 'rotate(' + degRight + 'deg)' });
        $circleLeft.css({ transform: 'rotate(' + degLeft + 'deg)' });
      }
    });

    if ($dots.hasClass('active')) {
      $dots.removeClass('active');
    }

    $dots.eq($counter).toggleClass('active');

    if ($counter == 0) {
      $Bg_Img01.addClass('show').css({'z-index':'3'});
      $Bg_Img02.removeClass('show').css({'z-index':'2'});
      $Bg_Img03.removeClass('show').css({'z-index':'1'});
    } else if ($counter == 1) {
      $Bg_Img01.removeClass('show').css({'z-index':'1'});
      $Bg_Img02.addClass('show').css({'z-index':'3'});
      $Bg_Img03.removeClass('show').css({'z-index':'2'});
    } else if ($counter == 2) {
      $Bg_Img01.removeClass('show').css({'z-index':'2'});
      $Bg_Img02.removeClass('show').css({'z-index':'1'});
      $Bg_Img03.addClass('show').css({'z-index':'3'});
    }
  });

  if ($counter < 2) {
    $counter++;
  } else {
    $counter = 0;
  }

  var id = setTimeout(function(){
    circle();
  }, 5000);

});
