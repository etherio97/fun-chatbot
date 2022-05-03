module.exports = async ({ message_id, from, chat, text }) => {
  console.log('recieved private message', { from, chat, text });
};
