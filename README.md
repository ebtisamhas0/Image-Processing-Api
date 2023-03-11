                Image-Processing-API
The project can be built and run as follow:
1- Installing the dependencies
nmp i dependencies name 
2- Installing the devDependencies
npm i --save-dev devDependencies name
3- Production ready build folder
npm run build | This command will compile typeScript code into JavaScript in the ./build folder and make a production ready code.
4- Start the server
npm run start 
(Testing,Linting and formatting)
1- Linting with esLint
npm run lint
2- Testing with 
npm run jasmine
3- Formatting with prettier:
npm run prettier
(Endpoints):  
Server localhost, port number 3000
http://localhost:3000/api/resizedImage/?image=filename&width=size&height=size
Image name:
images/green, natural, see    
After resize image will be in:
editedImages/

Built With:
NodeJS - The JavaScript runtime.
Express - The JavaScript web framework for back-end.
TypeScript - Microsoft superset of JavaScript.
Sharp - NodeJS package for processing images.
