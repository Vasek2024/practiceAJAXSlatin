gggggggggg()
function gggggggggg() {
    const emptyParser = new DOMParser();
    const xmlStringCode = `
<list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`

    const newXmlDOM = emptyParser.parseFromString(xmlStringCode, "text/xml");

    const xmlDOMOne = newXmlDOM.querySelector("list"),
        studentDOMOne = xmlDOMOne.querySelectorAll("student"),
        nameIvan = studentDOMOne[0].querySelector("name"),
        // const firstNode = newXmlDOM.getElementsByTagName("first")[0].textContent;
        // const secondNode = newXmlDOM.getElementsByTagName("second")[0].textContent;
        firstIvan = studentDOMOne[0].querySelector("first"),
        secondIvan = studentDOMOne[0].querySelector("second"),
        ageIvan = studentDOMOne[0].querySelector("age"),
        profIvan = studentDOMOne[0].querySelector("prof"),
        langAttrinyteIvan = nameIvan.getAttribute('lang')

    const namePetr = studentDOMOne[1].querySelector("name"),
        // const firstNode = newXmlDOM.getElementsByTagName("first")[0].textContent;
        // const secondNode = newXmlDOM.getElementsByTagName("second")[0].textContent;
        firstPetr = studentDOMOne[1].querySelector("first"),
        secondPetr = studentDOMOne[1].querySelector("second"),
        agePetr = studentDOMOne[1].querySelector("age"),
        profPetr = studentDOMOne[1].querySelector("prof"),
        langAttrinytePetr = namePetr.getAttribute('lang')

        resultJsIvan = {
            // list: xmlDOMOne,
            // student: studentDOMOne,
            // name: nameNode.textContent,
            name: firstIvan.textContent + " " + secondIvan.textContent,
            age: Number(ageIvan.textContent),
            prof: profIvan.textContent,
            lang: langAttrinyteIvan,
            // secon
            // d: secondNode.textContent,
        }
        resultJsPetr = {
            // list: xmlDOMOne,
            // student: studentDOMOne,
            // name: nameNode.textContent,
            name: firstPetr.textContent + " " + secondPetr.textContent,
            age: Number(agePetr.textContent),
            prof: profPetr.textContent,
            lang: langAttrinytePetr,
            // secon
            // d: secondNode.textContent,
        }
        console.log('resultJsIvan', resultJsIvan);
        console.log('resultJsPetr', resultJsPetr);
}