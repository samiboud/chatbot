
const toggleButton = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
const messagesBox = document.getElementById('chatbot-messages');
const input = document.getElementById('chatbot-input');
const sendButton = document.getElementById('chatbot-send');

toggleButton.addEventListener('click', () => {
  chatbotBox.style.display = chatbotBox.style.display === 'none' || chatbotBox.style.display === '' ? 'flex' : 'none';
});

function addMessage(message, sender = 'bot') {
  const msg = document.createElement('div');
  msg.textContent = message;
  msg.style.margin = '5px 0';
  msg.style.textAlign = sender === 'user' ? 'right' : 'left';
  msg.style.backgroundColor = sender === 'user' ? '#dcf8c6' : '#f1f0f0';
  msg.style.padding = '6px 10px';
  msg.style.borderRadius = '10px';
  messagesBox.appendChild(msg);
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

function getBotResponse(inputText) {
  switch(inputText.trim()) {
    case '1': return 'تفضل بزيارة قسم المنتجات على موقعنا لمعرفة المزيد عن منتجاتنا!';
    case '2': return 'هل تحتاج إلى مساعدة في إتمام عملية الشراء؟ يمكنني مساعدتك في إتمام الدفع أو اختيار طرق الشحن.';
    case '3': return 'من فضلك، قدم لي رقم طلبك وسأقوم بتتبع حالته فورًا.';
    case '4': return 'لقراءة سياسة الإرجاع والتبديل، تفضل بزيارة رابط سياسة الإرجاع على موقعنا.';
    case '5': return 'هل هناك شيء آخر يمكنني مساعدتك فيه اليوم؟ أنا هنا للمساعدة في أي استفسار أو مشكلة.';
    default: return 'يرجى اختيار رقم من 1 إلى 5 أو كتابة استفسارك بشكل أوضح.';
  }
}

sendButton.addEventListener('click', () => {
  const userText = input.value;
  if (userText.trim() === '') return;
  addMessage(userText, 'user');
  const botReply = getBotResponse(userText);
  setTimeout(() => addMessage(botReply), 500);
  input.value = '';
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendButton.click();
});

window.onload = () => {
  addMessage("مرحبًا! أنا مساعدك الافتراضي. كيف يمكنني مساعدتك اليوم؟\n\n1. استفسارات عن المنتجات\n2. مساعدة في المشتريات\n3. تتبع الطلبات\n4. سياسة الإرجاع والتبديل\n5. دعم عام");
};
