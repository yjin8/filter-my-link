$(document).delegate("#submit", "tap", function() {
    alert($("#flip-1").val());
});  
/*
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

var data = readTextFile("file://C:\Users\yuche\OneDrive\Documents\GitHub\
    gender-inequality\extension-skeleton\common_bad.txt");

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "common_bad.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }
    // alert(lines);
}
*/

var elements = document.getElementsByTagName('*');

//var actualBadWords = ["fuck","dyke","fag","cock","pussy"];

var funLib = ["To succeed in life, you need three things: a wishbone, a backbone and a funny \
            bone", "Nothing is impossible. The word itself says I'm possible!", "Banana", "Orange", "Apple",
            "Live Laugh Love", ":( :( :(", "Juicy Couture", "✧・ﾟ:* ", " (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧",
            "Bed Bath & Beyond", "Cheeto", "Nachos","Taco", "Burrito","dumpling", "( ͡° ͜ʖ ͡°)", "ErMaGerd",
            "Gangs of Wasseypur", "Batman", "Goody Two Shoes"
            ];

var funVerb = ["canoodle", "poo-poo", ]

//var req = new XMLHttpRequest();
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            //text = txt.toLowerCase();
            var origText = text;         
            
            var randInt = Math.floor(Math.random() * funLib.length)

            text = text.replace(/trump/gi, funLib[randInt]);
            text = text.replace(/weinstein/gi, funLib[randInt]);
            text = text.replace(/pence/gi, funLib[randInt]);
            text = text.replace(/paul ryan/gi, funLib[randInt]);
            text = text.replace(/meninist/gi, funLib[randInt]);
            text = text.replace(/palin/gi, funLib[randInt]);

<<<<<<< HEAD
            text = text.replace(/shit/gi, funLib[randInt]);
            text = text.replace(/fuck/gi, funLib[randInt]);
            text = text.replace(/damn/gi, funLib[randInt]);
            text = text.replace(/crap/gi, funLib[randInt]);
            text = text.replace(/piss/gi, funLib[randInt]);
            text = text.replace(/asshole/gi, funLib[randInt]);
            text = text.replace(/bastard/gi, funLib[randInt]);
            text = text.replace(/douche/gi, funLib[randInt]);
=======

            //if (a !== -1) {
            //    text = text.replace(/badWords[a]/gi, 'moron');
            //}

            var quotes = ["To succeed in life, you need three things: a wishbone, a backbone and a funny \
            bone", "Nothing is impossible. The word itself says I'm possible!", "Banana", "Orange", "Apple",
            "Live Laugh Love", ":( :( :(", "Juicy Couture", "~*~*~Ghéy~*~*~", "✧・ﾟ:* ", " (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧",
            "Bed Bath & Beyond", "Cheeto", "Nachos","Taco", "Burrito","dumpling", "( ͡° ͜ʖ ͡°)", "ErMaGerd"
            ]


            var randInt = Math.floor(Math.random() * quotes.length)
>>>>>>> 9f88993f8383c3c0502baa5c95e6d5300b0e1dda


            text = text.replace(/bitch/gi, funLib[randInt]);
            text = text.replace(/dick/gi, funLib[randInt]);
            text = text.replace(/cock/gi, funLib[randInt]);

            
            text = text.replace(/slut/gi, funLib[randInt]);
            text = text.replace(/pussy/gi, funLib[randInt]);
            text = text.replace(/dyke/gi, "****");
            text = text.replace(/fag/gi, "---");


            /*
            var a = actualBadWords.indexOf(origText);

            if (a !== -1) {
                text = text.replace(actualBadWords[a], '****');
            }
            */

            if (text !== origText) {
                element.replaceChild(document.createTextNode(text), node);
            }
        }
    }
}
