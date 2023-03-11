'use strict'
import express, { Response, Request, Router } from 'express'
import path from 'path'
import imageProcess from '../../middlewares/validation'
import fs from 'fs'
const resizeRoute: Router = express()
const ResizedImagePath: string = path.resolve('./') + '/editedImages'
const ImagePath: string = path.resolve('./') + '/images'
const images: string[] = ['green', 'natural', 'see']
resizeRoute.get(
    '/',
    async (req: Request, res: Response): Promise<void | unknown> => {
        const imageName: string = req.query.image as string
        const heightNum = Number(req.query.height)
        const widthNum = Number(req.query.width)
        //validation
        if (
            !imageName ||
            (!images.includes(imageName) &&
                (isNaN(heightNum) || heightNum <= 0 || !heightNum) &&
                (isNaN(widthNum) || widthNum <= 0 || !widthNum))
        ) {
            return res
                .status(400)
                .send('Please type the image name, height, and width')
        }
        if (isNaN(heightNum || widthNum)) {
            return res.status(400).send('The height and width must be a number')
        }
        if (
            (isNaN(heightNum) || heightNum <= 0 || !heightNum) &&
            (isNaN(widthNum) || widthNum <= 0 || !widthNum)
        ) {
            return res
                .status(400)
                .send(
                    'Please type a valid height and width that is not less than 1'
                )
        }
        if (!imageName || !images.includes(imageName)) {
            return res.status(400).send('Please type the image name')
        }
        if (isNaN(widthNum) || widthNum <= 0 || !widthNum) {
            return res
                .status(400)
                .send('Please type a valid width that is not less than 1')
        }
        if (isNaN(heightNum) || heightNum <= 0 || !heightNum) {
            return res
                .status(400)
                .send('Please type a valid height that is not less than 1')
        }

        try {
            const imageName: string = req.query.image as string
            const height = Number(req.query.height)
            const width = Number(req.query.width)
            // resizing the image using imageprocess model
            //validate if image with values of height&width is exist
            const resizedImage = `${ResizedImagePath}/${imageName}-${width}-${height}.jpg`
            if (fs.existsSync(resizedImage)) res.sendFile(resizedImage)
            console.log('image already exist')
            await imageProcess(imageName, width, height)
            // show resizedImage in browser
            try {
                res.sendFile(resizedImage)
                return
            } catch (error) {
                res.send(error)
            }
        } catch (error) {
            res.status(400)
            res.send(error)
        }
    }
)

export { ResizedImagePath, ImagePath }
export default resizeRoute
