window.addEventListener( "scroll" ,function(){

  let scroll = window.pageYOffset;
  
  if( scroll > 3000 ){
    document.body.style.backgroundColor = "#35DDCA";
    document.getElementById("menu-bar").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("icon-share").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-facebook").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-twitter").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-github").style.backgroundColor = "rgb(253 253 253 / 30%)";
  }else if( scroll > 2250 ){
    document.body.style.backgroundColor = "#EEEEEE";
    document.getElementById("menu-bar").style.backgroundColor = "black";
    document.getElementById("icon-share").style.backgroundColor = "rgba(0 0 0 / 40%)";
    document.getElementById("icon-facebook").style.backgroundColor = "rgba(0 0 0 / 40%)";
    document.getElementById("icon-twitter").style.backgroundColor = "rgba(0 0 0 / 40%)";
    document.getElementById("icon-github").style.backgroundColor = "rgba(0 0 0 / 40%)";
  }else if( scroll > 1440 ){
    document.body.style.backgroundColor = "#FFA866";
    document.getElementById("menu-bar").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("icon-share").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-facebook").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-twitter").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-github").style.backgroundColor = "rgb(253 253 253 / 30%)";
  }else if( scroll > 650 ){
    document.body.style.backgroundColor = "#005FFF";
    document.getElementById("menu-bar").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("icon-share").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-facebook").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-twitter").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-github").style.backgroundColor = "rgb(253 253 253 / 30%)";
  }else{
    document.body.style.backgroundColor = "#CC66FF";
    document.getElementById("menu-bar").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("icon-share").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-facebook").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-twitter").style.backgroundColor = "rgb(253 253 253 / 30%)";
    document.getElementById("icon-github").style.backgroundColor = "rgb(253 253 253 / 30%)";
  }
})


window.onscroll = onScroll;
function onScroll() {
    var removeActiveClass = function (elements) {
        for (var i = 0; i < elements.length; ++i) {
            elements[i].classList.remove("active");
        }
    }
    var anchors = document.querySelectorAll("#menu-center a");
    var previousRefElement = null;
    for (var i = 0; i < anchors.length; ++i) {
        var currentRefElement = document.getElementById(anchors[i].getAttribute("href").substring(1));
        var currentRefElementTop = currentRefElement.getBoundingClientRect().top;
        if (currentRefElementTop <= 0) {
            previousRefElement = anchors[i];
            if (i == anchors.length - 1) {
                removeActiveClass(anchors);
                anchors[i].classList.add("active");
            }
        } else {
            removeActiveClass(anchors);
            previousRefElement.classList.add("active");
            break;
        }
    }
}

