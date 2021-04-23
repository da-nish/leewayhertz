// mongooes
const mongooes = require('mongoose')
const schema = mongooes.Schema;

const userSchema = schema({
    book_name:{
        type:String,
        required: true
    },
    author_name:{
        type:String,
        required: true
    }
});
const Record = mongooes.model('Record', userSchema);
module.exports = Record