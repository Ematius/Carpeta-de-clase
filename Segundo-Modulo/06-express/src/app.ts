import express, { NextFunction, Request, Response } from 'express';

//aquí esta la aplicación de express
export const app = express();

//quitarle la publicidad de express
app.disable('x-powered-by');


//Esto es un middleware, es decir, una función que se ejecuta antes de llegar a la ruta
app.use((req:Request, res: Response, next: NextFunction)=>{
    debug(req.method, req.url);
    console.log('Middleware 1');
    next();
})


const controller = (req: Request, res: Response) => {
    res.send('Hola Mundo!');
};

//si el método es get y la url es /, entonces responde con un mensaje
// app.get('/', (req:Request, res:Response) => {
//     res.send('Hola Mundo!');
// });

//salta según el método, es decir si es get, post, put, delete, patch
app.post('/', controller);
app.patch('/');
app.put('/');
app.delete('/');

app.use('*', (req: Request, res: Response) => {
    res.status(404)
        .send('Method not allowed')
        .setHeader('Content-Type', 'text/plain; charset=utf-8')

});
