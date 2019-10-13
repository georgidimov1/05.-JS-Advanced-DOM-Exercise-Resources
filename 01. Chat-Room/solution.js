function solve() {
   let input = document.getElementById('chat_input');
   let button = document.getElementById('send')
   button.addEventListener("click", sendMessage)
   function sendMessage() {
      let message = input.value;
      let newMessage = document.createElement('div')
      newMessage.classList.add('message')
           newMessage.textContent=message;
      document.getElementById('chat_messages').appendChild(newMessage)
      newMessage.classList.add('my-message')
      input.value="";

   }
}


