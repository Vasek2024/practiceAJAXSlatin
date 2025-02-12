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
// console.log('xmlStringCode', xmlStringCode);

const newXmlDOM = emptyParser.parseFromString(xmlStringCode, "text/xml");
// console.log('newXmlDOM', newXmlDOM);

const xmlDOMOne = newXmlDOM.querySelector("list");
const studentDOMOne = xmlDOMOne.querySelector("student");
const nameNode = xmlDOMOne.querySelector("name");
const firstNode = xmlDOMOne.querySelector("first");
const secondNode = xmlDOMOne.querySelector("second");
const ageNode = xmlDOMOne.querySelector("age");
const profNode = xmlDOMOne.querySelector("prof");
const langAttrinyte = nameNode.getAttribute('lang');

const resultJs = {
    // list: xmlDOMOne,
    // student: studentDOMOne,
    // name: nameNode.textContent,
    name: firstNode.textContent + " " + secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttrinyte,
    // second: secondNode.textContent,
};
console.log('resultJs', resultJs);