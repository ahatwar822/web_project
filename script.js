function updateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('pinkpart').innerText = now.toLocaleDateString('en-US', options);
}
setInterval(updateTime, 1000);  // Update every second
updateTime();  // Initial call to display date and time immediately

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        markers: true,
        pin: true,
        end:"bottom -250%"
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

    .to("#centerimg h5", {
        opacity: 0,
        stagger: .1,
        ease: Power1
    }, "hello")

    .to("#circle", {
        scale: .6,
        ease: Power1
    }, "hello")

    .to("#overlay>h1#gallery", {
        bottom: "-100%",
        ease: Power1
    }, "hello")

    .to("#gola", {
        top: "50%",
        scale: 2,
        duration: 1,
        ease: Power1
    }, "hello")

    .to("#gola", {
        opacity: 0,
        ease: Power1
    }, "hello2")

    .to("#smcircle", {
        scale: 0,
        ease: Power1
    }, "hello2")


    .to("#circle", {
        scale: 0,
        ease: Power1
    }, "hello2")

    .to("#overlay>h1#pf", {
        rotate: 0,
        bottom: "2%",
        ease: Power1
    }, "hello2")

    .to("#pinkpart", {
        duration: 5,
        top:0,
        ease: Power1
    }, "hello2")

    .to("#pinkpart", {
        top:"-30%",
        duration: 1,
        ease: Power1
    })