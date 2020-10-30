

var anim = gsap.set(".bg-burst", {
  xPercent:-50, yPercent:-50, left:"50%", top:"45%", height:"10px"
})


var anim = gsap.to(".bg-burst", {
  x: "random(400, -400, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
  y: "random(400, -400, 5)",
  height: "auto",
  rotation: "random(0, 10, 3)",
  duration:4,
  ease: "power4.out",
  opacity: 1,
  repeatRefresh:false,
});

// var anim = gsap.to(".bg-burst", {

//   left: "random(300, 0, 5)", 
//   top:"random(-100, -600, 3)", 
//   autoAlpha:0,
//   ease:Power0.easeInOut

// });

// var anim = gsap.fromTo(".bg-burst", 
//   {
//     align:"auto"

//   }, {
//     x: "random(20, 0, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
//     y: "random(-100, -600, 3)",
//     duration:10,
//     ease:"none",
//     opacity: 1,
//     repeat: -1,
//     repeatRefresh:true // gets a new random x and y value on each repeat
//   });


let gsapDropdown = (e, a) => {
    gsap.to(e, {
    opacity: 1,
    duration: 0.3,
    ease: 'power1',
    height: a + 'px',
    repeat: 0,
    });

}

let gsapDropdownUp = (e) => {
  gsap.to(e, {
    opacity: 0,
    duration: 0.3,
    ease: 'power1',
    height: 0 + 'px',
    repeat: 0,
    });

}

let gsapOverlay = () => {
  console.log('overlay change')
  gsap.to(".overlayCustomShortcutMenu", {
    opacity: 1,
    duration: 1,
    repeat: 0
  })
}

let gsapOverlayClose = () => {
  gsap.to(".overlayCustomShortcutMenu", {
    opacity: 0,
    duration: 1,
    repeat: 0
  })
}

let gsapOverlayMDLClose = () => {
  gsap.to(".overlayMarkerDetection", {
    opacity: 0,
    duration: 1,
    repeat: 0
  })
}

let gsapOverlayMDL = () => {
  console.log('overlay change')
  gsap.to(".overlayMarkerDetection", {
    opacity: 1,
    duration: 1,
    repeat: 0
  })
}
