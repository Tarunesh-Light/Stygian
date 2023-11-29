import '../src/style.css';

var t1 = gsap.timeline()

t1.from(".title,.product,.catalogue,.template,.contact,.button",{
    y:-100,
    duration:1,
    stagger:0.2
})

t1.from(".firstquote,.secquote,.thirdquote",{
    y:100,
    opacity:0,
    stagger:0.4
})

t1.from("img",{
    scale:0,
    opacity:0,
    stagger:0.3
})

t1.from(".scroll",{
    scale:0,
    opacity:0
})

t1.to(".scroll",{
    y:15,
    repeat: -1,
    duration:0.7,
    yoyo: true
})