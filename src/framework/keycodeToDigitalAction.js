// names of known key codes (0-255)
// let digitalAction = DigitalAction

var keycodeToDigitalAction = [
    "", // [0]
    "", // [1]
    "", // [2]
    "CANCEL", // [3]
    "", // [4]
    "", // [5]
    "HELP", // [6]
    "", // [7]
    DigitalAction.backspaceKey, // [8]
    DigitalAction.tabKey, // [9]
    "", // [10]
    "", // [11]
    "CLEAR", // [12]
    DigitalAction.returnKey, // [13]
    "ENTER_SPECIAL", // [14]
    "", // [15]
    DigitalAction.leftShiftKey, // [16]
    DigitalAction.leftControlKey, // [17]
    DigitalAction.leftAltKey, // [18]
    DigitalAction.pauseKey, // [19]
    DigitalAction.capsLockKey, // [20]
    "KANA", // [21]
    "EISU", // [22]
    "JUNJA", // [23]
    "FINAL", // [24]
    "HANJA", // [25]
    "", // [26]
    DigitalAction.escapeKey, // [27]
    "CONVERT", // [28]
    "NONCONVERT", // [29]
    "ACCEPT", // [30]
    "MODECHANGE", // [31]
    DigitalAction.spaceKey, // [32]
    DigitalAction.pageUpKey, // [33]
    DigitalAction.pageDownKey, // [34]
    DigitalAction.endKey, // [35]
    DigitalAction.homeKey, // [36]
    DigitalAction.leftKey, // [37]
    DigitalAction.upKey, // [38]
    DigitalAction.rightKey, // [39]
    DigitalAction.downKey, // [40]
    "SELECT", // [41]
    DigitalAction.printKey, // [42]
    "EXECUTE", // [43]
    "PRINTSCREEN", // [44]
    DigitalAction.insertKey, // [45]
    DigitalAction.deleteKey, // [46]
    "", // [47]
    DigitalAction.num0Key, // [48]
    DigitalAction.num1Key, // [49]
    DigitalAction.num2Key, // [50]
    DigitalAction.num3Key, // [51]
    DigitalAction.num4Key, // [52]
    DigitalAction.num5Key, // [53]
    DigitalAction.num6Key, // [54]
    DigitalAction.num7Key, // [55]
    DigitalAction.num8Key, // [56]
    DigitalAction.num9Key, // [57]
    "COLON", // [58]
    DigitalAction.semicolonKey, // [59]
    "LESS_THAN", // [60]
    "EQUALS", // [61]
    "GREATER_THAN", // [62]
    "QUESTION_MARK", // [63]
    "AT", // [64]
    DigitalAction.aKey, // [65]
    DigitalAction.bKey, // [66]
    DigitalAction.cKey, // [67]
    DigitalAction.dKey, // [68]
    DigitalAction.eKey, // [69]
    DigitalAction.fKey, // [70]
    DigitalAction.gKey, // [71]
    DigitalAction.hKey, // [72]
    DigitalAction.iKey, // [73]
    DigitalAction.jKey, // [74]
    DigitalAction.kKey, // [75]
    DigitalAction.lKey, // [76]
    DigitalAction.mKey, // [77]
    DigitalAction.nKey, // [78]
    DigitalAction.oKey, // [79]
    DigitalAction.pKey, // [80]
    DigitalAction.qKey, // [81]
    DigitalAction.rKey, // [82]
    DigitalAction.sKey, // [83]
    DigitalAction.tKey, // [84]
    DigitalAction.uKey, // [85]
    DigitalAction.vKey, // [86]
    DigitalAction.wKey, // [87]
    DigitalAction.xKey, // [88]
    DigitalAction.yKey, // [89]
    DigitalAction.zKey, // [90]
    "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
    "", // [92]
    "CONTEXT_MENU", // [93]
    "", // [94]
    "SLEEP", // [95]
    DigitalAction.numpad0Key, // [96]
    DigitalAction.numpad1Key, // [97]
    DigitalAction.numpad2Key, // [98]
    DigitalAction.numpad3Key, // [99]
    DigitalAction.numpad4Key, // [100]
    DigitalAction.numpad5Key, // [101]
    DigitalAction.numpad6Key, // [102]
    DigitalAction.numpad7Key, // [103]
    DigitalAction.numpad8Key, // [104]
    DigitalAction.numpad9Key, // [105]
    DigitalAction.numpad10Key, // [106]
    DigitalAction.addKey, // [107]
    "SEPARATOR", // [108]
    DigitalAction.subtractKey, // [109]
    DigitalAction.decimalKey, // [110]
    DigitalAction.divideKey, // [111]
    DigitalAction.f1Key, // [112]
    DigitalAction.f2Key, // [113]
    DigitalAction.f3Key, // [114]
    DigitalAction.f4Key, // [115]
    DigitalAction.f5Key, // [116]
    DigitalAction.f6Key, // [117]
    DigitalAction.f7Key, // [118]
    DigitalAction.f8Key, // [119]
    DigitalAction.f9Key, // [120]
    DigitalAction.f10Key, // [121]
    DigitalAction.f11Key, // [122]
    DigitalAction.f12Key, // [123]
    "F13", // [124]
    "F14", // [125]
    "F15", // [126]
    "F16", // [127]
    "F17", // [128]
    "F18", // [129]
    "F19", // [130]
    "F20", // [131]
    "F21", // [132]
    "F22", // [133]
    "F23", // [134]
    "F24", // [135]
    "", // [136]
    "", // [137]
    "", // [138]
    "", // [139]
    "", // [140]
    "", // [141]
    "", // [142]
    "", // [143]
    DigitalAction.numLockKey, // [144]
    DigitalAction.scrollLockKey, // [145]
    "WIN_OEM_FJ_JISHO", // [146]
    "WIN_OEM_FJ_MASSHOU", // [147]
    "WIN_OEM_FJ_TOUROKU", // [148]
    "WIN_OEM_FJ_LOYA", // [149]
    "WIN_OEM_FJ_ROYA", // [150]
    "", // [151]
    "", // [152]
    "", // [153]
    "", // [154]
    "", // [155]
    "", // [156]
    "", // [157]
    "", // [158]
    "", // [159]
    "CIRCUMFLEX", // [160]
    "EXCLAMATION", // [161]
    "DOUBLE_QUOTE", // [162]
    "HASH", // [163]
    "DOLLAR", // [164]
    "PERCENT", // [165]
    "AMPERSAND", // [166]
    "UNDERSCORE", // [167]
    "OPEN_PAREN", // [168]
    "CLOSE_PAREN", // [169]
    "ASTERISK", // [170]
    "PLUS", // [171]
    "PIPE", // [172]
    "HYPHEN_MINUS", // [173]
    DigitalAction.leftBracketKey, // [174]
    DigitalAction.rightBracketKey, // [175]
    "TILDE", // [176]
    "", // [177]
    "", // [178]
    "", // [179]
    "", // [180]
    "VOLUME_MUTE", // [181]
    "VOLUME_DOWN", // [182]
    "VOLUME_UP", // [183]
    "", // [184]
    "", // [185]
    "SEMICOLON", // [186]
    DigitalAction.equalKey, // [187]
    DigitalAction.comaKey, // [188]
    DigitalAction.minusKey, // [189]
    DigitalAction.periodKey, // [190]
    DigitalAction.slashKey, // [191]
    "BACK_QUOTE", // [192]
    "", // [193]
    "", // [194]
    "", // [195]
    "", // [196]
    "", // [197]
    "", // [198]
    "", // [199]
    "", // [200]
    "", // [201]
    "", // [202]
    "", // [203]
    "", // [204]
    "", // [205]
    "", // [206]
    "", // [207]
    "", // [208]
    "", // [209]
    "", // [210]
    "", // [211]
    "", // [212]
    "", // [213]
    "", // [214]
    "", // [215]
    "", // [216]
    "", // [217]
    "", // [218]
    "OPEN_BRACKET", // [219]
    DigitalAction.backslashKey, // [220]
    "CLOSE_BRACKET", // [221]
    DigitalAction.quoteKey, // [222]
    "", // [223]
    "META", // [224]
    "ALTGR", // [225]
    "", // [226]
    "WIN_ICO_HELP", // [227]
    "WIN_ICO_00", // [228]
    "", // [229]
    "WIN_ICO_CLEAR", // [230]
    "", // [231]
    "", // [232]
    "WIN_OEM_RESET", // [233]
    "WIN_OEM_JUMP", // [234]
    "WIN_OEM_PA1", // [235]
    "WIN_OEM_PA2", // [236]
    "WIN_OEM_PA3", // [237]
    "WIN_OEM_WSCTRL", // [238]
    "WIN_OEM_CUSEL", // [239]
    "WIN_OEM_ATTN", // [240]
    "WIN_OEM_FINISH", // [241]
    "WIN_OEM_COPY", // [242]
    "WIN_OEM_AUTO", // [243]
    "WIN_OEM_ENLW", // [244]
    "WIN_OEM_BACKTAB", // [245]
    "ATTN", // [246]
    "CRSEL", // [247]
    "EXSEL", // [248]
    "EREOF", // [249]
    "PLAY", // [250]
    "ZOOM", // [251]
    "", // [252]
    "PA1", // [253]
    "WIN_OEM_CLEAR", // [254]
    "" // [255]
  ];