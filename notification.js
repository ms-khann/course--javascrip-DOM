function showNotification(){
    let notification = new Notification("New message from dcode",{
        body: "Notification content Going to display here",
        icon: ""
    });
    notification.onclick = (e)=>{
        window.location.href = "http://www.google.com";
    }
}
console.log(Notification.permission);
Notification.requestPermission().then(per => {
    console.log(per);
});
showNotification(); 