const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/group-crit', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

module.exports = mongoose.connection;