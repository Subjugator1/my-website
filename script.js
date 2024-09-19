function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatOutput = document.getElementById('chat-output');
    
    if (userInput.trim() !== '') {
        const userMessage = document.createElement('p');
        userMessage.textContent = "You: " + userInput;
        chatOutput.appendChild(userMessage);
        
        const botMessage = document.createElement('p');
        botMessage.textContent = "Bot: This is a placeholder response!";
        botMessage.style.color = 'blue';
        chatOutput.appendChild(botMessage);

        document.getElementById('user-input').value = '';
    }
}
