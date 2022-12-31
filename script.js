function show() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });





  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
show();

function menuOverlayAni(){
  var full = document.querySelector("#full-screen");
var menu = document.querySelector("#menu");
var nav = document.querySelector("#nav h3");
var navpart2 = document.querySelector("#nav-part2 h3");
var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");
var flag = 0;

menu.addEventListener("click", function () {
  if (flag === 0) {
    full.style.transform = `translateY(0%)`;
    nav.style.color = "#232025"
    navpart2.style.color = "#232025"
    line1.style.backgroundColor = "#000"
    line1.style.transform = `rotate(45deg)`
    line2.style.transform = `rotate(-245deg)`
    line2.style.backgroundColor = "#000"
    line2.style.width = "30px"
    flag = 1;
  } else {
    full.style.transform = `translateY(-100%)`;
    nav.style.color = "#D5CDC4"
    navpart2.style.color = "#D5CDC4"
    line1.style.backgroundColor = "#D5CDC4"
    line1.style.transform = `rotate(0deg)`
    line2.style.transform = `rotate(0deg)`
    line2.style.backgroundColor = "#D5CDC4"
    line2.style.width = "20px"


    flag = 0;

  }
})
}
menuOverlayAni();

function FirstPageAni(){
  gsap.from("#main-text", {
    opacity: 0,
    duration: 0.1,
    OnStart: function () {
      $('#main-text').textillate({ in: { effect: 'fadeInUp' } });
    }
  })
  gsap.from("#sub1-text h3", {
    opacity: 0,
    duration: 2,
    OnStart: function () {
      $('#sub1-text h3').textillate({
        in: {
          effect: 'fadeInUpBig',
          sync: true,
          
        }
      });
  
    }
  })
  gsap.from("#sub2-text h3", {
    opacity: 0,
    duration: 2,
    OnStart: function () {
      $('#sub2-text h3').textillate({
        in: {
          effect: 'fadeInUpBig',
          sync: true,
  
        }
      });
    }
  })
  gsap.from("#page1-img", {
    y: "10%",
    duration: 1,
  })
  
}
FirstPageAni();

function AnimationMain(){
  var tl = gsap.timeline();
  tl.
  to("#page1-img",{
    width:"100%",
    height:"110vh",
    scrollTrigger:{
      trigger:"#page1-img",
      scroller:"#main",
      scrub:true,
      toggleAction:"play pause resume reverse",
    }
  })
  
  .to("#page4 #line1",{
    width:"80vw",
    scrollTrigger:{
      trigger:"#page4 #line1",
      scroller:"#main",
      scrub:true,
      start:"top 90%",
    }
  })
  .from("#content h1",{
    opacity: 0,
    stagger:.09,
    y:30,
    scrollTrigger:{
      trigger:"#content h1",
      scroller:"#main",
      start:"top 60%",
      scrub:true,
      toggleActions:"play pause resume reverse"
    }
  })
  .from("#page5 h1",{
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#page5 h1",
      scroller:"#main",
      toggleActions:"play pause resume reverse",
      start:"top 70%",
      scrub:true,
    }

  })
  
  .from("#transibox #left h2,#transibox #right h4",{
    opacity:0,
    scrollTrigger:{
      trigger:"#transibox #left h2,#transibox #right h4",
      scroller:"#main",
      toggleActions:"play pause resume reverse",
      start:"top 70%",
      scrub:true,
    }
  })
  .from("#smile-box h1,#smile-box h4",{
    opacity:0,
    scrollTrigger:{
      trigger:"#smile-box>h1,#smile-box>h4",
      scroller:"#main",
      scrub:true,
      toggleActions:"play pause resume reverse",
      start:"top 70%",
    }
  })
  .from("#page7 #number>h1",{
    opacity:0,
    scrollTrigger:{
      trigger:"#number>h1",
      scroller:"#main",
      toggleActions:"play pause resume reverse",
      start:"top 80%",
      scrub:true,
    }
  })
  .from("#page8 #text>h1",{
    opacity:0,
    y:50,
    scrollTrigger:{
      trigger:"#page8 #text>h1",
      scroller:"#main",
      toggleActions:"play pause resume reverse",
      start:"top 90%",
      scrub:true,
    }
  })
  .from(".choice>h2",{
    opacity:0,
    y:50,
    scrollTrigger:{
      trigger:".choice>h2",
      scroller:"#main",
      toggleActions:"play pause resume reverse",
      start:"top 90%",
    }
  })
  .from("#one , #two , #three , #four,#five,#six,#seven,#eight",{
    opacity: 0,
    stagger:.09,
    y:30,
    scrollTrigger:{
      trigger:"#one , #two , #three , #four,#five,#six,#seven,#eight",
      scroller:"#main",
      start:"top 90%",
      scrub:true,
      toggleActions:"play pause resume reverse"
    }
  })
}
AnimationMain();

function YesNoAni(){
  var choice = document.querySelectorAll(".choice");
  document.querySelector("#YesNo")
        .addEventListener("mousemove", function (dets) {
            var bndrectvals = document.querySelector("#YesNo").getBoundingClientRect()
            var xVal = dets.clientX - bndrectvals.x;
            var yVal = dets.clientY - bndrectvals.y;

            document.querySelector("#imgHover").style.top = yVal-50 + "px";
            document.querySelector("#imgHover").style.left = xVal-50 + "px";
          })
          
          document.querySelector("#YesNo")
          .addEventListener("mouseleave", function (dets) {
            document.querySelector("#imgHover").style.top = 50 + "%";
            document.querySelector("#imgHover").style.left = 50 + "%";
            
            
        })
}
YesNoAni();


function YesnoAnimation(){
  var choice = document.querySelectorAll(".choice");
  var image = document.querySelectorAll("#imgHover");
  choice.forEach(function(elem){
      elem.addEventListener("mouseenter",function(){
        let img = elem.getAttribute("data-image");
        image.style.backgroundImage = `url(${image})`;
      })
      document.querySelector("#YesNo .choice").addEventListener("mousemove",function(dets){
        image.style.left = `${dets.x}px`;
        image.style.top = `${dets.x}px`;
      })
  })
}
// YesnoAnimation();


