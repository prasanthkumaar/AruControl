var titleField = document.querySelector('#titleField');
var moduleNumber = 0;
var moduleDropdownNumber = 0;

// Generate List of modules available in the add module dropdown

var viewModule = function () {
    for (i = 0; i < physicalModule.length; i++) {

        let selector = '#module-select-dropdown-'+moduleDropdownNumber
        let moduleType = physicalModule[i];
        moduleDropdownNumber++;
        console.log('Add module created for '+physicalModule[i])

        // Create the module
        
        new Reef(selector, {
            data: {
                moduleType: moduleType
            },
            template: function (props) {
                return `
                    <div id="button-${props.moduleType}" class="full-button" style="background-image: url(./img/preview.jpg)">
                        <button button-data="add-module-${props.moduleType}" class="full-button clear-button">
                        <span>${props.moduleType}<i class="fas fa-plus"></i></span>
                        </button>
                    </div>
                    `;
            }
        }).render();
    }
};

viewModule();

// When user clicks on module, adds a div on html


var addModule = function (i) {

    let moduleType = i;
    
    let selector = '#content-module-'+moduleNumber
    moduleNumber++;
    console.log(selector);

    // Create the module
    new Reef(selector, {
        data: {
            newNumber: moduleNumber,
            moduleName: moduleType 
        },
        template: function (props) {
            return `
                    <div class="content-module">
                            <div class="content-module-img" style="background-image: url('./img/preview.jpg');">
                                    <div class="module-title"><h4>${props.moduleName}</h4></div>
                                    <button class="clear-button module-cross" button-data="delete-module-${props.newNumber}" id="delete=module-${props.newNumber}">
                                        <span class="fas fa-times fa-1x icon" style="color: black;"></span>
                                    </button>
                            </div>
                        <div class="content-module-bottom">
                            <div>
                                <select onchange="setDigitalAction(${props.newNumber}, '${props.moduleName}')" module-number="${props.newNumber}" select-data="digital-action" class="custom-select" id="module-type-${props.newNumber}">
                                </select>
                            </div>
                                <div>
                                    <button class="clear-button" onclick="customMenuDropdown(${props.newNumber})">                        
                                        <a><span class="fas fa-ellipsis-v fa-1x icon fa-rotate-90" style="font-size: 15px; color: white;"></span></a>
                                    </button>
                                    
                                    <div class="custom-options-menu" id="custom-options-dropdown-${props.newNumber}">
                                        <ul>
                                        <li><strong>Advanced Controls</strong></li>
                                        <li>
                                            <div>Marker Numbers</div>
                                            <div><input id="markerNumberField-${props.newNumber}" class="secondary-input h4" type="text" value="24,56"></input></div>
                                        </li>
                                        <li><div><button class="main-button" onclick="saveSettings(${props.newNumber}, '${props.moduleName}')">Save</button></div></li>
                                        <li><div><button class="main-button">Detection Logic</button></div></li>
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

// Checks and generates appropriate custom shortcuts

var addCustomShortcutWindow = function (i) {

        findDetectionLogic(i)
        console.log('Showing custom menu for '+ i)

        let selector = '#custom-shortcut-menu'
        let currentModuleContent = customForm;

        // Create the module
        
        new Reef(selector, {
            data: {
                questionOne: customForm[0],
                questionTwo: customForm[1]
            },
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
                                <li><a>${props.questionOne}</a></li>
                                <li>
                                    <div><input id="" class="secondary-input h4" type="text" value="eg. ctrl + c"></input></div>
                                </li>
                                <li><a>${props.questionTwo}</a></li>
                                <li>
                                    <div><input id="" class="secondary-input h4" type="text" value="eg. ctrl + c"></input></div>
                                </li>
                                <li><div><button button-data="save-custom-shortcut" class="main-button">Save</button></div></li>
                                </ul>
                        </div>
                    </div>
                    `;
            }
        }).render();
};

// Clicking Events

var clickHandler = function (event) {

    var action = event.target.getAttribute('button-data');
    if (!action) return;

    for (i = 0; i < physicalModule.length; i++){
        let selected = physicalModule[i];
        if (action === 'add-module-'+ physicalModule[i]) {
            console.log('Adding Module '+ physicalModule[i])
            addModule(physicalModule[i]);
            makeNewBV(moduleNumber, physicalModule[i]);
            return;
        }
    }

    // if (action === 'add-module') {
    //     console.log('Add Module')
    //     addModule();
    //     makeNewBV(moduleNumber);
    //     return;
    // }

    if (action === 'set-name') {
        let nameChoice = titleField.value
        console.log(nameChoice)
        return;
    }

    if (action === 'delete-module') {
        console.log('Delete Module')
        return;
    }

    if (action === 'save-custom-shortcut') {

        gsapOverlayClose();
        document.querySelector('.overlay').style.display = 'none';
        return;
    }
}

// Save Custom Settings

let saveSettings = (e, i) => {
    let markerSequence = document.querySelector('#markerNumberField-'+ e).value
    console.log(i + e + " is using " + markerSequence)
    


    return;
}

// Select Digital Action

let setDigitalAction = (e, i) => {
    let newDigitalAction = document.querySelector('#module-type-'+ e).value
    console.log(i + e + " is performing " + newDigitalAction)

    let customShortcutStyle = 'customShortcut' + i;

    switch(newDigitalAction) {
        case customShortcutStyle:
            document.querySelector('.overlay').style.display = 'block';
            addCustomShortcutWindow(i)
            gsapOverlay();
        break;
    }
    
    return;
}

document.addEventListener('click', clickHandler, false);