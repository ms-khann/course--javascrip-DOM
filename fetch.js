let data = fetch('data.json').then(function(response){
    return response.text();
}).then(function(response){
    console.log(response);
});
console.log(data);