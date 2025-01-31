var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        markers: true,
        pin: true
    }
})

tl.to("#circle #bottom img", {
    scale: "1",
    rotate: "-180deg",
    duration: 1,
    stagger: .1,
    ease: Power1
}, "hello")

    .to("#circle #top img", {
        scale: 1,
        duration: 1,
        stagger: .1,
        ease: Power1
    }, "hello")

    .to("#cimg img", {
        scale: "0",
        duration: 1,
        stagger: .1,
        ease: Power1
    }, "hello")

    .to("#cimg h5", {
        opacity: 0,
        stagger: .1,
        ease: Power1
    }, "hello")

    .to("#circle", {
        scale: .6,
        ease: Power1
    }, "hello")

    .to("#smcircle", {
        scale: 0,
        ease: Power1
    }, "hello2")

    
    .to("#circle", {
        scale: 0,
        ease: Power1
    }, "hello2")