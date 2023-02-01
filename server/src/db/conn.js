import mongo from 'mongoose';

mongo.connect('mongodb+srv://ekroni:ekroni99@career.6frag62.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(() => {
    console.log("Database Connected.");
    
}).catch((err) => {
    console.log(err);
});
