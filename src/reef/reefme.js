var titleField = document.querySelector('#titleField');
let moduleNumber = 0;
let moduleDropdownNumber = 0;

// Generate List of modules available in the add module dropdown
function generateListOfModules() {

    for (let module of listOfPhysicalModules) {

        let selector = '#module-select-dropdown-'+moduleDropdownNumber
        let moduleType = module.type;
        moduleDropdownNumber++;
        //console.log('Add module created for '+m)

        // Create the module
        
        new Reef(selector, {
            data: {
                module: module
            },
            template: function (props) {
                return `
                    <div id="button-${props.module.type}" class="full-button" style="background-image: url(./img/preview.jpg)">
                        <button button-data="add-module-${props.module.type}" class="full-button clear-button">
                        <span>${props.module.name}<i class="fas fa-plus"></i></span>
                        </button>
                    </div>
                    `;
            }

        }).render();
    }
};

generateListOfModules();

// When user clicks on module, adds a div on html
function addModuleToHtml(newModule) {
    
    let selector = '#content-module-'+newModule.id
    console.log(selector);

    // Create the module
    new Reef(selector, {
        data: {
            module: newModule,
        },
        template: function (props) {
            return `
                    <div class="content-module">
                            <div class="content-module-img" style="background-image: url('./img/preview.jpg');">
                                    <div class="module-title"><h4>${props.module.name}</h4></div>
                                    <button class="clear-button module-cross" button-data="delete-module-${props.module.id}" id="delete=module-${props.module.id}">
                                        <span class="fas fa-times fa-1x icon" style="color: black;"></span>
                                    </button>
                            </div>
                        <div class="content-module-bottom">
                            <div>
                                <select onchange="selectShortcut(${props.module.id})" module-number="${props.module.id}" select-data="digital-action" class="custom-select" id="module-type-${props.module.id}">
                                </select>
                            </div>
                                <div>
                                    <button class="clear-button" onclick="showAdvancedControls(${props.module.id})">                        
                                        <a><span class="fas fa-ellipsis-v fa-1x icon fa-rotate-90" style="font-size: 15px; color: white;"></span></a>
                                    </button>
                                    
                                    <div class="custom-options-menu" id="custom-options-dropdown-${props.module.id}">
                                        <strong>Advanced Controls</strong>
                                        <ul>
                                        <div id="aruco-marker-here-${props.module.id}-0"></div>
                                        <div id="advanced-controls-${props.module.id}-0"></div>
                                        <div id="aruco-marker-here-${props.module.id}-1"></div>
                                        <div id="advanced-controls-${props.module.id}-1"></div>
                                        <div id="aruco-marker-here-${props.module.id}-2"></div>
                                        <div id="advanced-controls-${props.module.id}-2"></div>
                                        <li><div><button class="main-button" onclick="saveAdvancedControls(${props.module.id})">Save</button></div></li>
                                        <div><button class="main-button">Detection Logic</button></div>
                                        </ul>
                                    </div>
                                </div>
                        </div>                        
                    </div>

                `;
        }
    }).render();

    // newModule.render();

};



function generateListOfShortcuts(module) {

    let shortcutList = {}
      
    switch(module.type) {
        case 'ButtonHold': shortcutList = module.appShortcuts.holdButton
        break;
        case 'ButtonTap': shortcutList = module.appShortcuts.tapButton
        break;
        case 'Switch': shortcutList = module.appShortcuts.switchButton
        break;
        case 'ContinuousRotation': shortcutList = module.appShortcuts.continuousRotation
        break;
        case 'ContinuousSequence': shortcutList = module.appShortcuts.continuousSequence
        break;

        default:
    }

    let selectModuleType = new BVSelect({
      selector: "#module-type-" + module.id,
      width: "auto",
      searchbox: false,
      offset: false,
      placeholder: "Select shortcut",
      breakpoint: 450
    });

    console.log(shortcutList)

    let ammendSelectBox = () => {
        selectModuleType.Change({
            options : {
                0: {
                    inner_text: Object.values(shortcutList)[0].name,
                    value: Object.values(shortcutList)[0].type,
                },
                1: {
                    inner_text:  Object.values(shortcutList)[1].name,
                    value:  Object.values(shortcutList)[1].type,
                },
                2: {
                    inner_text: Object.values(shortcutList)[2].name,
                    value: Object.values(shortcutList)[2].type,
                },
                3: {
                    inner_text: "Custom Shortcut",
                    value: "customShortcut" + module.id,
                    icon: "fas fa-cog"
                },
            }
        })

        selectModuleType.Update();
        return
    }

    ammendSelectBox();    
    console.log(selectModuleType.GetID());

};


// Checks and generates appropriate custom shortcuts

function showCustomShortcutWindow(module) {

        let selector = '#custom-shortcut-menu'

        // Create the module
        
        new Reef(selector, {
            template: function (props) {
                return `
                        <div class="custom-shortcut-menu-title">
                        <div class="module-title"><h4>Create Custom Shortcut</h4></div>
                        <button class="clear-button module-cross" button-data="delete-module" id="delete=module">
                            <span class="fas fa-times fa-1x icon" style="color: black;"></span>
                        </button>
                    </div>
                    <div class="custom-shortcut-menu-content">
                        <div class="custom-shortcut-menu-form">
                            <ul>
                                <li><h4>Enter Keyboard Shortcut</h4></li>
                                <li>
                                    <div>
                                    <div class="main-keyboard-layout">

                                        <div class="keyboard-base">
                                            <div class="key">~</div>
                                            <div class="key">1</div>
                                            <div class="key">2</div>
                                            <div class="key">3</div>
                                            <div class="key">4</div>
                                            <div class="key">5</div>
                                            <div class="key">6</div>
                                            <div class="key">7</div>
                                            <div class="key">8</div>
                                            <div class="key">9</div>
                                            <div class="key">0</div>
                                            <div class="key">-</div>
                                            <div class="key">+</div>
                                            <div class="key delete">Delete</div>
                                            <div class="key tab">Tab</div>
                                            <div class="key">Q</div>
                                            <div class="key">w</div>
                                            <div class="key">E</div>
                                            <div class="key">R</div>
                                            <div class="key">T</div>
                                            <div class="key">Y</div>
                                            <div class="key">U</div>
                                            <div class="key">I</div>
                                            <div class="key">O</div>
                                            <div class="key">P</div>
                                            <div class="key">[</div>
                                            <div class="key">]</div>
                                            <div class="key backslash">\</div>
                                            <div class="key capslock">CapsLock</div>
                                            <div class="key">A</div>
                                            <div class="key">S</div>
                                            <div class="key">D</div>
                                            <div class="key">F</div>
                                            <div class="key">G</div>
                                            <div class="key">H</div>
                                            <div class="key">J</div>
                                            <div class="key">K</div>
                                            <div class="key">L</div>
                                            <div class="key">;</div>
                                            <div class="key">'</div>
                                            <div class="key return">Enter</div>
                                            <div class="key leftshift">Shift</div>
                                            <div class="key">Z</div>
                                            <div class="key">X</div>
                                            <div class="key">C</div>
                                            <div class="key">V</div>
                                            <div class="key">B</div>
                                            <div class="key">N</div>
                                            <div class="key">M</div>
                                            <div class="key">,</div>
                                            <div class="key">.</div>
                                            <div class="key">/</div>
                                            <div class="key rightshift">Shift</div>
                                            <div class="key leftctrl">Ctrl</div>
                                            <div class="key">Alt</div>
                                            <div class="key command">Command</div>
                                            <div class="key space">Space</div>
                                            <div class="key command">command</div>
                                            <div class="key">Alt</div>
                                            <div class="key">Ctrl</div>
                                            <div class="key">Fn</div>
                                        </div>
            
                                        <div class="keyboard-base-right">
                                        <div class="keyboard-base-right-top">
                                            <div class="key">Prn Scn</div>
                                            <div class="key">Scr Lck</div>
                                            <div class="key">Pau Brk</div>
                                            <div class="key">Ins</div>
                                            <div class="key">Home</div>
                                            <div class="key">Pg Up</div>
                                            <div class="key">Del</div>
                                            <div class="key">End</div>
                                            <div class="key">Pg Dn</div>
                                        </div>
                                        <div class="keyboard-base-right-bottom">
                                            <div class="key fake">FAKE</div>  
                                            <div class="key">Up</div>
                                            <div class="key fake">FAKE</div>  
                                            <div class="key">Left</div>
                                            <div class="key">Down</div>
                                            <div class="key">Right</div>
                                        </div>
                                        </div>
            
                                        <div class="keyboard-base-keypad">
                                            <div class="key">Numlock</div>
                                            <div class="key">/</div>
                                            <div class="key">*</div>
                                            <div class="key">-</div>
                                            <div class="key">7</div>
                                            <div class="key">8</div>
                                            <div class="key">9</div>
                                            <div class="key long">+</div>
                                            <div class="key">4</div>
                                            <div class="key">5</div>
                                            <div class="key">6</div>
                                            <div class="key">1</div>
                                            <div class="key">2</div>
                                            <div class="key">3</div>
                                            <div class="key long">Enter</div>
                                            <div class="key return">0</div>
                                            <div class="key">Del</div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                
                                <div id="question-start-0"></div>
                                <div id="question-start-1"></div>
                                <li><div><button button-data="save-custom-shortcut" class="main-button">Save</button></div></li>
                                </ul>
                        </div>
                    </div>
                    `;
            }
        }).render();
};

function generateAdvancedControls(moduleID) {

    let selectedModule = selectedPhysicalModules[moduleID];
    let appendDiv;

    for (i = 0; i < selectedModule.numberOfMarkers; i++) {

        generateArucoNumber(1, moduleID, i)
        appendDiv++;

        let selector = '#advanced-controls-' + moduleID + '-' + i


        // Create the module
        
        new Reef(selector, {
            data: {
                module: selectedModule,
                index: selectedModule.id + "-" + i
            },
            template: function (props) {
                return `
                    <li>
                        <div>
                            <input onchange="changeAruco(${props.module.id})" id="markerNumberField-${props.index}" class="secondary-input h4 advanced-controls" type="number" value="1">
                            </input>
                        </div>
                    </li>
                    `;
            }
        }).render();

        const input = document.querySelector("#markerNumberField-" + selectedModule.id + "-" + i);

        input.addEventListener('focus', () => {

            input.style.backgroundColor = "yellow";
        })

        input.addEventListener('focusout', () => {

            

            input.style.backgroundColor = "white";

            if (Array.isArray(selectedModule.selectedMarkerId)) {

                let str = input.id;
                let index = Number(str.charAt(str.length-1));                
                selectedModule.selectedMarkerId[index] = Number(input.value)
                console.log(selectedModule.selectedMarkerId)


            } else {
                selectedModule.selectedMarkerId = Number(input.value)
                console.log(selectedModule.selectedMarkerId)

            }



        });

    }
};

// When user clicks on module, adds a div on html
function addCustomQuestion(module) {

    for (let item of module.customInput) {

        let selector = '#question-start-' + module.customInput.indexOf(item)

        console.log(selector);

        // Create the module
        new Reef(selector, {
            data: {
                input: item,
                index: module.customInput.indexOf(item)
            },
            template: function (props) {
                return `
                    <li><a>${props.input}</a></li>
                    <li><div>
                    <input id="input-${props.index}" class="secondary-input h4" type="text" placeholder="CTRL F" readOnly></input>
                    <button id = "clear-${props.index}" class="main-button button">Clear</button>

                    </div></li>
                    
                    `;
            }
        }).render();

        const input = document.querySelector("#input-" + module.customInput.indexOf(item));

        let keycodeArr = []

        let handler = function(key) { 
            keyPressed = keycodeToString[key.keyCode]
            input.value += keyPressed + " "
            keycodeArr.push(key.keyCode)
            console.log(keycodeArr)
        }

        input.addEventListener('focus', () => {

            input.style.backgroundColor = "yellow";
            console.log(input + 'is active')
            document.addEventListener('keydown', handler, true);
        })

        input.addEventListener('focusout', () => {

            input.style.backgroundColor = "white";
            console.log(input + 'is not active')
            document.removeEventListener('keydown', handler, true);

            //parse keycodearr elements into digitalActions

            //console.log(module)
            if (module.customInput.length == 1) {

                module.selectedActions = []

                for (let keycode of keycodeArr) {
                    module.selectedActions.push(keycodeToDigitalAction[keycode])
                }
    
                console.log(module.selectedActions)
    

            } else {


                if (module.customInput.indexOf(item) == 0) {

                    for (let keycode of keycodeArr) {

                        module.selectedClockwiseActions = []
                        module.selectedClockwiseActions.push(keycodeToDigitalAction[keycode])
                    }
        
                    console.log(module.selectedClockwiseActions)

                } else {

                    
                    for (let keycode of keycodeArr) {

                        module.selectedAnticlockwiseActions = []
                        module.selectedAnticlockwiseActions.push(keycodeToDigitalAction[keycode])
                    }
        
                    console.log(module.selectedAnticlockwiseActions)

                }



            }


            
        });

        const clearButton = document.querySelector("#clear-" + module.customInput.indexOf(item));
        clearButton.onclick = function(){
            input.value = ''
            keycodeArr = []
        };

        
    }


};



// Save Custom Settings

function saveAdvancedControls(moduleId) {

    let selectedModule = selectedPhysicalModules[moduleId];

    let message = module.type +"-"+ module.id + " is using marker "



    if (Array.isArray(selectedModule.selectedMarkerId)) {

        for (let a of selectedModule.selectedMarkerId) {
            message += a + ", " 
        }

    } else {

        message += selectedModule.selectedMarkerId

    }

    console.log(message)




    return;
}

// Select Digital Action

function selectShortcut(moduleId) {

    console.log(moduleId);

    let module = selectedPhysicalModules[moduleId];

    let newShortcutSelected = document.querySelector('#module-type-' + module.id).value
    console.log(module.type + module.id + " is performing " + newShortcutSelected)

    let customShortcutStyle = 'customShortcut' + module.id;

    if (newShortcutSelected == customShortcutStyle) {

        document.querySelector('.overlay').style.display = 'block';
        showCustomShortcutWindow(module)
        addCustomQuestion(module);
        gsapOverlay();

    } else {


        //check what module it is and go to its specfic shortcuts

        let shortcutList = {}

        switch(module.type) {
            case 'ButtonHold': shortcutList = module.appShortcuts.holdButton
            break;
            case 'ButtonTap': shortcutList = module.appShortcuts.tapButton
            break;
            case 'Switch': shortcutList = module.appShortcuts.switchButton
            break;
            case 'ContinuousRotation': shortcutList = module.appShortcuts.continuousRotation
            break;
            case 'ContinuousSequence': shortcutList = module.appShortcuts.continuousSequence
            break;

            default:
        }


        console.log(newShortcutSelected)


        for (let x in shortcutList) {

            let shortcut = shortcutList[x]
            if (newShortcutSelected == shortcut.type) {
                
                if (module.customInput.length == 1) {
                    module.selectedActions = shortcut.action

                } else {
                    module.selectedClockwiseActions = shortcut.clockwiseAction
                    module.selectedAnticlockwiseActions = shortcut.anticlockwiseAction
                }

                break;
            }
        } 

    }
    
    return;
}


