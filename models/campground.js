var mongoose = require("mongoose");
 
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   info1:String,
   info2:String,
   info3:String,
   createdAt: { type: Date, default: Date.now },
   location: String,
   lat: Number,
   lng: Number,
   author: {
	  id: {
		  type : mongoose.Schema.Types.ObjectId,
		  ref : "User"
	  },
	  username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});
 
module.exports = mongoose.model("Campground", campgroundSchema);