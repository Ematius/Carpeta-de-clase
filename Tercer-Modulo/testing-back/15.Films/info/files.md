---
title: Gestión de ficheros en un API Rest
summary: 'En este documento se describen las operaciones básicas de gestión de ficheros en un API Rest'
tags: ['API Rest', 'Ficheros', 'Gestión']
---

## Introducción

En este documento se describen las operaciones básicas de gestión de ficheros en un API Rest.

No se incluyen operaciones genéricas de ficheros, como crearlo o eliminarlo, ya que estas operaciones se realizan a través de las operaciones básicas del filesystem de Node.js.

Nos centraremos en la subida de ficheros y en la descarga de ficheros.

## Subida de ficheros

Para subir un fichero a un servidor a través de un API Rest, se puede utilizar el método POST de HTTP.

En este caso el formato de los datos en el body de la petición no puede ser `json`, ya que no se pueden enviar ficheros en formato `json`. En su lugar, el formato será `multipart/form-data`, que permite enviar ficheros.

Para crear un formulario que permita subir un fichero, se puede utilizar el siguiente código HTML:

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file" />
  <input type="submit" value="Subir fichero" />
</form>
```

En caso de que se quiera subir un fichero a través de una petición HTTP, se puede utilizar `fetch` junto con el API FormData disponible de forma nativa en los navegadores:

```ts
const fileInput = document.querySelector('input[type="file"]');
const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('/upload', {
  method: 'POST',
  body: formData,
});
```

El fichero se envía en el cuerpo de la petición, junto con el resto de información del formulario, en una serie de pares clave valor, donde los valores serán string o File.

En el backend se suele utilizar el módulo `multer` para gestionar la subida de ficheros.

### Multer

Multer es un middleware para Node.js que facilita la gestión de archivos subidos en aplicaciones Express. Es particularmente útil para manejar formularios con archivos de tipo `multipart/form-data`.

Primero, asegúrate de tener Node.js y npm instalados. Luego, instala Multer usando npm:

```sh
npm install multer
```

En el backend, se puede utilizar Multer de la siguiente manera:

```ts
import express from 'express';
import multer from 'multer';

const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Fichero subido');
});
```

En este ejemplo, se utiliza el middleware `upload.single('file')` para gestionar la subida de un único fichero con el nombre `file`.
El fichero se guarda en la carpeta `uploads/` del servidor.

Multer lleva a cabo dos operaciones:

- Guarda el fichero en el disco.
- Añade un objeto `file` al objeto `request` de Express, que contiene información sobre el fichero subido.
- En el body de la petición, se incluirán todas las claves y valores del formulario, que no sean de tipo File.

#### Multer encapsulado como un interceptor

Para encapsular Multer como un interceptor, se puede utilizar el siguiente código:

```ts
import multer from 'multer';
export class FileInterceptor {
  private upload: multer.Multer;

  constructor() {
    this.upload = multer({ dest: 'uploads/' });
  }

  public single(fieldName: string) {
    return this.upload.single(fieldName);
  }
}
```

En la ruta correspondiente se puede utilizar el interceptor de la siguiente manera:

```ts
import express from 'express';
import { FileInterceptor } from './file-interceptor';

const app = express();
const fileInterceptor = new FileInterceptor();

app.post('/upload', fileInterceptor.single('file'), (req, res) => {
  res.send('Fichero subido');
});
```

#### Ajustando la configuración de Multer

En cualquiera de los casos la configuración de Multer se puede ajustar para adaptarla a las necesidades del proyecto.

Además de cambiar la carpeta de destino de los ficheros subidos, se pueden configurar otros aspectos, como el tamaño máximo de los ficheros, el número máximo de ficheros, o el tipo de ficheros permitidos:

```ts
const upload = multer({
  limits: {
    fileSize: 1024 * 1024, // 1MB
    files: 1,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Solo se permiten imágenes PNG'));
    }
  },
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' file.originalname);
    },
  }),
});
```

En este ejemplo, se configura Multer para que solo permita subir ficheros de tipo `image/png`, con un tamaño máximo de 1MB y un único fichero. Además, se guarda el fichero en la carpeta `uploads/` con un nombre único basado en la fecha y el nombre original del fichero.

#### Referencia posterior al fichero subido

En el objeto `request` de Express, se incluye un objeto `file` con información sobre el fichero subido. Este objeto contiene la siguiente información:

- `fieldname`: Nombre del campo del formulario que contiene el fichero.
- `originalname`: Nombre original del fichero.
- `encoding`: Codificación del fichero.
- `mimetype`: Tipo MIME del fichero.
- `size`: Tamaño del fichero en bytes.
- `destination`: Carpeta de destino del fichero.
- `filename`: Nombre del fichero en el disco.
- `path`: Ruta completa del fichero en el disco.
- `buffer`: Buffer con los datos del fichero.
- `stream`: Stream con los datos del fichero.
- `truncated`: Indica si el fichero ha sido truncado.

Todos estos datos o parte de ellos pueden almacenarse junto con los datos del formulario en una base de datos, para poder recuperarlos posteriormente.

```ts
app.post('/upload', upload.single('file'), (req, res) => {
  const { originalname, mimetype, size, path } = req.file;
  const { name, email } = req.body;

  // Guardar los datos del fichero y del formulario en una base de datos
  db.save({ name, email, originalname, mimetype, size, path });

  res.send('Fichero subido');
});
```

## Descarga de ficheros

Para descargar un fichero a través de un API Rest, se puede utilizar el método GET de HTTP.

En este caso, el fichero se envía en el cuerpo de la respuesta, junto con el resto de información de la respuesta, en una serie de pares clave valor, donde los valores serán string o File.

En el backend, se suele utilizar el módulo `fs` para gestionar la descarga de ficheros.

```ts
import express from 'express';
import fs from 'fs';

const app = express();

app.get('/download/:filename', (req, res) => {
  const { filename } = req.params;
  const path = `uploads/${filename}`;

  fs.readFile(path, (err, data) => {
    if (err) {
      res.status(404).send('Fichero no encontrado');
    } else {
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      res.send(data);
    }
  });
});
```

## Cloud Storage

En lugar de guardar los ficheros en el disco del servidor, se pueden almacenar en un servicio de almacenamiento en la nube, como Amazon S3, Google Cloud Storage o Azure Blob Storage. En el caso de las imágenes se puede utilizar Cloudinary.

Estos servicios ofrecen una API Rest para subir y descargar ficheros, y suelen ser más escalables y seguros que el almacenamiento en disco.

Para utilizar un servicio de almacenamiento en la nube, se puede utilizar un cliente de Node.js proporcionado por el proveedor del servicio. Veremos como hacerlo con Cloudinary.

### Cloudinary

Cloudinary es un servicio de almacenamiento en la nube que permite subir, almacenar, transformar y entregar imágenes y vídeos de forma segura y escalable.

Primero, crea una cuenta en Cloudinary y obtén las credenciales de API necesarias. La necesidad de proteger estas credenciales obliga a utilizar un servicio de backend para subir los ficheros, en lugar de utilizar directamente el cliente de Cloudinary en el frontend.

Luego, instala el cliente de Cloudinary para Node.js usando npm:

```sh
npm i cloudinary
```

En el backend, se puede utilizar Cloudinary de la siguiente manera:

```ts
import express from 'express';
import { v2 as cloudinary } from 'cloudinary';

const app = express();

cloudinary.config({
  cloud_name: 'my_cloud_name',
  api_key: 'my_key',
  api_secret: 'my_secret',
  // secure_distribution: 'mydomain.com',
  // upload_prefix: 'myprefix.com'
});

app.post('/upload', fileInterceptor.single('file'), (req, res) => {
  const { file } = req.files;
  cloudinary.uploader
    .upload(file.path, {
      resource_type: 'video',
      public_id: file.originalname,
      overwrite: true,
      notification_url: 'https://mysite.example.com/notify_endpoint',
    })
    .then((result) => console.log(result));
});
```

El código que aquí vemos como controller se podría encapsular en un interceptor para que sea más reutilizable.

En el caso del registro, se puede guardar en una base de datos la URL del fichero en Cloudinary, en lugar de la ruta del fichero en el disco.

```ts
app.post('/upload', fileInterceptor.single('file'), (req, res) => {
  const { file } = req.files;
  cloudinary.uploader
    .upload(file.path, {
      resource_type: 'video',
      public_id: file.originalname,
      overwrite: true,
      notification_url: 'https://mysite.example.com/notify_endpoint',
    })
    .then((result) => {
      const { name, email } = req.body;
      db.save({ name, email, url: result.secure_url });
    });
});
```
