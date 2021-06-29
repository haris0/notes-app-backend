const { addNoteHandler, getAllNotesHendler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHendler,
  },
];

module.exports = routes;
