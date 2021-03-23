// Note : It's Automatic Convert Arguments To String be carefull when storing Objects And Arrays
console.time('abc');
localStorage.name = 'sahil';
localStorage.setItem('age',23);
console.log(localStorage);

console.log(`%c It's Automatic Convert Arguments To String be carefull when storing Objects And Arrays`, 'color:red; font-size: 20px')
console.timeEnd('abc');