var mongoose = require('mongoose');

var mongoCon = 'mongodb://bo:bobobo1@ds119663.mlab.com:19663/klasse'

// For at bruge promises. Ikke sikkert det er nødvendigt mere.
mongoose.Promise = global.Promise

mongoose.connect(mongoCon, { useNewUrlParser: true, useCreateIndex: true });

