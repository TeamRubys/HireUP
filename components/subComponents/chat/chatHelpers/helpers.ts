import axios from 'axios'

module.exports.getMessages = async (user) => {

  const formatMessages = (messages, userId) => {
    const formatted = {};

    messages.forEach((message) => {
      const recipientId = message.sender_id === userId ? message.receiver_id : message.sender_id;
      if (!formatted[recipientId]) {
        formatted[recipientId] = { recipient: recipientId, messages: [] };
      }
      formatted[recipientId].messages.push({
        id: message.id,
        sender_id: message.sender_id,
        receiver_id: message.receiver_id,
        context: message.context,
        timestamp: message.timestamp,
      });
    });

    let list = Object.values(formatted);
    return list;

  }


  try {
    const res = await axios.get(`/api/messages?id=${1}`);
    const messages = formatMessages(res.data, user);
    return messages;
  } catch (err) {
    console.log(err);
    throw err;
  }
}