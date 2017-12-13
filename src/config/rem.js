;(function (win,doc){
  var recalc = function (){
    var docEL = doc.documentElement;
    if (!docEL.clientWidth) return;
    docEL.style.fontSize = docEL.clientWidth / 7.5 + 'px';
  }
  if (!doc.addEventListener) return;
  win.addEventListener('resize', recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(window,document);
