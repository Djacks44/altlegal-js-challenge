var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  title: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  instructions: {
    type: String,
  },
  rating: {
    type: integer,
  },
  date: {
    type: Date
  }
});

var Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
