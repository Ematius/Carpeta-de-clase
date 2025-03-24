# guia testing vite



test('', () => {})
test ('descripción' ) el string es la descripción de lo que vas a testear y luego la función arrow callback anónimo

luego en la función pone el:
expect(add(2,3))
que viene a decir lo que esperas, 
seria espero que la función add
expect(add(2,3).toBe(5))
sea 5,

    en ts{
      "types": [ "vitest/globals"]
    }
introduces esto incluyes los globales no te hace falta importarlo en cada fichero

y añadir en vitest.config.ts esto:

    import { defineConfig } from 'vitest/config';

    export default defineConfig({
        test: {
            include: ['**/*.test.ts'],
            globals:true,
        },
    });

## elementos básicos de test

elementos:
  describe: agrupar distintos test
  test: test unitario
  it: test unitario
  expect: aserción, estructuras 
  Matcher: toBe, to..., etc...