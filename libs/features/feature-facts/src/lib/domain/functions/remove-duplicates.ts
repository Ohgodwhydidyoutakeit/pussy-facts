



export function RemoveDuplicatesFromTheSecondArray(firstArray: string[], secondArray: string[]): string[] {
    return secondArray.filter(fact => !firstArray.includes(fact));
}