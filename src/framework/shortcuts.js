/**
 * List 
 */



let apps = {

    afterEffects: {

        holdButton: {

            undoRedo: {
                name: 'Undo & Redo1',
                type: 'undoRedo1',
                action: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },
    
            zoom: {
                name: 'Zoom1',
                type: 'zoom1',
                action: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },
    
            scrub: {
                name: 'Scrub1',
                type: "scrub1",
                action: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },

        },


        tapButton: {

            undoRedo: {
                name: 'Undo & Redo1',
                type: 'undoRedo1',
                action: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },
    
            zoom: {
                name: 'Zoom1',
                type: 'zoom1',
                action: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },
    
            scrub: {
                name: 'Scrub1',
                type: "scrub1",
                action: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },

        },


        switchButton: {

            undoRedo: {
                name: 'Undo & Redo1',
                type: 'undoRedo1',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.zKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]            
            },
    
            zoom: {
                name: 'Zoom1',
                type: 'zoom1',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.equalKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.minusKey]            
            },
    
            scrub: {
                name: 'Scrub1',
                type: "scrub1",
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.rightKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftKey]
            },

        },



        continuousRotation: {

            undoRedo: {
                name: 'Undo & Redo',
                type: 'undoRedo',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.zKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },
    
            zoom: {
                name: 'Zoom',
                type: 'zoom',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.equalKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.minusKey]
            },
    
            scrub: {
                name: 'Scrub',
                type: "scrub",
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.rightKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftKey]
            },

        },

        continuousSequence: {

            undoRedo: {
                name: 'Undo & Redo',
                type: 'undoRedo',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.zKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },
    
            zoom: {
                name: 'Zoom',
                type: 'zoom',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.equalKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.minusKey]
            },
    
            scrub: {
                name: 'Scrub',
                type: 'scrub',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.rightKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftKey]
            },

        },
       


    }
}

// let shortcuts = {

//     HoldA: {
//         name: 'Hold A',
//         action: [DigitalAction.aKey]
//         },

//     undoRedo: {
//         name: 'Undo & Redo',
//         undoAction: [DigitalAction.leftControlKey, DigitalAction.zKey],
//         redoAction: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
//     },


//     zoomIn: [DigitalAction.leftControlKey, DigitalAction.equalKey],

//     zoomOut: [DigitalAction.leftControlKey, DigitalAction.minusKey],

//     scrubRight: [DigitalAction.leftControlKey, DigitalAction.rightKey],

//     scrubLeft: [DigitalAction.leftControlKey, DigitalAction.leftKey]

// }