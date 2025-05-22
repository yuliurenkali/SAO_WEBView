"use strict";


//---------------------

//粒子
function zparticle(){
	

  var app = {
  
    chars: ['▲','△'],
  
    init: function () {
      app.container = document.createElement('div');
      app.container.className = 'animation-container';
      document.body.appendChild(app.container);
      window.setInterval(app.add, 100);
    },
  
    add: function () {
      var element = document.createElement('h6');
      app.container.appendChild(element);
      app.animate(element);
    },
  
    animate: function (element) {
      var character = app.chars[Math.floor(Math.random() * app.chars.length)];
      var duration = Math.floor(Math.random() * 15) + 1;
      var offset = Math.floor(Math.random() * (100 - duration * 2)) + 3;
      var size = 10 + (15 - duration);
      var rotate = Math.floor(Math.random()*(360-0)+0);
      var rotate2 = Math.floor(Math.random()*(360-0)+0);
      element.style.cssText = 'transform:rotate('+rotate+'deg) rotateX('+rotate2+'deg); '+'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
      element.innerHTML = character;
      window.setTimeout(app.remove, duration * 1000, element);
    },
  
    remove: function (element) {
      element.parentNode.removeChild(element);
    },
  
  };
  
  document.addEventListener('DOMContentLoaded', app.init);
  }
  //----------------------
function zscreen(){
var sentences = new Array 
('Welcome to Sword Art Online');

var timer = 8000;

$(document).ready(function(){

    var total = sentences.length - 1;

    for (var i = 0; i <= total; i++) {

        $('#box').append('<p class="sl" id="textBox'+i+'"></p>');
         
        var max = sentences[i].length - 1;

        for (var j = 0; j <= max; j++) {
            $('#textBox'+i).append('<span style="transition: ' + Math.random()*3 + 's; transition-delay: ' + Math.random() + 's;">' + sentences[i].charAt(j) + '</span>');	 
        };

    }; 

    var maxBox = $('#box > p').length;
    var r = 0;

    $('#textBox' + r).addClass('active');

    setInterval(function(){ 

        $('#textBox' + r).removeClass('active');

        r++;

        if (r == maxBox) {
            r = 0;
        }
   
        setTimeout(function(){ 
            $('#textBox' + r).addClass('active');
        }, 2000);

    }, timer);

});
}