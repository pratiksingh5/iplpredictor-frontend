const tl = new TimelineMax();
let box = document.querySelectorAll('.box')
// console.log(box)

tl.fromTo('#text', 2.2, {
    transform: 'translate(-50%, -50%) translateX(200px)',
    opacity: 1
}, {
        transform: 'translate(-50%, -50%) translateX(0px)',
        opacity: 1,
        ease: Expo.easeInOut
    })
.fromTo('#text', 2.2, {
    transform: 'translate(-50%, -50%) translateX(0px)',
    opacity: 1
}, {
    transform: 'translate(-50%, -50%) translateX(-200px)',
    opacity: 0,
    ease: Expo.easeInOut
})
.fromTo('#black', 2, {
    x: '0%',
    opacity: 1
},
{
    x: '-120%',
    opacity: 0.7,
    ease: Expo.easeInOut,
  
}, '-=1.5')

tl.from('.container>h3',0.5,{
opacity:0,
y:-30,
},'-=1')
tl.from('.container>h6',0.6,{
    opacity:0,
    y:-30,
},'-=0.2')
tl.from('table th',0.5,{
    opacity:0,
    y:-30,
},'-=0.2')



tl.from('table tr',0.8,{
    opacity:0,
    y:-20,
    ease: Expo.easeInOut,
    stagger: 2,
})