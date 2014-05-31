// #targetengine "session"; // main, plugin
// //Set to 8.0 scripting object model
// app.scriptPreferences.version = 8.0;
// app.scriptPreferences.enableRedraw = true;
var windowWidth = 350;
var mimWin = new Window('dialog', 'AES Toolkit', undefined, {
    borderless: false
});
var mimWinPnl = mimWin.add('panel', undefined, 'AES mini-kit');
descriptionText = mimWinPnl.add('staticText', undefined, 'a set of tools to help development of Adobe Extendscript scripts (currently just includes Graphic2Texture!)', {
    helpTip: 'Toolkit Descriptions',
    indent: 6,
    multiline: true,
    scrolling: false,
    justify: "center"
});
descriptionText.preferredSize = [windowWidth, 36];
var tpanel = mimWinPnl.add("tabbedpanel");
tpanel.alignChildren = ["fill", "fill"];
tpanel.preferredSize = [windowWidth, 300];
var g2tPanel = tpanel.add("tab", undefined, "Graphic 2 Text");
fileURItext = g2tPanel.add("edittext", undefined, "Enter your image file address or use the browse button!");
fileURItext.preferredSize.width = windowWidth;
g2tPanel.layout.layout();
fileURItext.active = true; // this line must follow w.layout.layout() 
var g2tBrowseBtn = g2tPanel.add('button', undefined, 'Browse', {
    name: 'myBtn'
});
g2tBrowseBtn.preferredSize.width = windowWidth;
g2tBrowseBtn.onClick = function() {
    fileURItext.text = fileBrowser();
}
var g2tGoBtn = g2tPanel.add('button', undefined, 'Convert!');
g2tGoBtn.preferredSize.width = windowWidth;
g2tGoBtn.onClick = function() {
    g2tConvertFunction();
}
var g2tResults = g2tPanel.add("edittext", undefined, "Here you can copy your graphic string once it was ready!");
g2tResults.preferredSize.width = windowWidth;
g2tseparator1 = g2tPanel.add('panel', undefined, undefined).preferredSize.width = windowWidth + 33;
g2tdescriptionTextPnl = g2tPanel.add('panel', undefined, 'about this function!');
g2tdescriptionText = g2tdescriptionTextPnl.add('staticText', undefined, '\ntechnique used in texture 2 graphic was first introduced by Bob Stucky (according to Peter Kahrel in his very useful book: Beginning ScriptUI) in adobe forumes and Peter himself further developed it and suggest a function to do the job.\nhere I\'m just pretty much wrapping it in a UI for easier use, with a bit of improvements, so credits goes to these two AES legends! :)', {
    helpTip: '!mim! motif generator',
    indent: 6,
    multiline: true,
    scrolling: false,
    justify: "center"
});
g2tdescriptionText.preferredSize = [windowWidth, 120];
var aboutPanel = tpanel.add("tab", undefined, "About");
var aboutPanelText = aboutPanel.add('staticText', undefined, 'About text Needs to be added!\n\n\nmim.Armand\n2014\nParis', {
    multiline: true
});

function fileBrowser() {
    myFolder = File.openDialog("please choose an image", "All files: *.*, PNG: *.png, ID Icons: *.idrc, JPG: *.jpg", false);
    return (myFolder);
}
mimWin.show();

function g2tConvertFunction() {
    var re1 = /^\(new String\(/,
        re2 = /\)\)$/;
    var infile = File(fileURItext.text);
    infile.open("r");
    infile.encoding = "binary";
    var temp = infile.read();
    var temp2 = temp.toSource().replace(re1, " ").replace(re2, " ;");
    infile.close();
    g2tResults.text = temp2;
    g2tResults.active = true;
    // return('test');
    // temp.toSource();
}


/*  Bob Stucky Code:
var infile = File("/d/test_jpg/icon.png");
var outfile = File("/d/test_jpg/icon.txt");
infile.open("r");
infile.encoding = "binary";
var temp = infile.read();
infile.close();
outfile.open("w");
outfile.write(temp.toSource());
outfile.close();
*/
/*Peter Kahrel's function:
function graphic_to_text(infiles) {
    var outfile, s, re1 = /^\(new String\(/,
        re2 = /\)\)$/;
    for (var i = 0; i < infiles.length; i++) {
        if (infiles[i].exists) {
            outfile = File(infiles[i].fullName.replace(/\.(png|idrc|jpg)$/, ".txt"));
            infiles[i].open("r");
            infiles[i].encoding = "BINARY";
            outfile.open("w");
            s = infiles[i].read();
            outfile.write(s.toSource().replace(re1, " ").replace(re2, " ;"));
            infiles[i].close();
            outfile.close();
        }
    }
}
*/