//ナビ⇨セクションへ自動スクロール
var Ease = {
  easeInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
}
var duration = 500;
window.addEventListener('DOMContentLoaded', () => {
  var smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
  smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
    smoothScrollTrigger.addEventListener('click', function (e) {
      var href = smoothScrollTrigger.getAttribute('href');
      var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
      var targetElement = document.getElementById(href.replace('#', ''));
      if (targetElement) {
        e.preventDefault();
        e.stopPropagation();
        var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top;
        var startTime = performance.now();
        var loop = function (nowTime) {
          var time = nowTime - startTime;
          var normalizedTime = time / duration;
          if (normalizedTime < 1) {
            window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
            requestAnimationFrame(loop);
          } else {
            window.scrollTo(0, targetPosition);
          }
        }
        requestAnimationFrame(loop);
      }
    });
  });
});

//ページトップ自動スクロール
var ywsa = document.getElementById("pagetop");
var yws_pagetop = function() {
    if (window.pageYOffset > 400) {
        ywsa.classList.add("fixed")
    } else {
        ywsa.classList.remove("fixed")
    }
};
window.addEventListener("load", yws_pagetop);
window.addEventListener("scroll", yws_pagetop);
ywsa.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});
//-- ハンバーガーメニュー --

    $(function(){
      $(".btn-gnavi").on("click", function(){
        var rightVal = 0;
        if($(this).hasClass("open")) {
          rightVal = -300;
          $(this).removeClass("open");
        } else {
          $(this).addClass("open");
        }
        $("#global-navi").stop().animate({
          right: rightVal
        }, 200);
      });
    });
