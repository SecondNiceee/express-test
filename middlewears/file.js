import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' +  file.originalname );
    },
  });


  const types = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
    'image/svg+xml',
    'image/webp',
    'image/bmp',
    'image/tiff',
    'image/x-icon' // для .ico файлов
  ];

  const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)){
        cb(null, true)
    }
    else{
        cb(new Error('Invalid file type'), false)
    }
  }


  

export default multer({storage : storage, fileFilter : fileFilter });