const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const getBotResponse = require('../chatBot/chatBot');

router.post('/chat', async (req, res) => {
    const { userMessage } = req.body;

    const botResponse = getBotResponse(userMessage);

    const newChat = new Chat({
        userMessage,
        botResponse
      });
    
      await newChat.save();
      res.json(newChat);
});

module.exports = router;