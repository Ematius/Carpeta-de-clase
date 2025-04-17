# git hab actions

son automatismos configurados

Es una serie de instrucciones que se van ejecutar en el momento que tu digas

git clone, cd, npm i , git fetch, git checkout, npm run test y quiero efectuar automáticamente los test antes de bajarla

entonces entra github actions, te deja maquina virtual o dockers, usar la cadena de comandos automáticamente en la maquina virtual, antes de hacer git clone. esa maquina virtual normalmente es UBUNTU es Linux, el git hub action levanta esa maquina y asi haces los comandos

dentro del repo, actions y entrar en Skip this and set up a workflow yourself desde ahi se puede y lo graba automático en el orden adecuado
y también se puede hacer manual.

hay dos extensiones yamal y git actions, ayudan a escribir bien en yml porque es diferente y sensible estructura de python por anidamiento

en el yml introduces las idicaciones que tendran git hub actions

    steps:
      - name: Checkout code / el nombre para llamarla
        uses: actions/checkout@v3 // y que quiero que hagas se usan bibliotecas que ya existen
     
     - name: Lint
        run: npm lint este por ejemplo seria verlo en el package.json porque no es universal es especifico de como lo hayas incorporado en el package.json


si tienes duda las indicaciones puedes probarlas en tu pc y asi poder hacerlo antes de un error por si si acaso



## desplique de base de datos

render es para desplegar un server, te da una maquina virtual donde se ejecuta node, esa maquina virtual se queda.

hacer un run build porque igual en node no ejecuta .ts asi para convertir todo el type estar en js y render copiar el repo build, y ejecutar el comando npm sin watch en la maquina virtual de git actions, y una vez maquina virtual en render, y render no tiene base de datos en supabase levantar la base de datos

digitalocean tiene acceso a los tres puntos

ha una forma de forma 

