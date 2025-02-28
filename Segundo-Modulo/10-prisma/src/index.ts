//DB_URL="mysql://root:Curso@2025@localhost:3306/world"

import { $Enums, PrismaClient, Prisma } from '@prisma/client';

console.log('Hello, world By Prisma ORM!');
const prisma = new PrismaClient();

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


await getCitiesWithPopulationGreaterThan(10000000)

//prisma.$executeRaw() aquí se puede ejecutar cualquier query de SQL
//prisma.$executeRawUnsafe() 