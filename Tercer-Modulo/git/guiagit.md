# guía git

Hay que entender que los commit van del presente al pasado, no del pasado al presente.
Porque el commit solo sabe lo que hay detrás de el, no delante de él.

Las ramas no existen hay que entender que lo que hay son las etiquetas lo que existe y con el head es donde estoy mirando.


## Capas importantes

El contenido del workArea es donde señala el commit

## que es un repositorio

Es un conjunto de commit y etiquetas.

Etiquetas:
  1)Head (Esto es donde estas, es decir lo que estas viendo) con las ramas activas es donde apunta
  2)Main
  
## git reset

Mueve el puntero de la rama del presente al pasado.
Hay dos reset, un hard y con ello perdemos el ver el contenido del workArea del commit del presente y si es soft vuelves al commit anterior pero sin perder el contenido del workArea del commit presente.

Si hiciste un reset hard  tiene tiempo de caducidad si vas hacia atrás los commit y se queda tu etiqueta ahí, los commit presentes se pueden borrar por procesos de limpieza de git, ya que analiza que no tiene ninguna etiqueta apuntando.

Se puede hacer git reset <file> borras el fichero de la staging area 

## git checkout
Mueve el head pero no la etiqueta a diferencia del reset

Mueve el head y que apunte a un a otro lado, llegando a un commit deseado pero el commit presente no pierde una etiqueta asi que no se borraría nunca. Esto es modo detached, desenganche, es algo que nunca se hace.

Como se usa normalmente es en el cambio de ramas, es decir moviendo el head a una rama.


## git remote

conecta los repositorio local con un remoto/s.

## Ley de oro de git en los remotos

No se deben modificar commit que han sido compartidos.


## Mundo de las ramas y sus conceptos

fast forward que es cuando te vas a la rama principal y merges la rama al main solo hay dos patas

recursive(3 ways recursive) hay tres patas cuando hay una rama principal,  y mueves el main al ultimo commit de la rama secundaria  y puedes seguir trabajando ahí, hasta pasarte al main y ya hacer un fast forward normal, este es un caso sencillo.

Hay una principal, y dos ramas secundarias y una apunta con el main a la rama secundaria 2 y te pasas a la secundaria 1, y pasas el main a la rama 1 y haces 

estoy en una rama y merge es la rama que mergeo hacia mi

un commit que tiene dos hijos(dos ramas) la una forma de refucionar las dos ramas, git merge "nombre de la rama" traigo la información. y entonces se crea un nuevo commit al hacer el git merge... y asi se funciona tus tu rama y se añade la rama con un commit 


main 1 2 3, rama Emad 4 y 5, y jero 6 y 7.



understanding git en youtube 