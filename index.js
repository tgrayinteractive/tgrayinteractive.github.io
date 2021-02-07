console.log("work");
$('body').css({
    height:$('main').width(),
})

var controller = new ScrollMagic.Controller();

var timeline = new TimelineMax();
timeline.add(TweenMax.to('main', 10, {
    "left": '-100%',
})).addLabel("Section_20");

timeline.add(TweenMax.from('.authentic', 10, {
    "opacity": '0',
}));

timeline.add(TweenMax.to('main', 10, {
    "left": '-200%',
})).addLabel("Section_30");;


timeline.add(TweenMax.from('.era', 10, {
    "opacity": '0',
}));

timeline.add(TweenMax.to('main', 10, {
    "left": '-300%',
}));

timeline.add(TweenMax.from('.sk8hi', 10, {
    "opacity": '0',
}));

timeline.add(TweenMax.to('main', 10, {
    "left": '-400%',
}));

timeline.add(TweenMax.from('.oldskool', 10, {
    "opacity": '0',
}));

timeline.add(TweenMax.to('main', 10, {
    "left": '-500%',
}));

var scene00 = new ScrollMagic.Scene({
    duration:'800%'
})
.setTween(timeline) 
scene00.addTo(controller);

$('nav a').click(function(e){
    e.preventDefault();
    var tlstuf = timeline.progress();
    console.log(tlstuf);
   // controller.scrollTo(800);
    
    //timeline.tweenTo("Section_20")
	//---- scene to scroll to is stored in the data attribute scene on each a tag in the html
    //var scene = eval($(this).data('scene'));
    //var scene = scene00;
	//var scrollLoc = scene.scrollOffset() + scene.duration();
	//TweenMax.to(window, 1, {scrollTo:{y: 1000}}); // scrolls to ending of the scene
	$(window).scrollTo('5%', 800);
	//console.log(scrollLoc);
}); 
