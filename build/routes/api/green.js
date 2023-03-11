'use strict'
/*import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const route = Router();

route.get('/', (req: Request, res: Response) => {
  const filename = req.query.filename;
  const imagePath = path.join(
    __dirname,
    '/images',
    'green.jpg'
  );
  console.log(imagePath);

  if (fs.existsSync(imagePath)) {
    return res.sendFile(imagePath);
  }

  return res.status(404).send('Image not found');
});

export default route;
*/
