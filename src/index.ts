import WordCounter from './WordCounter';

async function main() {
    const filePath = process.argv[2];

  if (!filePath) {
    console.error('Errore: Inserisci il percorso del file come argomento.');
    process.exit(1);
  }


  try {
    console.log(filePath)
    const content = await WordCounter.readFileContent(filePath);
    const result = WordCounter.countWords(content);

    console.log('Numero totale di parole nel file:', result.totalWords);
    console.log('Numero totale di lettere nel file:', result.totalLetters);
    console.log('Numero totale di spazi nel file:', result.totalSpaces);
    console.log('Parole che si ripetono più di 10 volte:', result.repeatedWords);
  } catch (error) {
    let err: any = error;
    console.error('Errore durante la lettura del file:', err.message);
  }
}

main();