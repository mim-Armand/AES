#targetengine "session"; // main, plugin
//Set to 8.0 scripting object model
app.scriptPreferences.version = 8.0;
app.scriptPreferences.enableRedraw = true;
var windowWidth = 369;
var mimWin = new Window('window', 'AES Toolkit', undefined, {
    borderless: false
});
var mimWinPnl = mimWin.add('panel', undefined, 'AES mini-kit');
descriptionText = mimWinPnl.add('staticText', undefined, 'a set of tools to help development of Adobe Extendscript!', {
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
var g2tPrg = g2tPanel.add('progressbar', undefined,0,100);
g2tPrg.value = 0;
g2tPrg.preferredSize=[windowWidth,2]
var g2tShowBtn = g2tPanel.add('button', undefined, 'Show Image!');
g2tShowBtn.preferredSize.width = windowWidth;
g2tShowBtn.onClick = function() {
    var g2tShowDialog = new Window('dialog', 'Graphic 2 text', undefined, {
    borderless: false
    });
    // var myIcon=new File(Folder.userData.absoluteURI +"/g2tTemp.png" );  
    //  //Folder.userData.absoluteURI +
    // myIcon.encoding = "binary";
    // myIcon.open( "w" );
    // myIcon.write(g2tIcon);  
    // myIcon.close();  
    
    g2tShowDialog.add('image',undefined, File(fileURItext.text));
    // myIcon.remove();
    // var g2tImgBtn = g2tShowDialog.add('iconButton',undefined, g2tIcon);
    // g2tImgBtn.active=true;
    // var g2tImg = g2tShowDialog.add ('image', undefined, File(fileURItext.text));
    // var flowers = g2tShowDialog.add ("image", undefined, File ("~/Desktop/Aikos/UI/UI_02/UI_elements/first_page/home_icon_01.png"));
    g2tShowDialog.show();
}
g2tseparator1 = g2tPanel.add('panel', undefined, undefined).preferredSize.width = windowWidth + 33;
g2tdescriptionTextPnl = g2tPanel.add('panel', undefined, 'about this function!');
g2tdescriptionText = g2tdescriptionTextPnl.add('staticText', undefined, '\ntechnique used in texture 2 graphic was first introduced by Bob Stucky (according to Peter Kahrel in his very useful book: Beginning ScriptUI) in adobe forumes and Peter himself further developed it and suggest a function to do the job.\nhere I\'m just pretty much wrapping it in a UI for easier use, with a bit of improvements, so credits goes to these AES legends! :)', {
    indent: 6,
    multiline: true,
    scrolling: false,
    justify: "center"
});
var infoTab = tpanel.add("tab", undefined, "info");
var inforText = infoTab.add('staticText', undefined, 'Init . . . \n \n \n \n \n \n \n \n \n \n \n \n \n',{
    multiline: true
});
inforText.preferredSize.width = windowWidth;
var infoRefreshBtn = infoTab.add('button', undefined, 'Refresh!');
infoRefreshBtn.preferredSize.width = windowWidth;
infoRefreshBtn.onClick = function(){
    mimGetInfo();
}
g2tdescriptionText.preferredSize = [windowWidth, 120];

var indiconsTab = tpanel.add("tab", undefined, "Indesign Icons");
indiconsTab.add('staticText',undefined,'\n\n\n\n\nto be added in next versions (need some improvements still',{multiline:true});

var aboutPanel = tpanel.add("tab", undefined, "About");
var aboutPanelText = aboutPanel.add('staticText', undefined, 'About text Needs to be added!\n...\n\n\nmim.Armand\n2014\nParis\n\n\nhttp://armand.eu', {
    multiline: true
}).preferredSize.width = windowWidth;
mimWin.show();
function fileBrowser() {
    myFolder = File.openDialog("please choose an image", "All files: *.*, PNG: *.png, ID Icons: *.idrc,Joint Photographic Experts Group : *.jpg", false);
    g2tResults.text = '...';
    return (myFolder);
}
var g2tIcon = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\"iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.3-c011 66.145661, 2012/02/06-14:56:27        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmp:CreatorTool=\"Adobe Photoshop CS6 (Windows)\" xmpMM:InstanceID=\"xmp.iid:7BC1DE3EE90411E392AECD0413FB65ED\" xmpMM:DocumentID=\"xmp.did:7BC1DE3FE90411E392AECD0413FB65ED\"> <xmpMM:DerivedFrom stRef:instanceID=\"xmp.iid:7BC1DE3CE90411E392AECD0413FB65ED\" stRef:documentID=\"xmp.did:7BC1DE3DE90411E392AECD0413FB65ED\"/> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00DB!V\u009E\x00\x00\x02,IDATx\u00DA\u008C\u00D4\u00CBk\x13Q\x14\u00C7\u00F1;I\u009A\u00B6R_\u00D4j\u00D5\u00A6b\x11\u00A9\u0088 \u00AD\"\u00AE\x14A7*h\x16\u0082\u00D8\u009D\x0B7B\u00FB\x1F\u00E8\u00A6u\u00E3\u00A2Y\u008A\u00B8\u00F1\x01*(\u0082\u00A0\u00E2N\\\u00AA\u00A8\u00ABbE]\u0088\u00B6\u008A\u00A8\u00F1A3\u00CDt\u00AE\u00DF;\u00FCR\u00AE#\u0089s\u00E1\u00C3@f\u00E6\u00E4\u00DC3\u00E7\\c\u00AD5\u00AD\u00B0:p\n\u00AF\u00B0\u00DB\u00FD\u00D0\u00EA\u00F9\u0082\u00F1\u00D6\u0095\u00D2\u00B0\u00BB\x14\u00B1\x1C\u00DF\x10\u00E9V \u00FF]\u00B9T\u00B0U\x18\u00C1\x04v\u00A0\u00CD\x0Bh\u00B3\x04\u00F53,*\u00D88\u00E6\u00B1\r'\u00F1\u00C6{\u00C6f\u00CE\u0090\u0095\u00C7Vt\u00A2\x0B\u00DB1\u00EC\u00DDo\u009A]\x10\x04\rE?\u00C3\u00A5\u00D8\u00E2\u00BD\x1C\u00A3\u009E\u00CA\u00CE6\x02(\u0099e*\u00D3J%\u00B1\u00C6\x0F8\u0087\u00A7\x18B\u0088\u0097x\u009E\u00CA0\u00A7\x1D\u00AC\u00C6&\u00EC\u00C4.\f\u00A2\u00DB\u0095\u00CA\x0F\u00F8\x0B\u0097\u00D0\u00AB\u00BA\u00DD\u00C1[\x05ilw#\x06pP\u00C1~\u00E25\u00AE\u00AA\u00AD\u00BE\x04\u00EA\u00B5d\x1B\u0097\u00FB\u0086\n\u00F36\u00EEyQ\u00AB\u00E6nUg\u00ECLTseX\u0081\x138\u008Eie\u00F8\t\x0F\u00F1\x04\u00B3.\u0090\x12\u008A\u00FCB/A\t\u00EB\u0095\u00C5\u00A0\u00AE}\u00E8W\u009D\x1E\u00E1\u0086\x02\u00B9\u00EC\x7F\u00A7\u00BF|\u00A0\x00\u00AE\u0091\u00F7\u00E0\u00B0j\u00E3\u00BE\u00F8G\u00BC\x13\u00F7G\u00FB1\u0086\u00FBf\u00A4\x12\u0099\u00EE\u0092\u00FB\b?L\u00A5\x1C\u00A5\u00FB\u00F0,\u00D6b\x1F\u00EE\u00E1\u00BC\u00EA\u00F1\x15U}\u00E9C\u00D8\u009Blo\u00F4\u00B6{\u00EF\u0080\x1A\u00FF\">,\u00B6\u0081F\u00AF_/\u009F\u00C6c=0\u00E7m\u00C5\u00ED\u00E2s\u00D2\x16\u00B9|\u00A7\u00E6\u00F9\u00BA~\u00AB\u00F1\x07\x17\u00DC\u0098\u00DA\u00C9\u00A3\u008B\x19\u008E)\u00C0l\u00F2\u00C0\u00BF\u00CB*\u00D3\u00D0\x14\u00DA{\u00CDB\u00BDd\u00F2mn$7\u00E0\f\u00DE\u00E3\u009A\u00BF\u00E5\u00A9\f3_O\u00C61^\u00E82Q\x18\x13\u00D0\u00AA\u009D\u00DCI\u00B4\u00B9\u00D9,\x1B\u00BF\x16\u00FEXij,\u00C1(\u00C8\u00D4M3\u00E0Z\u00D0\x1CC;\x1E\u00FC5\u00CBM\u00CE\u00C0\u00F4\u008A\u00B5\u00F5\u0082\u00B9{\u00CE\u00F5\u00E0$\u008E\u00A0\u008Cg\u00CD\x0E\x07\u00D3\"[\u00ABq\u00ECH\u0082V\u00CA\u00A1j7\u00AD\u0093){@o\u00CE\u00BFc\u009D&%\u00D3y\u00D8j\u0085j\u00AD\x1Eei\x1Am\u0092^\x7F\x04\x18\x00\u00BD\u00EB\u00D3e\x12z\u00A7~\x00\x00\x00\x00IEND\u00AEB`\u0082" ;
function g2tConvertFunction() {
    g2tResults.text = '...';
    g2tPgrUpdate(0);
    var re1 = /^\(new String\(/,
        re2 = /\)\)$/;
    var infile = File(fileURItext.text);
    infile.open("r");
    g2tPgrUpdate(30);
    infile.encoding = "binary";
    g2tPgrUpdate(60);
    g2tIconBinary = infile.read();
    g2tPgrUpdate(90);
    g2tIcon = g2tIconBinary.toSource().replace(re1, "").replace(re2, "");
    g2tPgrUpdate(95);
    infile.close();
    g2tPgrUpdate(96);
    g2tResults.text = g2tIcon;
    g2tPgrUpdate(100);
    g2tResults.active = true;
    // return('test');
    // temp.toSource();
}
function g2tPgrUpdate(v){
    g2tPrg.value = v;
    $.sleep(66);
}
mimGetInfo();
function mimGetInfo(){
    mimIsFacingPages = app.documents[0].documentPreferences.facingPages;
    mimDocumentHeight = Math.round(app.documents[0].documentPreferences.pageHeight);
    mimDocumentWidth = Math.round(app.documents[0].documentPreferences.pageWidth);
    mimDocumentPages = app.documents[0].pages.length;
    mimDocumentPageSize = app.documents[0].documentPreferences.pageSize;
    mimDocumentStartingPage = app.documents[0].documentPreferences.startPageNumber;
    mimDocOrientation = ((app.documents[0].documentPreferences.pageOrientation == 2003395685) ? 'Landscape' : 'Portrait') + '  ('+ app.documents[0].documentPreferences.pageOrientation +')' ;
    inforText.text = (app.documents[0].reflect.name + ' :' + app.documents[0].name +
    '\nID: ' + app.documents[0].id +
    '\nTotal Pages: '+ mimDocumentPages +
    '\nDocument Height: '+ mimDocumentHeight+
    '\nDocument Width: '+ mimDocumentWidth+
    '\nPage Size: '+ mimDocumentPageSize+
    '\nStarting Page: '+ mimDocumentStartingPage+
    '\nIndex: ' + app.documents[0].index+
    '\nLabel: '+ app.documents[0].label+
    '\nOrientation: '+ mimDocOrientation+
    '\nFacing pages? ' + mimIsFacingPages+
    '\ncurrent '+app.activeWindow.activePage.reflect.name + ': ' + app.activeWindow.activePage.name);
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