/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
<book category="CHILDREN">
<title lang="en">Harry Potter</title>
<author>J. K. Rowling</author>
<year>2005</year>
<price>29.99</price>
</book>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// console.log(xmlDOM);

// Получение всех DOM-нод
const bookNode = xmlDOM.querySelector("book");
const titleNode = bookNode.querySelector("title");
const authorNode = bookNode.querySelector("author");
const yearNode = bookNode.querySelector("year");
const priceNode = bookNode.querySelector("price");
// console.log('bookNode', bookNode);
// console.log('titleNode', titleNode);
// console.log('authorNode', authorNode);
// console.log('yearNode', yearNode);
// console.log('priceNode', priceNode);

// Получение данных из атрибутов
const categoryAttr = bookNode.getAttribute('category');
const langAttr = titleNode.getAttribute('lang');
// console.log('categoryAttr', categoryAttr);
// console.log('langAttr', langAttr);

/* Этап 3. Запись данных в результирующий объект */
const result = {
    category: categoryAttr,
    lang: langAttr,
    title: titleNode.textContent,
    author: authorNode.textContent,
    year: Number(yearNode.textContent),
    price: Number(priceNode.textContent),
};
// console.log('result', result);

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
const xmlDOMOne = newXmlDOM.querySelector("list");
const firstNode = xmlDOMOne.querySelector("first");
const secondNode = xmlDOMOne.querySelector("second");
const ageNode = xmlDOMOne.querySelector("age");
const profNode = xmlDOMOne.querySelector("prof");
// const priceNode = xmlDOMOne.querySelector("price");
// console.log('newXmlDOM', newXmlDOM);
console.log('firstNode', firstNode);
console.log('secondNode', secondNode);
console.log('ageNode', ageNode);
console.log('profNode', profNode);
