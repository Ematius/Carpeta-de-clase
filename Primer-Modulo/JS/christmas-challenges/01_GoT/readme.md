# Week 3 - Challenge 1

## GoT DOM

Tendrás que completar un interfaz de usuario para que refleje el modelo deducido del fichero data.json.

## Creación del interface

1. Haz que por cada personaje del array se muestre la ficha correspondiente en el navegador:

   - En el elemento con clase `emoji` tiene que aparecer uno de estos emojis dependiendo del tipo de personaje: 👑 🗡 🎓 🛡
   - Si el personaje está muerto, su foto debe aparecer cabeza abajo (haz el CSS necesario);
   - En la lista con clase `metadata`, haz que sólo aparezcan los `li` correspondientes al personaje.

2. Cuando el usuario haga clic en el botón "muere", tiene que cambiar el estado del personaje, y la interfaz debe reflejar el cambio.
3. Cuando el usuario haga clic en el botón "habla", el elemento con clase `comunicaciones` debe aparecer con el texto y la imagen correspondientes. Haz que este elemento `comunicaciones` tenga la clase `on` durante 2 segundos y luego se le quite.

Crear componentes basados en funciones de vanilla TS
