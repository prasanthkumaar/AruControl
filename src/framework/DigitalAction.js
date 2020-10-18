const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");

const ipcRenderer = require('electron').ipcRenderer;

let DigitalAction = {


    scroll: {

        name: 'Scroll',
        value: 30,

        sendDown: async function() {
            await mouse.scrollDown(this.value);
        },

        sendUp: async function() {
            await mouse.scrollUp(this.value);
        },

    },

    spaceKey: {
        name: "'Space' Key",

        sendDown: () => {
            ipcRenderer.send("SPACE_KEY_DOWN")
            console.log('SPACE KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("SPACE_KEY_UP")
            console.log('SPACE KEY UP')
        },
    },


    escapeKey: {
        name: "'Escape' Key",

        sendDown: () => {
            ipcRenderer.send("ESCAPE_KEY_DOWN")
            console.log('ESCAPE KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("ESCAPE_KEY_UP")
            console.log('ESCAPE KEY UP')
        },
    },

    tabKey: {
        name: "'Tab' Key",

        sendDown: () => {
            ipcRenderer.send("TAB_KEY_DOWN")
            console.log('TAB KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("TAB_KEY_UP")
            console.log('TAB KEY UP')
        },
    },

    leftAltKey: {
        name: "'Left Alt' Key",

        sendDown: () => {
            ipcRenderer.send("LEFTALT_KEY_DOWN")
            console.log('LEFT ALT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("LEFTALT_KEY_UP")
            console.log('LEFT ALT KEY UP')
        },
    },


    f9key: {

        name: "'F9' Key",

        sendDown: () => {
            ipcRenderer.send("F9_KEY_DOWN")
            console.log('F9 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F9_KEY_UP")
            console.log('F9 KEY UP')
        },
    },


    leftControlKey: {
        name: "'Left Control' Key",

        sendDown: () => {
            ipcRenderer.send("LEFTCONTROL_KEY_DOWN")
            console.log('LEFT CONTROL KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("LEFTCONTROL_KEY_UP")
            console.log('LEFT CONTROL KEY UP')
        },
    },

    rightAltKey: {
        name: "'Right Alt' Key",

        sendDown: () => {
            ipcRenderer.send("RIGHTALT_KEY_DOWN")
            console.log('RIGHT ALT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("RIGHTALT_KEY_UP")
            console.log('RIGHT ALT KEY UP')
        },
    },


    rightControlKey: {
        name: "'Right Control' Key",

        sendDown: () => {
            ipcRenderer.send("RIGHTCONTROL_KEY_DOWN")
            console.log('RIGHT CONTROL KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("RIGHTCONTROL_KEY_UP")
            console.log('RIGHT CONTROL KEY UP')
        },
    },

    leftShiftKey: {
        name: "'Left Shift' Key",

        sendDown: () => {
            ipcRenderer.send("LEFTSHIFT_KEY_DOWN")
            console.log('LEFT SHIFT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("LEFTSHIFT_KEY_UP")
            console.log('LEFT SHIFT KEY UP')
        },
    },

    leftSuperKey: {
        name: "'Left Super' Key",

        sendDown: () => {
            ipcRenderer.send("LEFTSUPER_KEY_DOWN")
            console.log('LEFT SUPER KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("LEFTSUPER_KEY_UP")
            console.log('LEFT SUPER KEY UP')
        },
    },

    rightShiftKey: {
        name: "'Right Shift' Key",

        sendDown: () => {
            ipcRenderer.send("RIGHTSHIFT_KEY_DOWN")
            console.log('RIGHT SHIFT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("RIGHTSHIFT_KEY_UP")
            console.log('RIGHT SHIFT KEY UP')
        },
    },

    rightSuperKey: {
        name: "'Right Super' Key",

        sendDown: () => {
            ipcRenderer.send("RIGHTSUPER_KEY_DOWN")
            console.log('RIGHT SUPER KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("RIGHTSUPER_KEY_UP")
            console.log('RIGHT SUPER KEY UP')
        },
    },


    f1Key: {
        name: "'F1' Key",

        sendDown: () => {
            ipcRenderer.send("F1_KEY_DOWN")
            console.log('F1 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F1_KEY_UP")
            console.log('F1 KEY UP')
        },
    },

    f2Key: {
        name: "'F2' Key",

        sendDown: () => {
            ipcRenderer.send("F2_KEY_DOWN")
            console.log('F2 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F2_KEY_UP")
            console.log('F2 KEY UP')
        },
    },

    f3Key: {
        name: "'F3' Key",

        sendDown: () => {
            ipcRenderer.send("F3_KEY_DOWN")
            console.log('F3 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F3_KEY_UP")
            console.log('F3 KEY UP')
        },
    },

    f4Key: {
        name: "'F4' Key",

        sendDown: () => {
            ipcRenderer.send("F4_KEY_DOWN")
            console.log('F4 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F4_KEY_UP")
            console.log('F4 KEY UP')
        },
    },

    f5Key: {
        name: "'F5' Key",

        sendDown: () => {
            ipcRenderer.send("F5_KEY_DOWN")
            console.log('F5 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F5_KEY_UP")
            console.log('F5 KEY UP')
        },
    },

    f6Key: {
        name: "'F6' Key",

        sendDown: () => {
            ipcRenderer.send("F6_KEY_DOWN")
            console.log('F6 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F6_KEY_UP")
            console.log('F6 KEY UP')
        },
    },

    f7Key: {
        name: "'F7' Key",

        sendDown: () => {
            ipcRenderer.send("F7_KEY_DOWN")
            console.log('F7 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F7_KEY_UP")
            console.log('F7 KEY UP')
        },
    },

    f8Key: {
        name: "'F8' Key",

        sendDown: () => {
            ipcRenderer.send("F8_KEY_DOWN")
            console.log('F8 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F8_KEY_UP")
            console.log('F8 KEY UP')
        },
    },

    f9Key: {
        name: "'F9' Key",

        sendDown: () => {
            ipcRenderer.send("F9_KEY_DOWN")
            console.log('F9 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F9_KEY_UP")
            console.log('F9 KEY UP')
        },
    },

    f10Key: {
        name: "'F10' Key",

        sendDown: () => {
            ipcRenderer.send("F10_KEY_DOWN")
            console.log('F10 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F10_KEY_UP")
            console.log('F10 KEY UP')
        },
    },

    f11Key: {
        name: "'F11' Key",

        sendDown: () => {
            ipcRenderer.send("F11_KEY_DOWN")
            console.log('F11 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F11_KEY_UP")
            console.log('F11 KEY UP')
        },
    },

    f12Key: {
        name: "'F12' Key",

        sendDown: () => {
            ipcRenderer.send("F12_KEY_DOWN")
            console.log('F12 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F12_KEY_UP")
            console.log('F12 KEY UP')
        },
    },

    num0Key: {
        name: "'Num 0' Key",

        sendDown: () => {
            ipcRenderer.send("NUM0_KEY_DOWN")
            console.log('NUM0 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM0_KEY_UP")
            console.log('NUM0 KEY UP')
        },
    },

    num1Key: {
        name: "'Num 1' Key",

        sendDown: () => {
            ipcRenderer.send("NUM1_KEY_DOWN")
            console.log('NUM1 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM1_KEY_UP")
            console.log('NUM1 KEY UP')
        },
    },

    num2Key: {
        name: "'Num 2' Key",

        sendDown: () => {
            ipcRenderer.send("NUM2_KEY_DOWN")
            console.log('NUM2 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM2_KEY_UP")
            console.log('NUM2 KEY UP')
        },
    },

    num3Key: {
        name: "'Num 3' Key",

        sendDown: () => {
            ipcRenderer.send("NUM3_KEY_DOWN")
            console.log('NUM3 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM3_KEY_UP")
            console.log('NUM3 KEY UP')
        },
    },

    num4Key: {
        name: "'Num 4' Key",

        sendDown: () => {
            ipcRenderer.send("NUM4_KEY_DOWN")
            console.log('NUM4 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM4_KEY_UP")
            console.log('NUM4 KEY UP')
        },
    },

    num5Key: {
        name: "'Num 5' Key",

        sendDown: () => {
            ipcRenderer.send("NUM5_KEY_DOWN")
            console.log('NUM5 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM5_KEY_UP")
            console.log('NUM5 KEY UP')
        },
    },

    num6Key: {
        name: "'Num 6' Key",

        sendDown: () => {
            ipcRenderer.send("NUM6_KEY_DOWN")
            console.log('NUM6 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM6_KEY_UP")
            console.log('NUM6 KEY UP')
        },
    },

    num7Key: {
        name: "'Num 7' Key",

        sendDown: () => {
            ipcRenderer.send("NUM7_KEY_DOWN")
            console.log('NUM7 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM7_KEY_UP")
            console.log('NUM7 KEY UP')
        },
    },

    num8Key: {
        name: "'Num 8' Key",

        sendDown: () => {
            ipcRenderer.send("NUM8_KEY_DOWN")
            console.log('NUM8 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM8_KEY_UP")
            console.log('NUM8 KEY UP')
        },
    },

    num9Key: {
        name: "'Num 9' Key",

        sendDown: () => {
            ipcRenderer.send("NUM9_KEY_DOWN")
            console.log('NUM9 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUM9_KEY_UP")
            console.log('NUM9 KEY UP')
        },
    },

    aKey: {
        name: "'A' Key",

        sendDown: () => {
            ipcRenderer.send("A_KEY_DOWN")
            console.log('A KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("A_KEY_UP")
            console.log('A KEY UP')
        },
    },
   
    bKey: {
        name: "'B' Key",

        sendDown: () => {
            ipcRenderer.send("B_KEY_DOWN")
            console.log('B KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("B_KEY_UP")
            console.log('B KEY UP')
        },
    },

    cKey: {
        name: "'C' Key",

        sendDown: () => {
            ipcRenderer.send("C_KEY_DOWN")
            console.log('C KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("C_KEY_UP")
            console.log('C KEY UP')
        },
    },

    dKey: {
        name: "'D' Key",

        sendDown: () => {
            ipcRenderer.send("D_KEY_DOWN")
            console.log('D KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("D_KEY_UP")
            console.log('D KEY UP')
        },
    },

    eKey: {
        name: "'E' Key",

        sendDown: () => {
            ipcRenderer.send("E_KEY_DOWN")
            console.log('E KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("E_KEY_UP")
            console.log('E KEY UP')
        },
    },

    fKey: {
        name: "'F' Key",

        sendDown: () => {
            ipcRenderer.send("F_KEY_DOWN")
            console.log('F KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("F_KEY_UP")
            console.log('F KEY UP')
        },
    },

    gKey: {
        name: "'G' Key",

        sendDown: () => {
            ipcRenderer.send("G_KEY_DOWN")
            console.log('G KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("G_KEY_UP")
            console.log('G KEY UP')
        },
    },

    hKey: {
        name: "'H' Key",

        sendDown: () => {
            ipcRenderer.send("H_KEY_DOWN")
            console.log('H KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("H_KEY_UP")
            console.log('H KEY UP')
        },
    },

    iKey: {
        name: "'I' Key",

        sendDown: () => {
            ipcRenderer.send("I_KEY_DOWN")
            console.log('I KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("I_KEY_UP")
            console.log('I KEY UP')
        },
    },

    jKey: {
        name: "'J' Key",

        sendDown: () => {
            ipcRenderer.send("J_KEY_DOWN")
            console.log('J KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("J_KEY_UP")
            console.log('J KEY UP')
        },
    },

    kKey: {
        name: "'K' Key",

        sendDown: () => {
            ipcRenderer.send("K_KEY_DOWN")
            console.log('K KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("K_KEY_UP")
            console.log('K KEY UP')
        },
    },

    lKey: {
        name: "'L' Key",

        sendDown: () => {
            ipcRenderer.send("L_KEY_DOWN")
            console.log('L KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("L_KEY_UP")
            console.log('L KEY UP')
        },
    },

    mKey: {
        name: "'M' Key",

        sendDown: () => {
            ipcRenderer.send("M_KEY_DOWN")
            console.log('M KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("M_KEY_UP")
            console.log('M KEY UP')
        },
    },

    nKey: {
        name: "'N' Key",

        sendDown: () => {
            ipcRenderer.send("N_KEY_DOWN")
            console.log('N KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("N_KEY_UP")
            console.log('N KEY UP')
        },
    },

    oKey: {
        name: "'O' Key",

        sendDown: () => {
            ipcRenderer.send("O_KEY_DOWN")
            console.log('O KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("O_KEY_UP")
            console.log('O KEY UP')
        },
    },

    pKey: {
        name: "'P' Key",

        sendDown: () => {
            ipcRenderer.send("P_KEY_DOWN")
            console.log('P KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("P_KEY_UP")
            console.log('P KEY UP')
        },
    },

    qKey: {
        name: "'Q' Key",

        sendDown: () => {
            ipcRenderer.send("Q_KEY_DOWN")
            console.log('Q KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("Q_KEY_UP")
            console.log('Q KEY UP')
        },
    },

    rKey: {
        name: "'R' Key",

        sendDown: () => {
            ipcRenderer.send("R_KEY_DOWN")
            console.log('R KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("R_KEY_UP")
            console.log('R KEY UP')
        },
    },

    sKey: {
        name: "'S' Key",

        sendDown: () => {
            ipcRenderer.send("S_KEY_DOWN")
            console.log('S KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("S_KEY_UP")
            console.log('S KEY UP')
        },
    },

    tKey: {
        name: "'T' Key",

        sendDown: () => {
            ipcRenderer.send("T_KEY_DOWN")
            console.log('T KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("T_KEY_UP")
            console.log('T KEY UP')
        },
    },

    uKey: {
        name: "'U' Key",

        sendDown: () => {
            ipcRenderer.send("U_KEY_DOWN")
            console.log('U KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("U_KEY_UP")
            console.log('U KEY UP')
        },
    },

    vKey: {
        name: "'V' Key",

        sendDown: () => {
            ipcRenderer.send("V_KEY_DOWN")
            console.log('V KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("V_KEY_UP")
            console.log('V KEY UP')
        },
    },

    wKey: {
        name: "'W' Key",

        sendDown: () => {
            ipcRenderer.send("W_KEY_DOWN")
            console.log('W KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("W_KEY_UP")
            console.log('W KEY UP')
        },
    },

    xKey: {
        name: "'X' Key",

        sendDown: () => {
            ipcRenderer.send("X_KEY_DOWN")
            console.log('X KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("X_KEY_UP")
            console.log('X KEY UP')
        },
    },

    yKey: {
        name: "'Y' Key",

        sendDown: () => {
            ipcRenderer.send("Y_KEY_DOWN")
            console.log('Y KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("Y_KEY_UP")
            console.log('Y KEY UP')
        },
    },

    zKey: {
        name: "'Z' Key",

        sendDown: () => {
            ipcRenderer.send("Z_KEY_DOWN")
            console.log('Z KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("Z_KEY_UP")
            console.log('Z KEY UP')
        },
    },

    graveKey: {
        name: "'Grave' Key",

        sendDown: () => {
            ipcRenderer.send("GRAVE_KEY_DOWN")
            console.log('GRAVE KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("GRAVE_KEY_UP")
            console.log('GRAVE KEY UP')
        },
    },

    minusKey: {
        name: "'Minus' Key",

        sendDown: () => {
            ipcRenderer.send("MINUS_KEY_DOWN")
            console.log('MINUS KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("MINUS_KEY_UP")
            console.log('MINUS KEY UP')
        },
    },

    equalKey: {
        name: "'Equal' Key",

        sendDown: () => {
            ipcRenderer.send("EQUAL_KEY_DOWN")
            console.log('EQUAL KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("EQUAL_KEY_UP")
            console.log('EQUAL KEY UP')
        },
    },

    backspaceKey: {
        name: "'Backspace' Key",

        sendDown: () => {
            ipcRenderer.send("BACKSPACE_KEY_DOWN")
            console.log('BACKSPACE KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("BACKSPACE_KEY_UP")
            console.log('BACKSPACE KEY UP')
        },
    },

    leftBracketKey: {
        name: "'Left Bracket' Key",

        sendDown: () => {
            ipcRenderer.send("LEFTBRACKET_KEY_DOWN")
            console.log('LEFT BRACKET KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("LEFTBRACKET_KEY_UP")
            console.log('LEFT BRACKET KEY UP')
        },
    },
    
    rightBracketKey: {
        name: "'Right Bracket' Key",

        sendDown: () => {
            ipcRenderer.send("RIGHTBRACKET_KEY_DOWN")
            console.log('RIGHT BRACKET KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("RIGHTBRACKET_KEY_UP")
            console.log('RIGHT BRACKET KEY UP')
        },
    },

    backslashKey: {
        name: "'Backslash' Key",

        sendDown: () => {
            ipcRenderer.send("BACKSLASH_KEY_DOWN")
            console.log('BACKSLASH KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("BACKSLASH_KEY_UP")
            console.log('BACKSLASH KEY UP')
        },
    },

    semicolonKey: {
        name: "'Semicolon' Key",

        sendDown: () => {
            ipcRenderer.send("SEMICOLON_KEY_DOWN")
            console.log('SEMICOLON KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("SEMICOLON_KEY_UP")
            console.log('SEMICOLON KEY UP')
        },
    },

    quoteKey: {
        name: "'Quote' Key",

        sendDown: () => {
            ipcRenderer.send("QUOTE_KEY_DOWN")
            console.log('QUOTE KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("QUOTE_KEY_UP")
            console.log('QUOTE KEY UP')
        },
    },

    returnKey: {
        name: "'Return' Key",

        sendDown: () => {
            ipcRenderer.send("RETURN_KEY_DOWN")
            console.log('RETURN KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("RETURN_KEY_UP")
            console.log('RETURN KEY UP')
        },
    },

    comaKey: {
        name: "'Coma' Key",

        sendDown: () => {
            ipcRenderer.send("COMMA_KEY_DOWN")
            console.log('COMA KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("COMMA_KEY_UP")
            console.log('COMA KEY UP')
        },
    },

    periodKey: {
        name: "'Period' Key",

        sendDown: () => {
            ipcRenderer.send("PERIOD_KEY_DOWN")
            console.log('PERIOD KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("PERIOD_KEY_UP")
            console.log('PERIOD KEY UP')
        },
    },

    slashKey: {
        name: "'Slash' Key",

        sendDown: () => {
            ipcRenderer.send("SLASH_KEY_DOWN")
            console.log('SLASH KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("SLASH_KEY_UP")
            console.log('SLASH KEY UP')
        },
    },

    leftKey: {
        name: "'Left' Key",

        sendDown: () => {
            ipcRenderer.send("LEFT_KEY_DOWN")
            console.log('LEFT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("LEFT_KEY_UP")
            console.log('LEFT KEY UP')
        },

    },


    upKey: {
        name: "'Up' Key",

        sendDown: () => {
            ipcRenderer.send("UP_KEY_DOWN")
            console.log('UP KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("UP_KEY_UP")
            console.log('UP KEY UP')
        },

    },

    rightKey: {
        name: "'Right' Key",

        sendDown: () => {
            ipcRenderer.send("RIGHT_KEY_DOWN")
            console.log('RIGHT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("RIGHT_KEY_UP")
            console.log('RIGHT KEY UP')
        },

    },

    downKey: {
        name: "'Down' Key",

        sendDown: () => {
            ipcRenderer.send("DOWN_KEY_DOWN")
            console.log('DOWN KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("DOWN_KEY_UP")
            console.log('DOWN KEY UP')
        },

    },

    printKey: {
        name: "'Print' Key",

        sendDown: () => {
            ipcRenderer.send("PRINT_KEY_DOWN")
            console.log('PRINT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("PRINT_KEY_UP")
            console.log('PRINT KEY UP')
        },

    },

    pauseKey: {
        name: "'Pause' Key",

        sendDown: () => {
            ipcRenderer.send("PAUSE_KEY_DOWN")
            console.log('PAUSE KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("PAUSE_KEY_UP")
            console.log('PAUSE KEY UP')
        },

    },

    insertKey: {
        name: "'Insert' Key",

        sendDown: () => {
            ipcRenderer.send("INSERT_KEY_DOWN")
            console.log('INSERT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("INSERT_KEY_UP")
            console.log('INSERT KEY UP')
        },

    },

    deleteKey: {
        name: "'Delete' Key",

        sendDown: () => {
            ipcRenderer.send("DELETE_KEY_DOWN")
            console.log('DELETE KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("DELETE_KEY_UP")
            console.log('DELETE KEY UP')
        },

    },

    homeKey: {
        name: "'Home' Key",

        sendDown: () => {
            ipcRenderer.send("HOME_KEY_DOWN")
            console.log('HOME KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("HOME_KEY_UP")
            console.log('HOME KEY UP')
        },

    },

    endKey: {
        name: "'End' Key",

        sendDown: () => {
            ipcRenderer.send("END_KEY_DOWN")
            console.log('END KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("END_KEY_UP")
            console.log('END KEY UP')
        },

    },

    pageUpKey: {
        name: "'Page Up' Key",

        sendDown: () => {
            ipcRenderer.send("PAGEUP_KEY_DOWN")
            console.log('PAGE UP KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("PAGEUP_KEY_UP")
            console.log('PAGE UP KEY UP')
        },

    },

    pageDownKey: {
        name: "'Page Down' Key",

        sendDown: () => {
            ipcRenderer.send("PAGEDOWN_KEY_DOWN")
            console.log('PAGE DOWN KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("PAGEDOWN_KEY_UP")
            console.log('PAGE DOWN KEY UP')
        },

    },

    addKey: {
        name: "'Add' Key",

        sendDown: () => {
            ipcRenderer.send("ADD_KEY_DOWN")
            console.log('ADD KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("ADD_KEY_UP")
            console.log('ADD KEY UP')
        },

    },

    subtractKey: {
        name: "'Subtract' Key",

        sendDown: () => {
            ipcRenderer.send("SUBTRACT_KEY_DOWN")
            console.log('SUBTRACT KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("SUBTRACT_KEY_UP")
            console.log('SUBTRACT KEY UP')
        },

    },

    multiplyKey: {
        name: "'Multiply' Key",

        sendDown: () => {
            ipcRenderer.send("MULTIPLY_KEY_DOWN")
            console.log('MULTIPLY KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("MULTIPLY_KEY_UP")
            console.log('MULTIPLY KEY UP')
        },

    },
    
    divideKey: {
        name: "'Divide' Key",

        sendDown: () => {
            ipcRenderer.send("DIVIDE_KEY_DOWN")
            console.log('DIVIDE KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("DIVIDE_KEY_UP")
            console.log('DIVIDE KEY UP')
        },

    },

    decimalKey: {
        name: "'Decimal' Key",

        sendDown: () => {
            ipcRenderer.send("DECIMAL_KEY_DOWN")
            console.log('DECIMAL KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("DECIMAL_KEY_UP")
            console.log('DECIMAL KEY UP')
        },

    },

    enterKey: {
        name: "'Enter' Key",

        sendDown: () => {
            ipcRenderer.send("ENTER_KEY_DOWN")
            console.log('ENTER KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("ENTER_KEY_UP")
            console.log('ENTER KEY UP')
        },

    },

    numpad0Key: {
        name: "'Numpad 0' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD0_KEY_DOWN")
            console.log('NUMPAD 0 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD0_KEY_UP")
            console.log('NUMPAD 0 KEY UP')
        },

    },

    numpad1Key: {
        name: "'Numpad 1' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD1_KEY_DOWN")
            console.log('NUMPAD 1 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD1_KEY_UP")
            console.log('NUMPAD 1 KEY UP')
        },

    },

    numpad2Key: {
        name: "'Numpad 2' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD2_KEY_DOWN")
            console.log('NUMPAD 2 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD2_KEY_UP")
            console.log('NUMPAD 2 KEY UP')
        },

    },

    numpad3Key: {
        name: "'Numpad 3' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD3_KEY_DOWN")
            console.log('NUMPAD 3 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD3_KEY_UP")
            console.log('NUMPAD 3 KEY UP')
        },

    },

    numpad4Key: {
        name: "'Numpad 4' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD4_KEY_DOWN")
            console.log('NUMPAD 4 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD4_KEY_UP")
            console.log('NUMPAD 4 KEY UP')
        },

    },

    numpad5Key: {
        name: "'Numpad 5' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD5_KEY_DOWN")
            console.log('NUMPAD 5 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD5_KEY_UP")
            console.log('NUMPAD 5 KEY UP')
        },

    },

    numpad6Key: {
        name: "'Numpad 6' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD6_KEY_DOWN")
            console.log('NUMPAD 6 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD6_KEY_UP")
            console.log('NUMPAD 6 KEY UP')
        },

    },

    numpad7Key: {
        name: "'Numpad 7' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD7_KEY_DOWN")
            console.log('NUMPAD 7 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD7_KEY_UP")
            console.log('NUMPAD 7 KEY UP')
        },

    },

    numpad8Key: {
        name: "'Numpad 8' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD8_KEY_DOWN")
            console.log('NUMPAD 8 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD8_KEY_UP")
            console.log('NUMPAD 8 KEY UP')
        },

    },

    numpad9Key: {
        name: "'Numpad 9' Key",

        sendDown: () => {
            ipcRenderer.send("NUMPAD9_KEY_DOWN")
            console.log('NUMPAD 9 KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMPAD9_KEY_UP")
            console.log('NUMPAD 9 KEY UP')
        },

    },

    capsLockKey: {
        name: "'Caps Lock' Key",

        sendDown: () => {
            ipcRenderer.send("CAPSLOCK_KEY_DOWN")
            console.log('CAPSLOCK KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("CAPSLOCK_KEY_UP")
            console.log('CAPSLOCK KEY UP')
        },

    },

    scrollLockKey: {
        name: "'Scroll Lock' Key",

        sendDown: () => {
            ipcRenderer.send("SCROLLLOCK_KEY_DOWN")
            console.log('SCROLL LOCK KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("SCROLLLOCK_KEY_UP")
            console.log('SCROLL LOCK KEY UP')
        },

    },

    numLockKey: {
        name: "'Num Lock' Key",

        sendDown: () => {
            ipcRenderer.send("NUMLOCK_KEY_DOWN")
            console.log('NUM LOCK KEY DOWN')
        },
        sendUp: () => {
            ipcRenderer.send("NUMLOCK_KEY_UP")
            console.log('NUM LOCK KEY UP')
        },

    },



}



