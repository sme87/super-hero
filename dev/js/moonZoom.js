import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});


export let moonZoomInTL = gsap.timeline();
moonZoomInTL.fromTo("#moon",{alpha:0, scale:0.25},{alpha:1, duration:4, scale:14, y:"+=1200", x:"+=300",ease:"none"});


export let superheroTL = gsap.timeline();
superheroTL.fromTo("#left-eye",{alpha:0, scale:0},{display: "block", alpha: 1, duration:1, scale:1},"eye")
        .fromTo("#right-eye",{alpha:0, scale:0},{display: "block", alpha: 1, duration:1, scale:1},"eye")
        .to("#moon",{scale:5, duration:3, y:"-=800"})
        .fromTo("#mouth",{alpha:0, scale:0},{display: "block", alpha: 1, duration:0.75, scale:1}, "body")
        .fromTo("#right-arm",{alpha:0, scale:0, rotate:90},{display: "block", alpha: 1, duration:0.5, scale:1, rotate:0}, "body")
        .fromTo("#left-arm",{alpha:0, scale:0, rotate:-90},{display: "block", alpha: 1, duration:0.5, scale:1, rotate:0}, "body")
        .fromTo(".moon-legs",{alpha:0, scale:0, rotate:45},{display: "block", alpha: 1, duration:0.5, scale:1, rotate:0}, "body")
        .to("#space-ship",{duration:4.5, rotate:360, y:"+=2500", scale:0}, "-=4.5")
        .fromTo("#cape",{alpha:0, scale:0, rotate:45},{display: "block", alpha: 1, duration:0.5, scale:1, rotate:0}, "body")
        .to("#moon-tongue",{scaleX:1}, "-=2.5")
        .to("#cape",{scaleX:1.2, scaleY:0.8, duration:1, repeat: -1})
        .to("#moon",{duration:4, ease: "power4.out", y:"-=500", x:"+=500", scale:0}, "-=0.5");