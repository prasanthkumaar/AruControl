document.addEventListener('click', clickHandler, false);

/** Tippy Tooltips */
tippy('#titleField', {
    content: 'Click to rename your board!',
});

let controlSection = document.getElementById("controlPage");
let detectionSection = document.getElementById("detectionDiv");
let confirmModuleButton = document.getElementById("confirm-module");
detectionSection.style.display = "none"
controlSection.style.display = "block"

let appChosen = apps.afterEffects



let arrayOfInterfaces = []
let detectionIsOn = false;


let listOfPhysicalModules = [
    new ButtonTapModule(), 
    new ButtonHoldModule(), 
    new SwitchModule(), 
    new ContinuousRotationModule(), 
    new ContinuousSequenceModule()
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
        return;
    } else {
        gsapDropdownUp("#module-select-dropdown")
    }
}

let isAdvancedControlsShown = false;

let generateArucoNumber = (markerNumber, moduleID, appendDiv) => {

    

    // let canvas = makeMarker(markerNumber,20,20)
    // ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'red';

    // let selector = document.querySelector('#aruco-marker-here-'+ moduleID + '-' + appendDiv);

    // let parentDiv = selector.parentNode;

    // parentDiv.replaceChild(canvas, selector)
}

let changeAruco = (moduleID) => {
    // let markerNumberInput = document.querySelector('#markerNumberField-'+ moduleID).value;
    // console.log(markerNumberInput)
    // generateArucoNumber(markerNumberInput, moduleID);
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
//             gsapDropdownUp("#module-select-dropdown")
//           removeClickListener()
//         }
//     }

//     const removeClickListener = () => {
//         document.removeEventListener('click', outsideClickListener)
//     }

//     document.addEventListener('click', outsideClickListener)
// }





// Clicking Events

function clickHandler(event) {

    var action = event.target.getAttribute('button-data');
    if (!action) return;

    for (let module of listOfPhysicalModules) {


        if (action === 'add-module-'+ module.type) {
            console.log('Adding Module '+ module.name)

            let newModule = module.createNew(selectedPhysicalModules.length, appChosen)
            selectedPhysicalModules.push(newModule)
            addModuleToHtml(newModule);
            generateListOfShortcuts(newModule);
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
    if (controlSection.style.display == "block") {

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

        console.log("List of interfaces: ")
        console.log(arrayOfInterfaces)

        // let contSeq = new ContinuousSequenceMarkerLogic([DigitalAction.aKey], [DigitalAction.sKey], true, [1, 2, 3, 4]);
        // arrayOfInterfaces = [contSeq]

        for (let a of arrayOfInterfaces) {
            a.initialise()
        }

        confirmModuleButton.childNodes[0].nodeValue = "Back To Control Page";
        controlSection.style.display = "none"
        detectionSection.style.display = "block";

        


    } else { 

        confirmModuleButton.childNodes[0].nodeValue = "Confirm Modules";
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