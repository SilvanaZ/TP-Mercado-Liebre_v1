const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage});

module.exports = uploadFile;