const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://underbelly:vitunderbelly@cluster0.9eomcd1.mongodb.net/underbellymern?retryWrites=true&w=majority'
const mongoURI = 'mongodb://underbelly:vitunderbelly@ac-z4kbfjv-shard-00-00.9eomcd1.mongodb.net:27017,ac-z4kbfjv-shard-00-01.9eomcd1.mongodb.net:27017,ac-z4kbfjv-shard-00-02.9eomcd1.mongodb.net:27017/underbellymern?ssl=true&replicaSet=atlas-k6mx85-shard-0&authSource=admin&retryWrites=true&w=majority'

const mongoDB = async()=>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true}, async(err,result)=>{
        if(err) console.log("Their is some error",err)
        else{
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err, data){

                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function(err, catData){
                    if(err) console.log(err);
                    else{
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
                // if(err) console.log(err);
                // else{
                //     global.food_items = data; //using global variable we can update it anywhere
                //     // console.log(global.food_items);
                // }
            }) 
        }
    });
}

module.exports = mongoDB;