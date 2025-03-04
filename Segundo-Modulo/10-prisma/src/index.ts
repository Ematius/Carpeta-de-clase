//DB_URL="mysql://root:Curso@2025@localhost:3306/world"

import { $Enums, PrismaClient, Prisma } from '@prisma/client';

console.log('Hello, world By Prisma ORM!');
//Extendemos 
const prisma = new PrismaClient().$extends({
    result: {
        country: {
            density: {
                needs: { population: true, surfaceArea: true },
                compute(country) {
                    return country.population / country.surfaceArea.toNumber();
                },
            },
        },
    },
});


export const getCountries = async () => {
    const countries = await prisma.country.findMany();
    console.log(countries);
};

export const selectOptions: Prisma.CountrySelect = {
        code: true,
        name: true,
        capital: true,
    };

export const getCountriesByContinents = async (
    continent: $Enums.CountryContinent,
) => {
    const selectOptions: Prisma.CountrySelect = {
        code: true,
        name: true,
        capital: true,
    };

    const countries = await prisma.country.findMany({
        where: {
            continent: continent,
        },
        select: selectOptions,
    });
    console.log(countries);
};

// await getCountries();
// await getCountriesByContinents('Europe');

export const getCitiesBycountryCode = async (countryCode: string) => {
    const cities = await prisma.city.findMany({
        where: {
            countryCode
        },
    });
    console.log(cities);
}


//await getCitiesBycountryCode('ESP');

const omitOptions: Prisma.CityOmit = {
        id:true,
        countryCode: true,
    };

export const getCitiesByCountryCode = async (countryCode: string) => {
    const omitOptions: Prisma.CityOmit = {
        id:true,
        countryCode: true,
    };
    const cities = await prisma.city.findMany({
        where: {
            countryCode
        },
        select: omitOptions
    });
    console.log(cities);
}

//await getCitiesByCountryCode('ESP');


export const gitCitiesFromContinentsWithCountryName = async(
    continent: $Enums.CountryContinent
) => {
    const cities = await prisma.city.findMany({
        omit:omitOptions,
        include: {
            country:{
                select:{
                    name:true,
                }
            }
        },
        where:{
            country:{
                continent
            }
        }
    })
    console.log(cities);

}


//await gitCitiesFromContinentsWithCountryName('Europe');


export const getCitiesWithPopulationGreaterThan = async (population: number) => {
    const cities = await prisma.city.findMany({
        omit:omitOptions,
        where:{
            population:{
                gt:population
            }
        }
    })
    console.log(cities);
}


//await getCitiesWithPopulationGreaterThan(10000000)

//prisma.$executeRaw() aquí se puede ejecutar cualquier query de SQL
//prisma.$executeRawUnsafe() 


/*
## Ejercicio 1

-   Listar todos los países con su población y su extensión, incluyendo los correspondientes alias adecuados en español
-   Añadir un elemento calculado: la densidad
-   Listar los 10 primeros países
-   Listar los países entre el 10 y el 20
-   Ordenar la salida según población (sin verla)
-   Ver la población y comprobar el orden
*/

// Listar todos los países con su población y su extensión, incluyendo los correspondientes alias adecuados en español
export const getCountryWithPopulationAndExtension = async () => {
    const countries = await prisma.country.findMany({
        select: {
            name: true,
            population: true,
            surfaceArea: true,
            code: true,            
        },
    });
    console.log(countries);
}

 //await getCountryWithPopulationAndExtension();

//-   Añadir un elemento calculado: la densidad
export const calDensity = async () =>{
    const country = await prisma.country.findMany({
        select: {
            name: true,
            population: true,
            surfaceArea: true,
        },})
        return country.map((country) => {
            const density = country.population / country.surfaceArea.toNumber();
            return {
                ...country,
                density,
            };
        });
    };

    




//Listar los 10 primeros países
export const getFirstTenCountries = async () => {
    const countries = await prisma.country.findMany({
        take: 10,
    });
    console.log(countries);
};

//await getFirstTenCountries();



//Nombre de la ciudad, país y su forma de gobierno de las ciudades de más de x de habitantes de z continentes


export const getCitiesPoliticsWithPopulationGreaterThan = async (
    limit: number,
    continent: $Enums.CountryContinent
) =>{
    const cities = await prisma.city.findMany({
        select:{
            name:true,
            country:{
                select:{
                    name:true,
                    governmentForm:true
                    
                }
            }
        },
        where: {
            population: {
                gt:limit
            },
            country:{
                continent
            }
        },
        
    })
    return console.log(cities); 

}

//await getCitiesPoliticsWithPopulationGreaterThan(3_000_000,'Europe');


 //Seleccionamos ciudades Europeas de más de 1.500.000 de habitantes 
 // indicado el país al que pertenecen y sus lenguajes oficiales


 export const lenguasOficiales = async () =>{
    const cities = await prisma.city.findMany({
        select: {
            name: true,
            country: {
                select: {
                    name: true,
                    countryLanguage:{
                        select: {
                            language:true,
                            isOfficial:true
                        }
                    }
                },
            },
        },
        where: {
            population: {
                gt: 1500000,
            },
            country:{
                continent:'Europe'
            }
            
        },
    });
    return console.log(cities); 
 }

 //await lenguasOficiales()



// ## Ejercicio 5

// Funciones de agregación

// -   Cuantos países hay en el mundo según nuestra tabla
// -   Cual es la superficie total del mundo
// -   Cual es la superficie media de los países del mundo
// -   Cual es el país más grande del mundo
// -   Cual es el país más pequeño del mundo

// -   Cual es la superficie y la población de cada continente

export const calCountry = async () => {
    const result = await prisma.country.aggregate({
        _count:{code:true},
        _sum: {surfaceArea:true,
            population:true
        }, //superficie total
        _avg:{surfaceArea:true,
            population:true
        },
        _max:{region:true}
    })
    ;
    return result
    
}



await calCountry()

const getContienentSurface = async () => {
    const result = await prisma.country.groupBy({
        by: ['continent'],
        _sum: {
            surfaceArea: true,
            population: true,
        },
        _avg:{
            population:true,
            surfaceArea:true
        }
    });
    console.log(result);
};

await getContienentSurface()