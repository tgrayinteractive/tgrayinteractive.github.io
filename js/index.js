 
  
var controller = new ScrollMagic.Controller();
var slidesTotal = 7;
var transitionWidth = 100/slidesTotal;

// ====== timeline animation
var horizontalSlide = new TimelineMax()

// ----------- slipon
.to(".slipon", 1,   {
    'opacity':0,
    'rotation':-30,
    x:-20,
})
.addLabel('stage10', '-=1')

// ----------- authentic	
.to("#slideContainer", 1,   {x: '-' + transitionWidth*1 + '%'})
.to(".btn_02", 1,   {'color':'#fff'})
.from(".authentic", 1,   {
    'opacity':0,
    'rotation':-30,
    x:-20,
})
.addLabel('stage20')

// ----------- ERA
.to("#slideContainer", 1,   {x: '-' + transitionWidth*2 + '%'})
.from(".era", 1,   {
    'opacity':0,
    'rotation':-30,
    x:-20,
})
.addLabel('stage30')

// ----------- sk8hi
.to("#slideContainer", 1,   {x: '-' + transitionWidth*3 + '%'})
.from(".sk8hi", 1,   {
    'opacity':0,
    'rotation':-30,
    x:-20,
    
})
.addLabel('stage50')
.to(".sk8hi", 1,   {
    'opacity':0,
    'rotation':-30,
    x:-20,
})
// ----------- oldskool
.to("#slideContainer", 1,   {x: '-' + transitionWidth*4 + '%'})
.from(".oldskool", 1,   {
    'opacity':0,
    'rotation':-30,
    x:-20,
})
.addLabel('stage60')

// ----------- waffle
.to("#slideContainer", 1,   {x: '-' + transitionWidth*5 + '%'})
.from(".waffle", 1,   {
    'opacity':0,
    'rotation':-30,
    x:-20,
})
.addLabel('stage70')
// .to(".waffle", 1,   {
//     'opacity':0
// })
// ----------- customs
.to("#slideContainer", 1,   {x: '-' + transitionWidth*6 + '%'})
.from(".custom", 1,   {
    'opacity':0,
    'rotation':-30,
    x:-20,
})
.addLabel('stage80')
  
// ----------- create scene to pin and link animation
var scene = new ScrollMagic.Scene({
    triggerElement: "main",
    triggerHook: "onLeave",
    duration: 100*slidesTotal+"%"
})
.setPin("main")
.setTween(horizontalSlide)
.addTo(controller);
      
      

// ======= navigation 
  $('nav a').click(function(e){
    e.preventDefault();
    var myStage = $(this).data('stage');
    //console.log("myStage= "+myStage);
    var LabelTime = horizontalSlide.getLabelTime(myStage);
    //console.log("LabelTime= "+LabelTime)
    var slideToNumber = LabelTime*getTCRatio()
    TweenMax.to(window, 1, {scrollTo:{y:slideToNumber}});
});

// gets ratio between the scroll duration and the timeline duration
function getTCRatio(){
    var timelineDuration = horizontalSlide.duration();
    var controllerDuration = scene.duration();
    var ddRatio = controllerDuration/timelineDuration;
    return ddRatio;
}
