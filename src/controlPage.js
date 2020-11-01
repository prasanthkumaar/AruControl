document.addEventListener('click', clickHandler, false);

/** Tippy Tooltips */
tippy('#titleField', {
    content: 'Click to rename your board!',
});

let addModuleButton = document.getElementById("main-header-add-module")

let controlSection = document.getElementById("controlPage");
let detectionSection = document.getElementById("detectionDiv");
let confirmModuleButton = document.getElementById("confirm-module");
let mainPage = document.getElementById("mainPage");

mainPage.style.display = "none"
detectionSection.style.display = "none"
controlSection.style.display = "block"
confirmModuleButton.style.display = "none"

let appChosen = apps.default



let arrayOfInterfaces = []
let detectionIsOn = false;


let listOfPhysicalModules = [
    new ButtonTapModule(), 
    new ButtonHoldModule(), 
    new SwitchModule(), 
    new ToggleRotationModule(), 
    new ContinuousSequenceScrollModule(),
    new ContinuousSequenceDialModule(),
    new SliderModule()


]

let selectedPhysicalModules = []




// function frontScreenSelect() {

//     let frontSelect = new BVSelect({
//       selector: "#main-title-select",
//       width: "auto",
//       searchbox: true,
//       offset: false,
//       placeholder: i,
//       breakpoint: 450
//     });

//     let ammendSelectBox = () => {
//         frontSelect.Change({
//             options : {
//                 0: {
//                     inner_text: "After Effects",
//                     value: "After Effects",
//                 },
//                 1: {
//                     inner_text: "Blender",
//                     value: "Blender",
//                 },
//                 2: {
//                     inner_text: "UFO STUFF",
//                     value: "UFO STUFF",
//                 },
//                 3: {
//                     inner_text: "Custom Shortcut",
//                     value: "customShortcut"+i,
//                     icon: "fas fa-cog"
//                 },
//             }
//         })

//         selectModuleType.Update();
//         return
//     }

//     ammendSelectBox();    

// };


/** Vanilla JS for simple buttons */

let isModuleListShown = false;

function showModulesList() {
    isModuleListShown = isModuleListShown ? false : true;

    if (isModuleListShown == true) {
        gsapDropdown("#module-select-dropdown", 350)
        addModuleButton.innerHTML = "Close";
        return;
    } else {
        gsapDropdownUp("#module-select-dropdown")
        addModuleButton.innerHTML = "Add Module";

    }
}

function hideModulesList() {
    isModuleListShown = false;
    gsapDropdownUp("#module-select-dropdown")
    addModuleButton.innerHTML = "Add Module";
}

let isAdvancedControlsShown = false;

let generateArucoNumber = (markerNumber, moduleID, index) => {

    oldDivId = 'aruco-marker-here-'+ moduleID + '-' + index
    let oldDiv = document.querySelector("#"+oldDivId);
    console.log("olddiv")
    console.log(oldDiv);


    // Create an empty element node
    // without an ID, any attributes, or any content
    let newDiv = document.createElement("div");

    // Give it an id attribute called 'newSpan'
    newDiv.id = oldDivId;

    // Append new canvas to div
    let canvas = makeMarker(markerNumber,20,20)
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    newDiv.appendChild(canvas)

    console.log("newdiv");
    console.log(newDiv);


    let parentDiv = oldDiv.parentNode;

    parentDiv.replaceChild(newDiv, oldDiv)
}

let changeAruco = (moduleId, index) => {

    console.log("moduleId: "+moduleId)
    console.log("index: "+index)


    //Get current input and its value
    markerInputId = moduleId + "-" + index
    console.log("marker input: " +markerInputId);

    let markerInputValue = document.querySelector('#markerNumberField-'+ markerInputId).value;


    generateArucoNumber(markerInputValue, moduleId, index);
}

function showMarkerDetectionLogic(moduleID) {
    let selectedModule = selectedPhysicalModules[moduleID];
    console.log(selectedModule)

    let selectedGif = selectedModule.detectionLogic;

    gsapOverlayMDL();
    document.querySelector('.overlayMarkerDetection').style.display = 'block';

    let selectedGifDiv = document.querySelector('#detection-logic-gif-image')
    console.log(selectedGif)
    selectedGifDiv.src=selectedGif
}

function hideMarkerDetectionLogic() {
    gsapOverlayMDLClose();
    document.querySelector('.overlayMarkerDetection').style.display = 'none';
}

function showAdvancedControls(e) {
    isAdvancedControlsShown = isAdvancedControlsShown ? false : true;
    if (isAdvancedControlsShown == true) {
        gsapDropdown("#custom-options-dropdown-"+ e, 250)
        console.log(e)
        generateAdvancedControls(e)
        return;
    } else {
        gsapDropdownUp("#custom-options-dropdown-"+ e)
    }
}



/** Click outside to close menus */

// function hideOnClickOutside(element) {
    
//     const outsideClickListener = event => {
//         if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
//             console.log('quality of life is shit')
//           removeClickListener()
//         }
//     }

// }

document.addEventListener('click', (evt)=> {

    if (document.querySelector(".module-select").style.opacity == 1) {
        console.log('YOOO')
        gsapDropdownUp("#module-select-dropdown")
        hideModulesList()  
    };

    let arrayOfCustomMenu = [
        "#custom-options-dropdown-0",
        "#custom-options-dropdown-1",
        "#custom-options-dropdown-2",
        "#custom-options-dropdown-3",
        "#custom-options-dropdown-4",
        "#custom-options-dropdown-5"
    ]

    for (let customMenu of arrayOfCustomMenu) {

        customMenuItem = document.querySelector(customMenu);


        if (customMenuItem != null){

            let targetElement = evt.target; // clicked element
        
            do {
                if (targetElement == customMenuItem) {
                    // This is a click inside. Do nothing, just return.
                    console.log('clicked inside')

                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);
        
            // This is a click outside.
            console.log('clicked outside')

            if (customMenuItem.style.opacity == 1) {
                gsapDropdownUp(customMenu)
                isAdvancedControlsShown = false
            }

    
            


        }
    }



})



// Clicking Events

function clickHandler(event) {

    var action = event.target.getAttribute('button-data');
    if (!action) return;

    for (let module of listOfPhysicalModules) {


        if (action === 'add-module-'+ module.type) {

            if (selectedPhysicalModules.length < 6) {

                console.log('Adding Module '+ module.name)

                let newModule = module.createNew(selectedPhysicalModules.length, appChosen)
                selectedPhysicalModules.push(newModule)
                addModuleToHtml(newModule)

                generateListOfShortcuts(newModule)
                gsapDropdownUp("#module-select-dropdown")


                addModuleButton.innerHTML = "Add Module";

                isModuleListShown = false

                if (selectedPhysicalModules.length == 1) {

                    gsap.to(".black-overlay", {
                        opacity: 0,
                        duration: 1.5,
                        onComplete: () => {
                            gsap.to(".black-overlay", {
                                height: 0,
                                y: -10,
                                duration: 0.5
                            })
                        }
                    })

                    gsap.to(".main-header-1", {
                        opacity:0,
                        duration:1.5,
                        onComplete: ()=> {
                            gsap.to(".main-header-1", {
                                height: 0,
                                y: -10,
                                duration: 0.5
                            })
                        }
                    })

                    confirmModuleButton.style.display = "block"
                    gsap.to(".confirm-modules-btn",  {duration: 1, opacity:1});


                }

                
            } else {

                alert("Beta version of AruControl only allows for 6 modules at a time");

            }

            return;
        }
    }

    // if (action === 'add-module') {
    //     console.log('Add Module')
    //     addModule();
    //     makeNewBV(moduleNumber);
    //     return;
    // }

    // if (action === 'set-name') {
    //     let nameChoice = titleField.value
    //     console.log(nameChoice)
    //     return;
    // }

    // if (action === 'delete-module') {
    //     console.log('Delete Module')
    //     return;
    // }

    if (action === 'save-custom-shortcut') {


        gsapOverlayClose();
        document.querySelector('.overlay').style.display = 'none';
        return;
    }
}


function confirmModulesButton() {




    //If control section is present
    if (confirmModuleButton.childNodes[0].nodeValue == "Confirm Modules") {

        arrayOfInterfaces = []

         // Map digital actions
        for (let module of selectedPhysicalModules) {

            let interface = module.map()

            if (Array.isArray(interface)) {

                for (let i of interface) {
                    arrayOfInterfaces.push(i)
                }

            } else {
                arrayOfInterfaces.push(interface)
            }
        }

        // let dHold = new SingleHoldMarkerLogic([DigitalAction.dKey], 8);
        // let fHold = new SingleHoldMarkerLogic([DigitalAction.fKey], 12);
        // let jHold = new SingleHoldMarkerLogic([DigitalAction.jKey], 20);
        // let kHold = new SingleHoldMarkerLogic([DigitalAction.kKey], 4);
        // arrayOfInterfaces = [dHold, fHold, jHold, kHold]

        // arrayOfInterfaces =[new ToggleRotationMarkerLogic([DigitalAction.aKey], [DigitalAction.sKey], 2, true, 25)];

        // let contSeq = new ContinuousSequenceMarkerLogic([DigitalAction.aKey], [DigitalAction.sKey], true, [1, 2, 3, 4]);
        // arrayOfInterfaces = [contSeq]

        console.log("List of interfaces: ")
        console.log(arrayOfInterfaces)

        for (let a of arrayOfInterfaces) {
            a.initialise()
        }

        confirmModuleButton.childNodes[0].nodeValue = "Back To Control Page";
        gsap.to(".add-modules-fade",  {duration: 1, opacity:0});
        gsap.to(".control-fade",  {duration: 1, opacity:0, height:0});
        gsap.to(".camera-fade",  {duration: 1, opacity:1, height:"fit-content", delay:0});
        detectionSection.style.display = "block";
        controlSection.style.display = "none";


        


    } else { 


        confirmModuleButton.childNodes[0].nodeValue = "Confirm Modules";
        gsap.to(".control-fade",   {duration: 1, opacity:1, height:"40vh", delay:0});
        gsap.to(".add-modules-fade",   {duration: 1, opacity:1, delay:0});
        gsap.to(".camera-fade", {duration: 1, opacity:0, height:0,delay:1});
        controlSection.style.display = "block"
        detectionSection.style.display = "none";



    }
   



}

function startDetection() {

    console.log(arrayOfInterfaces)
  
    if (detectionIsOn) {
        detectionIsOn = false
        console.log('Detection is turned off')
    } else {
        detectionIsOn = true
        console.log('Detection is turned on')
    }
}


// Code written in here will be executed every frame
function update() {

    if (detectionIsOn) {
      for (let a of arrayOfInterfaces) {
          a.track();
      }

    }
}

function getStarted() {

    gsap.to(".fade-out-1",  {duration: .3, ease: "power4.out", opacity: 0, onComplete: ()=> {
        document.querySelector(".fade-out-1").style.display = "none"
    } });
    gsap.to(".aruco-logo",  {duration: 2, ease: CustomEase.create("custom", "M0,0 C0.66,0 0.358,0.984 1,1 "), top:100, width:250, delay:.5}); //left:200
    gsap.to(".startPage",  {duration: .3, height:150});

    mainPage.style.display = "block"
    document.querySelector(".black-overlay").style.display = 'block';

    gsap.to(".main-header-1", {
        duration: 1,
        opacity: 1,
        delay: 2.5,
    })

    gsap.to(".black-overlay", {
        duration: 1,
        opacity: 1,
        delay: 2.5,
    })

    gsap.to(".mainPage",  {duration: 1, opacity:1, delay:2});

    gsap.to(".bg-burst", {
        y: "random(-600, -400, 5)",
        x: "random(100, -100, 5)",
        ease: CustomEase.create("custom", "M0,0 C0.66,0 0.358,0.984 1,1 "),
        opacity: 0,
        duration:2,
        delay: .5,
        height:0
      })



}