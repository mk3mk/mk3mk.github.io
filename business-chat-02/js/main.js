let closeChat = document.getElementById('close-chat');
let asideLeft = document.getElementById('asideLeft');


closeChat.addEventListener('click', function(){
    asideLeft.classList.toggle('asideClosed');
})