const mongoose = require('mongoose');
// const ProgressBar = require('progress');
const colors = require('colors');

// const bar = new ProgressBar(':bar :current/:total', { total: 20 });
// const timer = setInterval(function () {
//   bar.tick();
//   if (bar.complete) {
//     clearInterval(timer);
//   } else if (bar.curr === 10) {
//       bar.interrupt('Inciando\nprogresso atual é '.green + bar.curr + '/' + bar.total + '\nfinalizado...'.yellow);
//   }
// }, 100);

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Conectado'.red))
    .catch((err) => console.log(`Erro ao conectar com MongoDB: ${err}`));
};


module.exports = connectToDatabase;
