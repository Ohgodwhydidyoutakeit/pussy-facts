import { RemoveDuplicatesFromTheSecondArray } from './remove-duplicates';

describe('RemoveDuplicatesFromTheSecondArray', () => {
  it('should return secondArray unchanged if there are no duplicates', () => {
    const first = ['apple', 'banana'];
    const second = ['cherry', 'date'];
    const result = RemoveDuplicatesFromTheSecondArray(first, second);
    expect(result).toEqual(['cherry', 'date']);
  });

  it('should remove items from secondArray that exist in firstArray', () => {
    const first = ['apple', 'banana'];
    const second = ['banana', 'cherry', 'apple', 'date'];
    const result = RemoveDuplicatesFromTheSecondArray(first, second);
    expect(result).toEqual(['cherry', 'date']);
  });

  it('should return an empty array if all items in secondArray exist in firstArray', () => {
    const first = ['apple', 'banana'];
    const second = ['banana', 'apple'];
    const result = RemoveDuplicatesFromTheSecondArray(first, second);
    expect(result).toEqual([]);
  });

  it('should return secondArray if firstArray is empty', () => {
    const first: string[] = [];
    const second = ['kiwi', 'mango'];
    const result = RemoveDuplicatesFromTheSecondArray(first, second);
    expect(result).toEqual(['kiwi', 'mango']);
  });

  it('should return an empty array if secondArray is empty', () => {
    const first = ['apple', 'banana'];
    const second: string[] = [];
    const result = RemoveDuplicatesFromTheSecondArray(first, second);
    expect(result).toEqual([]);
  });
});
