let obj = {
    name: "sahil",
    age: 23,
};

let obj_json = JSON.stringify(obj);
let obj_data = new FormData();
console.log(obj_data);
const xhr = new XMLHttpRequest();

xhr.addEventListener("onreadystatechange", function () {
    console.log(this.status);
});
xhr.open("POST", "data.php");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(obj_json);