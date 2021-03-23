let serializer = new XMLSerializer();
let seralizeString = serializer.serializeToString(document);
console.log(seralizeString);