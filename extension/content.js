var elements = document.getElementsByTagName('*');

var funLib = ["To succeed in life, you need three things: a wishbone, a backbone and a funny \
            bone", "Nothing is impossible. The word itself says I'm possible!", "Banana", "Orange", "Apple",
            "Live Laugh Love", ":( :( :(", "Juicy Couture", "✧・ﾟ:* ", " (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧",
            "Bed Bath & Beyond", "Cheeto", "Nachos","Taco", "Burrito","dumpling", "( ͡° ͜ʖ ͡°)", "ErMaGerd",
            "Gangs of Wasseypur", "Batman", "Goody Two Shoes"
            ];


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

            text = text.replace(/shit/gi, funLib[randInt]);
            text = text.replace(/fuck/gi, funLib[randInt]);
            text = text.replace(/damn/gi, funLib[randInt]);
            text = text.replace(/crap/gi, funLib[randInt]);
            text = text.replace(/piss/gi, funLib[randInt]);
            text = text.replace(/asshole/gi, funLib[randInt]);
            text = text.replace(/bastard/gi, funLib[randInt]);
            text = text.replace(/douche/gi, funLib[randInt]);

            text = text.replace(/bitch/gi, funLib[randInt]);
            text = text.replace(/dick/gi, funLib[randInt]);
            text = text.replace(/cock/gi, funLib[randInt]);

            text = text.replace(/slut/gi, funLib[randInt]);
            text = text.replace(/pussy/gi, funLib[randInt]);
            text = text.replace(/dyke/gi, "****");
            text = text.replace(/fag/gi, "---");


            if (text !== origText) {
                element.replaceChild(document.createTextNode(text), node);
            }
        }
    }
}
