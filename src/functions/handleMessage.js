const handleGroup = require('./handleGroup');
const handlePrivate = require('./handlePrivate');

module.exports = async ({ message_id, from, chat, text }) => {
  if (from.type === 'private') {
    await handlePrivate({ message_id, from, chat, text });
  } else {
    await handleGroup({ message_id, from, chat, text });
  }
};
