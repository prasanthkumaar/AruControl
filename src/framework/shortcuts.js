/**
 * List 
 */



let apps = {

    afterEffects: {

        buttonHold: {

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


        buttonTap: {

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


        switch: {

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



        toggleRotation: {

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

        continuousSequenceScroll: {

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

        continuousSequenceDial: {

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



    },

    default: {

        buttonHold: {

            holdW: {
                name: 'Hold W Key',
                type: 'holdWKey',
                action: [DigitalAction.wKey]
            },

            holdA: {
                name: 'Hold A Key',
                type: 'holdAKey',
                action: [DigitalAction.aKey]
            },

            holdD: {
                name: 'Hold D Key',
                type: "holdDKey",
                action: [DigitalAction.dKey]
            },

        },

        buttonTap: {

            ctrlAltDelete: {
                name: 'Ctrl Alt Delete (Windows)',
                type: 'ctrlAltDelete',
                action: [DigitalAction.wKey]
            },

            holdA: {
                name: 'Open Spotlight (Mac)',
                type: 'openSpotlight',
                action: [DigitalAction.aKey]
            },

            holdD: {
                name: 'Permanently Delete (windows)',
                type: "permDelete",
                action: [DigitalAction.leftShiftKey, DigitalAction.deleteKey]
            },

        },


        switch: {

            undoRedo: {
                name: 'Undo & Redo',
                type: 'undoRedo',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.zKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },

            copyPaste: {
                name: 'Copy & Paste',
                type: 'copyPaste',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.cKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.vKey]
            },

            appSwitch: {
                name: 'App Switch',
                type: "appSwitch",
                clockwiseAction: [DigitalAction.leftAltKey, DigitalAction.tabKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftKey]
            },

        },



        toggleRotation: {

            leftRightArrow: {
                name: 'Hold Left / Right Arrow',
                type: 'leftRightArrow',
                clockwiseAction: [DigitalAction.rightKey],
                anticlockwiseAction: [DigitalAction.leftKey]
            },

            aAndDKey: {
                name: 'Hold A / D Key',
                type: 'aAndDKey',
                clockwiseAction: [DigitalAction.dKey],
                anticlockwiseAction: [DigitalAction.aKey]
            },

            squareBracket: {
                name: 'Hold [ / ] Key',
                type: 'holdSquareBracket',
                clockwiseAction: [DigitalAction.leftBracketKey],
                anticlockwiseAction: [DigitalAction.rightBracketKey]
            },
        },

        continuousSequenceScroll: {

            undoRedo: {
                name: 'Undo & Redo',
                type: 'undoRedo',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.zKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },

            copyPaste: {
                name: 'Copy & Paste',
                type: 'copyPaste',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.cKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.vKey]
            },

            zoom: {
                name: 'Zoom',
                type: 'zoom',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.equalKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.minusKey]
       
        },

        },

        continuousSequenceDial: {

            undoRedo: {
                name: 'Undo & Redo',
                type: 'undoRedo',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.zKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
            },

            copyPaste: {
                name: 'Copy & Paste',
                type: 'copyPaste',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.cKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.vKey]
            },

            zoom: {
                name: 'Zoom',
                type: 'zoom',
                clockwiseAction: [DigitalAction.leftControlKey, DigitalAction.equalKey],
                anticlockwiseAction: [DigitalAction.leftControlKey, DigitalAction.minusKey]
       
          },

        },
    }

}