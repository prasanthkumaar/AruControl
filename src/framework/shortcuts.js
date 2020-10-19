/**
 * List 
 */

let shortcuts = {

    HoldA: {
        name: 'Hold A',
        action: [DigitalAction.aKey]
        },

    undoRedo: {
        name: 'Undo & Redo',
        undoAction: [DigitalAction.leftControlKey, DigitalAction.zKey],
        redoAction: [DigitalAction.leftControlKey, DigitalAction.leftShiftKey, DigitalAction.zKey]
    },


    zoomIn: [DigitalAction.leftControlKey, DigitalAction.equalKey],

    zoomOut: [DigitalAction.leftControlKey, DigitalAction.minusKey],

    scrubRight: [DigitalAction.leftControlKey, DigitalAction.rightKey],

    scrubLeft: [DigitalAction.leftControlKey, DigitalAction.leftKey]

}