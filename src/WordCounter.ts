import axios from "axios";
import fs from "fs"

interface WordCountResult {
    totalWords: number;
    totalLetters: number;
    totalSpaces: number;
    repeatedWords: Record<string, number>;
}



class WordCounter {
    private static instance: WordCounter;
    
    private constructor() {}
  
    public static getInstance(): WordCounter {
      if (!WordCounter.instance) {
        WordCounter.instance = new WordCounter();
      }
      return WordCounter.instance;
    }
  
    public async readFileContent(path: string): Promise<string> {
      if (path.startsWith('http')) {
        const response = await axios.defaults.data.get(path);
        return response.data;
      } else {
        return fs.promises.readFile(path, 'utf-8');
      }
    }
  
    public countWords(content: string): WordCountResult {
        const words = content.split(/\s+/);
        const wordCounts: Record<string, number> = {};
        let totalLetters = 0;
        let totalSpaces = words.length - 1;
      
        words.forEach((word) => {
          totalLetters += word.length;
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        });
      
        const repeatedWords: Record<string, number> = {};
        for (const [word, count] of Object.entries(wordCounts)) {
          if (count > 10) {
            repeatedWords[word] = count;
          }
        }
      
        return {
          totalWords: words.length,
          totalLetters,
          totalSpaces,
          repeatedWords,
        };
      }
  }
  
  export default WordCounter.getInstance();