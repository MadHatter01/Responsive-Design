document.getElementById('notify').addEventListener('click', ()=>{
if(!('Notification' in window)){
    alert('Browser does not support notifications');
    return;
}
console.log('permitted')
});


const showNotification = () =>{
    const options = {
        body: 'This is a body of a notification',
        vibrate : [200,100,200],
        tag: 'sample-notification'
    }

    const notification = new Notification('Hello there!', options);

    notification.onclick = (event)=>{
        event.preventDefault();
        window.open("https://www.google.com", '_blank');
    }
}