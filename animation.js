let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.intro' ,
        start: "top bottom" ,
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
});

t1.from(".my-selfie" , { x : 200 , opacity : 0 , duration: 1.5})
    .from(".content" , {y:300 , opacity: 0 , duration: 1} , "-=1")

