export function validateInt(value: string): number | null {
    if (!/^\d+$/.test(value)) {
        return null;
    }

    const number = Number(value);
    return Number.isSafeInteger(number) ? number : null;
}