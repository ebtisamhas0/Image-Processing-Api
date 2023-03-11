import sharp from 'sharp'
import path from 'path'
import { ImagePath, ResizedImagePath } from '../routes/api/resizeRoute'
import { response } from 'express'

const imageProcess = async (
    imageName: string,
    width: number,
    height: number
): Promise<boolean | void> => {
    const imagePath: string = path.join(`${ImagePath}`, `${imageName}.jpg`)
    const resizedImage: string = path.join(
        `${ResizedImagePath}`,
        `${imageName}-${width}-${height}.jpg`
    )

    try {
        await sharp(imagePath).resize(width, height).toFile(resizedImage)
        return true
    } catch (error) {
        console.log(error)
        response.send(error)
    }
}

export default imageProcess
