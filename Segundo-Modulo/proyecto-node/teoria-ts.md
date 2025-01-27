# TS

tipos literal: Es un valor concreto/s
Aserción de tipos: El tipo lo decides tu, no la inferencia.
La aserción puede tener dos pasos,  decidir con as ....
objetos. propiedades
guardia de tipos: tengo una condición a nivel de las variables que restringe el tipo, es decir dentro de un if(), JS ajusto 
Tuplas: es una array limitada, de valores y de tipos, ayuda mucho ha hacer una array ordenada.
|| = me vale que seas este o este
&& = objetos que sean varias cosas

## Concepto de tipos propios

  Esta en 02-tipos.ts todo el contenido


## filosofía de OOP

  Hay clase abstracta que no puede heredar que es la padre, es decir no se puede ser mamífero sin ser alguna animal,
  pero en OOP si existiría ser mamífero.
  se coloca como abstract class ...
  una función abstract no puede llevar ninguna implementación es decir: abstract greet() No se puede poner = {...}
  y lo escribirías en la clase hija, ahi implementarías el {}, ya que cada hijo lo hace diferente por eso es abstracto
  Si en los hijos que extends del padre hay una función de abstract y si no se incluye en hijo se queja porque se hace obligatorio

  Los interfaces se usan en el concepto de una clase.

  interface user{
    ...
  }
  class Employee extends Person implements User{}
  hay que introducir interfaces con implements debes hay que ver el interface como una suma de reglas que debes implementar si o si.

  interface Repository



