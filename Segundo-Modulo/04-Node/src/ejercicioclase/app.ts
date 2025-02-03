// Todos las interfaces de los métodos definen en retorno como promesas
// - TypeODM
// - Repository

import { RepoNoteFile } from './repo-notes-file.js';
const repo = new RepoNoteFile();
// Las funciones helpers son async y retornan promesas

// La clase ODMLite pasa a ser ODMLiteAsync

// Los test de ODMLite pasan a ser async

repo.read().then(console.log);
// repo.readById('d056d7d9').then(console.log);
// repo.create({ content: 'Nota 3' }).then(console.log);
// repo.update('d056d7d9', { content: 'Nota 3 Updated' }).then(console.log);
// repo.delete('d056d7d9').then(console.log);
