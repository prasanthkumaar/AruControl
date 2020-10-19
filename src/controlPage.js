document.addEventListener('click', clickHandler, false);


holdButton = new ButtonHoldModule() 
let listOfPhysicalModules = [holdButton]
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

function showAdvancedControls(e) {
    isAdvancedControlsShown = isAdvancedControlsShown ? false : true;
    if (isAdvancedControlsShown == true) {
        gsapDropdown("#custom-options-dropdown-"+ e, 200)
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


/** Tippy Tooltips */

tippy('#titleField', {
    content: 'Click to rename your board!',
});


// Clicking Events

function clickHandler(event) {

    var action = event.target.getAttribute('button-data');
    if (!action) return;

    for (let module of listOfPhysicalModules) {


        if (action === 'add-module-'+ module.type) {
            console.log('Adding Module '+ module.name)

            let newModule = module.createNew(selectedPhysicalModules.length)
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

    //Map digital actions

    // for (let module of selectedPhysicalModules) {
    //     arrayOfInterfaces.push(module.map())
    // }

    
    // for (let a of arrayOfInterfaces) {
    //     a.initialise()
    // }

    ipcRenderer.send('load-page', '/src/cameraPage.html');
} 