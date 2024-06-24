const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello')) {
        return 'Hi there! How can I help you today?';
    } else if (lowerCaseMessage.includes('help')) {
        return 'Sure, what do you need help with?';
    } else if (lowerCaseMessage.includes('bye')) {
        return 'Goodbye! Have a nice day!';
    } else {
        return 'I am sorry, I do not understand. Can you please elaborate?';
    }
};
  
module.exports = getBotResponse;