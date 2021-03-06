var smocks = require('smocks');

smocks.id('example');

// add a simple fixture that returns a message.  by default, "hello world" is returned
// but there is an additional variant that returns "hello universe"
smocks.route({
    id: 'message',
    label: 'hello message',
    path: '/message',

    input: {
      message: {
        label: 'What is the default message',
        type: 'text',
        defaultValue: 'hello world'
      }
    },

    variantLabel: 'hello world',
    handler: function(req, reply) {
      reply({message: this.input('message')});
    }
  })

  .variant({
    id: 'universe',
    label: 'hello universe',

    handler: function (req, reply) {
      reply({message: 'hello universe'});
    }
  });
