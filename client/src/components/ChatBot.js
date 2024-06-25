import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const res = await axios.post('/api/chat', { userMessage: input });
    setMessages([...messages, { user: input, bot: res.data.botResponse }]);
    setInput('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Paper sx={{ p: 3, width: '100%', maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom>
          ChatBot
        </Typography>
        <List sx={{ maxHeight: 400, overflow: 'auto', mb: 2 }}>
          {messages.map((msg, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText
                  primary="User"
                  secondary={msg.user}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Bot"
                  secondary={msg.bot}
                />
              </ListItem>
              {index < messages.length - 1 && <Divider />}
            </div>
          ))}
        </List>
        <Box sx={{ display: 'flex', mt: 2 }}>
          <TextField
            label="Type your message"
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
          />
          <Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={sendMessage}>
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatBot;
