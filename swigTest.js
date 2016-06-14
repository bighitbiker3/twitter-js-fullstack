
var swig = require('swig');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

swig.renderFile('/views/index.html', locals, function (err, output) {
    console.log(output);
});
