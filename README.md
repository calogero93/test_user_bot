# Word Counter App

Questo è un'applicazione Node.js in TypeScript che conta il numero di parole, lettere e spazi in un file fornito dall'utente tramite path locale o tramite URL. Inoltre, identifica le parole che si ripetono più di 10 volte nel file.

## Prerequisiti in locale

- Node.js installato (https://nodejs.org/)
- Gestore di pacchetti npm

## Prerequisiti per Docker

 - Docker installato

## Avvio applicazione in locale
1. Installa typescript
```npm install -g typescript ```
2. Installa le dipendenze
 ```npm install ```
3. Compila il progetto in JS
 ```tsc ```
4. avvia
 ```node src/index.js <path o url del file> ```

## Avvio applicazione in locale
1. Builda il container
```docker build -t word_count:v1 . ```
2. Avvia il container 
 ```docker run -v $PWD:/app word_count:v1 -- <path o url del file> ```