const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
  
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
      return 'Hi there! How can I help you today?';
    } else if (lowerCaseMessage.includes('help')) {
      return 'Sure, what do you need help with?';
    } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
      return 'Goodbye! Have a nice day!';
    } else if (lowerCaseMessage.includes('how are you')) {
      return 'I am just a bot, but I am here to help you! How can I assist you today?';
    } else if (lowerCaseMessage.includes('what is your name')) {
      return 'I am BotBuddy, your virtual assistant!';
    } else if (lowerCaseMessage.includes('time')) {
      return `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (lowerCaseMessage.includes('date')) {
      return `Today's date is ${new Date().toLocaleDateString()}.`;
    } else if (lowerCaseMessage.includes('joke')) {
      return 'Why did the scarecrow win an award? Because he was outstanding in his field!';
    } else if (lowerCaseMessage.includes('weather')) {
      return 'I am not able to provide real-time weather updates right now, but you can check your favorite weather app!';
    } else {
      return 'I am sorry, I do not understand. Can you please elaborate?';
    }
  };
  
  module.exports = getBotResponse;
  