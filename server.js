

//counter
 
 var t1 = gsap.timeline();

 t1.from(".line h1",
{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5,
    
})
t1.from('.line1-part1, .line h2',
{
    opacity:0,
    onStart: function()
    {
        var h5timer = document.querySelector(".line1-part1 h5");
 var grow =0

setInterval(()=>
{
    if(grow<100)
    {
        grow++
        h5timer.innerHTML = grow++

    }
    else{
        h5timer.innerHTML = grow
    }

},38)

    }
})

t1.to(".line h2",
{
    animationname:"anime",
    opacity:1
})



 t1.to(".loader",
 {
    opacity:0,
    duration:0.4,
    delay:2.9,
 });
 t1.from(".page1",
 {
    y:1600,
    opacity:0,
    duration:0.5,
    delay:0.2,
    ease:power4
 });

 t1.to(".loader",
 {
   display:"none"
 });