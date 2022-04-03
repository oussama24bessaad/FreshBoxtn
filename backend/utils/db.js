import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://oussama:admin007@mern.9uiui.mongodb.net/freshbox?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB