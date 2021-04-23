const Record = require('../model/record')

// Set-record
exports.setRecord = (req, res, next) =>{
    const bookname = req.body.bookname;
    const authorname = req.body.authorname;

    var rr = new Record({book_name: bookname,author_name:authorname});
    rr.save(function (err, results) {
        console.log(results._id);
        res.json({'id':results._id})
    })
}


// Get-record
exports.getRecord = (req, res, next) =>{
    const re_id = req.query.id;

    Record.find({ _id: re_id }).then(results => {
        results =results[0]
        console.log(results)
        return res.json({'book_name':results.book_name,'author_name':results.author_name })
    })
}
