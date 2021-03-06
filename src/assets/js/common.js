// スムーススクロール
// 参考
// http://kyasper.com/jquery-tips/
// エラー対応 https://goo.gl/yai3jM
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top - 50;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// 各ページのMVの高さを出す関数
function getElementHeight() {
  var mv_height = $(".js-Mv").height();
  return mv_height;
}
// console.log(getElementHeight());

// 追従ヘッダー
$(function() {

  var header  = $("#js-Header"),
  header_height = header.height(),
  windowWidth = $(window).width();

  // console.log(windowWidth);

  // スクロールしたら発動
  $(window).on("scroll", function() {

    // スクロール量を変数に格納
    var current_sc_top = $(this).scrollTop();

    // console.log(current_sc_top);
    // console.log(header_height);

    if (windowWidth > 1200) {
      if (getElementHeight() < current_sc_top) {
        header.addClass('fixed');
        header.removeClass('sub-Fixed');
      } else if (getElementHeight() / 2 < current_sc_top) {
        header.addClass('sub-Fixed');
        header.removeClass('fixed');
      } else {
        header.removeClass('fixed');
        header.removeClass('sub-Fixed');
      }
    }

    if (windowWidth < 667) {
      if (current_sc_top < 59) {
        header.addClass('top');
        header.removeClass('bottom');
      } else {
        header.removeClass('top');
        header.addClass('bottom');
      }

    }
  });
});

// Navボタン 演出
$(function() {
  var nav_btn = $("#js-Header_Nav"),
      nav = $(".js-Nav"),
      nav_img = $(".js-Nav_Img"),
      header = $("#js-Header"),
      header_Bg = $("#js-Nav_Bg");

  nav_btn.on('click', function() {
    $(this).toggleClass('clicked');
    nav_img.toggleClass('clicked');
    header_Bg.toggleClass('clicked');

    nav.toggleClass('clicked');

    if(nav.hasClass('clicked')){
      TweenMax.to(nav, 0.1, {
        top: 0
      });
    } else {
      TweenMax.to(nav, 0.2, {
        top: "-150%"
      });
    }
  });
});

// Nav アコーディオン（Tablet ~ SP）
$(function()  {
  var nav_ac = $(".js-Nav_Ac");

  nav_ac.on('click', function() {
    // console.log("test");
    $(this).next().slideToggle();
    $(this).siblings('.st-Nav_Right_Toggle').toggleClass("active");
  });
});

// テキストを1文字ずつフェードインさせる
// 参考：https://qiita.com/The_Shimon/items/7ff63e61646888c8dcf3
$(function() {
  // jQueryで特定のIDやClassが存在する場合のみ処理する
  // 参考：https://goo.gl/zEVdv1
  if($("#js-Title-Loading_Top").length){
    var $allMsg = $('#js-Title-Loading_Top');
    var $wordList = $('#js-Title-Loading_Top').html().split("");
    $('#js-Title-Loading_Top').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 120);
        newEL.delay(300).animate({ opacity: 1 }, 800);
    });
  }
});

// テキストを1文字ずつフェードインさせる
// 参考：https://qiita.com/The_Shimon/items/7ff63e61646888c8dcf3
$(function() {
  // jQueryで特定のIDやClassが存在する場合のみ処理する
  // 参考：https://goo.gl/zEVdv1
  if($("#js-Title-Loading_Btm").length){
    var $allMsg = $('#js-Title-Loading_Btm');
    var $wordList = $('#js-Title-Loading_Btm').html().split("");
    $('#js-Title-Loading_Btm').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 120);
        newEL.delay(1300).animate({ opacity: 1 }, 1000);
    });
  }
});

// 参考：https://github.com/shikakun/tips/issues/61
$(function() {
  $("#js-Loading_Bg").delay(6000).queue(function() {
    $(this).css('display', 'none');
  });
});

// TOPページにだけ、ローディングアニメーション後にheaderを下ろす用
// SP（幅667以下）は実行しない
// 参考：https://github.com/shikakun/tips/issues/61
$(function() {
  var header  = $("#js-Header"),
  windowWidth = $(window).width();

  if (windowWidth > 667) {

    if(location.pathname == "/recruit.html") {
      header.addClass('up');

      header.delay(8000).queue(function() {
        $(this).removeClass('up').dequeue();
      });
    };

    if(location.pathname == "/") {
      header.addClass('up');

      header.delay(8000).queue(function() {
        $(this).removeClass('up').dequeue();
      });
    };
  }

});

// iOS safari の戻る/進むボタンと bfcache について
// persisted という真偽値プロパティを使用してリロードなどの処理を入れる
// 参考：https://qiita.com/kyaido/items/5cf9482146b945a4bf67
window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload();
  }
};

// プラグインなしでページ遷移時にフェードイン・アウトさせる方法
// 参考：https://digipress.digi-state.com/tech/page-transition-effect-how-to/
$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([href^="/"]):not([href^="recruit.html"]):not([target])').on('click', function(e){
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
      setTimeout(function(){
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 600);
    }
    return false;
  });
});

// プラグインなしでページ遷移時にフェードイン・アウトさせる方法
// 参考：https://digipress.digi-state.com/tech/page-transition-effect-how-to/
$(window).on('load', function(){
  $('body').removeClass('fadeout');

  $('body').delay(3000).queue(function() {
    $('body').removeClass('fadeout').dequeue();
  });
});

// プラグインなしでページ遷移時にフェードイン・アウトさせる方法
// 参考：https://digipress.digi-state.com/tech/page-transition-effect-how-to/
$(function() {
  $('body').delay(3000).queue(function() {
    $('body').removeClass('fadeout').dequeue();
  });
});
