const app = "Visual Studio Code";
const menu = ["General", "Edit", "Selection", "Search", "Rich Lang.", "Navigation", "Editor", "File", "Display", "Terminal"];

module.exports.shortcuts = [
    {       //----------------------------------------------General
    "application":  app,
    "func":         "Show Command Palette",
    "combo":        "Shift Command P then F1",
    "menu":         menu[0]
    },
    {
    "application":  app,
    "func":         "Quick Open, Go to File...",
    "combo":        "Command P",
    "menu":         menu[0]
    },
    {
    "application":  app,
    "func":         "New window/instance",
    "combo":        "Shift Command N",
    "menu":         menu[0]
    },
    {
    "application":  app,
    "func":         "Close window/instance",
    "combo":        "Command W",
    "menu":         menu[0]
    },
    {
    "application":  app,
    "func":         "User Settings",
    "combo":        "Command ,",
    "menu":         menu[0]
    },
    {
    "application":  app,
    "func":         "Keyboard Shortcuts",
    "combo":        "Command K then Command S",
    "menu":         menu[0]
    }, 
    {    //----------------------------------------------Edit
    "application":  app,
    "func":         "Cut line (empty selection)",
    "combo":        "Command X",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Copy line (empty selection)",
    "combo":        "Command C",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Move line down/up",
    "combo":        "Option Down / Option Up",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Copy line down/up",
    "combo":        "Shift Option Down / Shift Option Up",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Delete line",
    "combo":        "Shift Command K",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Insert line below/above",
    "combo":        "Command Enter / Shift Command Enter",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Jump to matching bracket",
    "combo":        "Shift Command \\",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Indent/outdent line",
    "combo":        "Command ] / Command [",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Go to beginning/end of line",
    "combo":        "Home / End",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Go to beginning/end of file",
    "combo":        "Command Up / Command Down",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Scroll line up/down",
    "combo":        "Control Command gUp / Control Command gDn",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Scroll page up/down",
    "combo":        "Command PageUp /Command PageDown",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Fold/unfold region",
    "combo":        "Option Command [ / Option Command ]",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Fold/unfold all subregions",
    "combo":        "Command KCommand [ / Command KCommand ]",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Fold/unfold all regions",
    "combo":        "Command KCommand 0 / Command KCommand J",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Add line comment",
    "combo":        "Command K Command C",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Remove line comment",
    "combo":        "Command K Command U",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Toggle line comment",
    "combo":        "Command /",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Toggle block comment",
    "combo":        "Shift Option A",
    "menu":         menu[1]
    },
    {
    "application":  app,
    "func":         "Toggle word wrap",
    "combo":        "Option Z",
    "menu":         menu[1]
    },  //----------------------------------------------Selection
    {   
    "application":  app,
    "func":         "Insert cursor",
    "combo":        "Option and click",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Insert cursor above",
    "combo":        "Option Command Up",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Insert cursor below",
    "combo":        "Option Command Down",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Undo last cursor operation",
    "combo":        "Command U",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Insert cursor at end of each line selected",
    "combo":        "Shift Option I",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Select current line",
    "combo":        "Command L",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Select all occurrences of current selection",
    "combo":        "Shift Command L",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Select all occurrences of current word",
    "combo":        "Command F2",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Expand / shrink selection",
    "combo":        "Control Command hift Command Right / Left",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Column (box) selection",
    "combo":        "Shift Option  and drag mouse",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Column (box) selection up/down",
    "combo":        "Shift Option Command Up / Down",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Column (box) selection left/right",
    "combo":        "Shift Option Command Left / Right",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Column (box) selection page up",
    "combo":        "Shift Option Command PageUp",
    "menu":         menu[2]
    },
    {   
    "application":  app,
    "func":         "Column (box) selection page down",
    "combo":        "Shift Option Command PageDown",
    "menu":         menu[2]
    }, //------------------------------------------------Search
    {   
    "application":  app,
    "func":         "Find",
    "combo":        "Command F",
    "menu":         menu[3]
    },
    {   
    "application":  app,
    "func":         "Replace",
    "combo":        "Option Command F",
    "menu":         menu[3]
    },
    {   
    "application":  app,
    "func":         "Find next/previous",
    "combo":        "Command G / Shift Command G",
    "menu":         menu[3]
    },
    {   
    "application":  app,
    "func":         "Select all occurrences of Find match",
    "combo":        "Option Enter",
    "menu":         menu[3]
    },
    {   
    "application":  app,
    "func":         "Add selection to next Find match",
    "combo":        "Command D",
    "menu":         menu[3]
    },
    {   
    "application":  app,
    "func":         "Move last selection to next Find match",
    "combo":        "Command K Command D",
    "menu":         menu[3]
    },  //-------------------------------------Rich Language
    {   
    "application":  app,
    "func":         "Trigger suggestion",
    "combo":        "Control Command pace",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Trigger parameter hints",
    "combo":        "Shift Command Space",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Format document",
    "combo":        "Shift Option F",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Format selection",
    "combo":        "Command K Command F",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Go to Definition",
    "combo":        "F12",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Peek Definition",
    "combo":        "Option F12",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Open Definition to the side",
    "combo":        "Command K F12",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Quick Fix",
    "combo":        "Command .",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Show References",
    "combo":        "Shift F12",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Rename Symbol",
    "combo":        "F2",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Trim trailing whitespace",
    "combo":        "Command K Command X",
    "menu":         menu[4]
    },
    {   
    "application":  app,
    "func":         "Change file language",
    "combo":        "Command K M",
    "menu":         menu[4]
    },  //---------------------------------------------Navigation
    {   
    "application":  app,
    "func":         "Show all Symbols",
    "combo":        "Command T",
    "menu":         menu[5]
    },
    {   
    "application":  app,
    "func":         "Go to Line...",
    "combo":        "Control Command ",
    "menu":         menu[5]
    },
    {   
    "application":  app,
    "func":         "Go to File...",
    "combo":        "Command P",
    "menu":         menu[5]
    },
    {   
    "application":  app,
    "func":         "Go to Symbol...",
    "combo":        "Shift Command O",
    "menu":         menu[5]
    },
    {   
    "application":  app,
    "func":         "Show Problems panel",
    "combo":        "Shift Command M",
    "menu":         menu[5]
    },
    {   
    "application":  app,
    "func":         "Go to next/previous error or warning",
    "combo":        "F8 or Shift F8",
    "menu":         menu[5]
    },
    {   
    "application":  app,
    "func":         "Navigate editor group history",
    "combo":        "Control Command Tab",
    "menu":         menu[5]
    },
    {   
    "application":  app,
    "func":         "Go back/forward",
    "combo":        "Control Command  / Control Command -",
    "menu":         menu[5]
    },
    {   
    "application":  app,
    "func":         "Toggle Tab moves focus",
    "combo":        "Control Command M",
    "menu":         menu[5]
    },  //-----------------------------------------------Editor
    {   
    "application":  app,
    "func":         "Close editor",
    "combo":        "Command W",
    "menu":         menu[6]
    },  
    {   
    "application":  app,
    "func":         "Close folder",
    "combo":        "Command KF",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Split editor",
    "combo":        "Command \\",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Focus into 1st, 2nd, 3rd editor group",
    "combo":        "Command 1/Command 2/Command 3",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Focus into previous/next editor group",
    "combo":        "Command KCommand ←/Command KCommand →",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Move editor left/right",
    "combo":        "Command K Shift Command ← / Command K Shift Command →",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Move active editor group",
    "combo":        "Command K ← / Command K →",
    "menu":         menu[6]
    },  //--------------------------------------------File
    {   
    "application":  app,
    "func":         "New File",
    "combo":        "Command N",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Open File...",
    "combo":        "Command O",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Save",
    "combo":        "Command S",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Save As...",
    "combo":        "Shift Command S",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Save All",
    "combo":        "Option Command S",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Close",
    "combo":        "Command W",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Close All",
    "combo":        "Command K then Command W",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Reopen closed editor",
    "combo":        "Shift Command T",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Keep preview mode editor open",
    "combo":        "Command K Enter",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Open next / previous",
    "combo":        "Control Tab / Control Shift Tab",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Copy path of active file",
    "combo":        "Command K P",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Reveal active file in Finder",
    "combo":        "Command K R",
    "menu":         menu[6]
    },
    {   
    "application":  app,
    "func":         "Show active file in new window/instance",
    "combo":        "Command K O",
    "menu":         menu[6]
    },  //---------------------------------------------Display
    {   
    "application":  app,
    "func":         "Toggle full screen",
    "combo":        "Control Command F",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Toggle editor layout (horizontal/vertical)",
    "combo":        "Option Command 0",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Zoom in/out",
    "combo":        "Command = or Shift Command -",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Toggle Sidebar visibility",
    "combo":        "Command B",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Show Explorer / Toggle Focus",
    "combo":        "Shift Command E",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Show Search",
    "combo":        "Shift Command F",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Show Source Control",
    "combo":        "Control Command G",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Show Debug",
    "combo":        "Shift Command D",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Show Extensions",
    "combo":        "Shift Command X",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Replace in files",
    "combo":        "Shift Command H",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Toggle Search details",
    "combo":        "Shift Command J",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Show Output panel",
    "combo":        "Shift Command U",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Open Markdown preview",
    "combo":        "Shift Command V",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Open Markdown preview to the side",
    "combo":        "Command K V",
    "menu":         menu[7]
    },
    {   
    "application":  app,
    "func":         "Zen Mode(Esc Esc to exit)",
    "combo":        "Command K Z",
    "menu":         menu[7]
    },  //--------------------------------------Debug
    {   
    "application":  app,
    "func":         "Toggle breakpoint",
    "combo":        "F9",
    "menu":         menu[8]
    },
    {   
    "application":  app,
    "func":         "Start/Continue",
    "combo":        "F5",
    "menu":         menu[8]
    },
    {   
    "application":  app,
    "func":         "Step into/out",
    "combo":        "F11 or Shift F11",
    "menu":         menu[8]
    },
    {   
    "application":  app,
    "func":         "Step over",
    "combo":        "F10",
    "menu":         menu[8]
    },
    {   
    "application":  app,
    "func":         "Stop",
    "combo":        "Shift F5",
    "menu":         menu[8]
    },
    {   
    "application":  app,
    "func":         "Show hover",
    "combo":        "Command K then Command I",
    "menu":         menu[8]
    },  //--------------------------------------------Terminal
    {   
    "application":  app,
    "func":         "Show integrated terminal",
    "combo":        "Control `",
    "menu":         menu[9]
    },
    {   
    "application":  app,
    "func":         "Create new terminal",
    "combo":        "Control Shift `",
    "menu":         menu[9]
    },
    {   
    "application":  app,
    "func":         "Copy selection",
    "combo":        "Command C",
    "menu":         menu[9]
    },
    {   
    "application":  app,
    "func":         "Scroll up/down",
    "combo":        "Command Up or Down",
    "menu":         menu[9]
    },
    {   
    "application":  app,
    "func":         "Scroll page up/down",
    "combo":        "PageUp or PageDown",
    "menu":         menu[9]
    },
    {   
    "application":  app,
    "func":         "Scroll to top/bottom",
    "combo":        "Command Home or End",
    "menu":         menu[9]
    },
]