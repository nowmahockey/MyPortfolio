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


//メインビジュアルタイトル〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜ーーー
 // function([string1, string2],target id,[color1,color2])
consoleText(['Kon Masataka', 'Portforio', 'Made with Love.'], 'text',['black','black','black']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
