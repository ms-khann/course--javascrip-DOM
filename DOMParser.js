let parser = new DOMParser();
let parserDocument = parser.parseFromString(`
    <h1>hello</h1>
`,'text/html');

let h1 = parserDocument.querySelector('h1');
console.log(parserDocument);
console.log(h1.innerText);