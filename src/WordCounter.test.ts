import WordCounter from './WordCounter';

describe('WordCounter', () => {
  it('should return the same instance', () => {
    const instance1 = WordCounter;
    const instance2 = WordCounter;

    expect(instance1).toBe(instance2);
  });


  it('should count words', () => {
    const content = 'apple banana apple orange banana apple';
    const result = WordCounter.countWords(content);

    expect(result.totalWords).toBe(6);
    expect(result.totalLetters).toBe(33);
    expect(result.totalSpaces).toBe(5);
    expect(result.repeatedWords).toEqual({});
  });

  it('should get repeated words greater than 10', () => {
    const content = 'apple banana apple orange banana apple apple apple apple apple apple apple apple apple apple apple banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana banana';
    const result = WordCounter.countWords(content);

    expect(result.totalWords).toBe(34);
    expect(result.totalLetters).toBe(191);
    expect(result.totalSpaces).toBe(33);
    expect(result.repeatedWords).toEqual({"apple": 13, "banana": 20});
  });
});