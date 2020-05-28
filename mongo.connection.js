const mongoose = require('mongoose')

const dbConnectionString = 'mongodb+srv://elcentino:rock.roll@cluster0-9byhr.mongodb.net/portfolio?retryWrites=true&w=majority';
// const dbConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-9byhr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// const dbConnectionString = 'mongodb://localhost:27017/portfolio?retryWrites=true&w=majority'

mongoose.Promise = Promise

try {

  mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  const db = mongoose.connection

  db.once('open', () => {
    console.log('Connection to MongoDB Initiated')
  })

  db.on('error', () => {

    console.error.bind(console, 'connection error:')  
    mongoose.disconnect()
  })

  db.once('open', () => {
    console.log("Connection to Mongoose Established")

  });

  db.on('reconnected', () => {
    console.log('MongoDB reconnected!');
  })

  db.on('disconnected', () => {
    console.log('MongoDB disconnected!')

    mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
    })
  })

} catch (e) {

  console.log(e)
}