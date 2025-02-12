# SuperBase

Project URL : Para conectar con la base de datos

    import { createClient } from '@supabase/supabase-js' //instalas esto

    const supabaseUrl = 'https://uhsbbtnzwwxcbsqpeain.supabase.co' //la url que te doy arriba
    const supabaseKey = process.env.SUPABASE_KEY // la key que te dado arriba y lee en el .env
    const supabase = createClient(supabaseUrl, supabaseKey) // Crea la base con esta URL y esta KEY

La api key se guarda en .env



Pasos:
Si vas a MySQL descarga entera.

Descargo pgAdmin 4

En supaBase su entra en configuración en Database, 
descargo SSL Configuration, el enlace de abajo 
luego entras en connect arriba,
Session pooler
Only recommended as an alternative to Direct Connection, when connecting via an IPv4 network.

pgadmin4 entramos en new server, rellenamos general y en connection, entrontrando en sesion poller en el desplegable pegamos lo que va poniendo menos lo ultimo

vamos a parametros añadimos nuevo parametro root certificate, y añadimos el fichero descargado



https://supabase.com/dashboard/project/_/settings/database 
https://supabase.com/dashboard/project/uhsbbtnzwwxcbsqpeain/settings/database


mysql entramos en custom, y selectionamos todos menos el router, 

    server es lo que os esta dando supabase, asi que hay que instalarlo, 

casi todo es siguiente y luego entras en wordbrench


Local y online no hay diferencia porque va por direcciones ip