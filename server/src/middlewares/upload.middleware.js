import { upload } from "../settings/upload.config.js";

export const uploadImage = (req,res,next) => {
    const uploadSingle = upload.single("imageUrl");

    uploadSingle(req,res, (error) => {
        if (error || !req.file) {
            console.log(error);

            return res.status(400).json({
                msg: 'Error al subir el archivo'
            })
        }

        req.body.imageUrl = req.file.filename;

        next()
    })
}