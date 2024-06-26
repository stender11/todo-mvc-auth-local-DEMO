const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    // !!! useNewUrlParser: true, useUnifiedTopology: true ARE DEPRECATED!!! -- might need to use this if app is crashing:
    // const conn = await mongoose.connect(process.env.DB_STRING, {
    //     useFindAndModify: false,
    //     useCreateIndex: true,
    //   });
    // SOURCE: https://mongoosejs.com/docs/5.x/docs/deprecations.html
  
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
