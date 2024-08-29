// import React, { useState } from 'react';
// import axios from 'axios';

// export default function AIChatbox() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const sendMessage = async () => {
//     if (input.trim() === '') return;

//     const newMessage = { text: input, sender: 'user' };
//     setMessages([...messages, newMessage]);
//     setInput('');

//     try {
//       const response = await axios.post('/api/chat', { message: input });
//       const aiResponse = { text: response.data.message, sender: 'ai' };
//       setMessages(prevMessages => [...prevMessages, aiResponse]);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div className="ai-chatbox">
//       <div className="messages">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//         placeholder="Type your message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }
