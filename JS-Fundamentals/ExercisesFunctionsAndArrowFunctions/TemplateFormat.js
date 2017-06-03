function  TemplateFormat(text) {
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += '<quiz>\n';

    function drawQuestion(question) {
        let xml = "\t<question>\n";
        xml += `\t\t${question}\n`;
        xml += "\t</question>\n";

        return xml;
    }

    function drawAnswer(answer) {
        let xml = "\t<answer>\n";
        xml += `\t\t${answer}\n`;
        xml += '\t</answer>\n';

        return xml;
    }

        for (let i = 0; i < text.length; i++) {
            if (i%2 == 0){
                xml += drawQuestion(text[i]);
            }else {
                xml += drawAnswer(text[i]);
            }
        }

    xml += '</quiz>';

    console.log(xml)
}

TemplateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"
]);
