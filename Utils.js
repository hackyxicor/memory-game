export function CreateArrayOfSize(N) {
    return Array.apply(null, { length: N }).map(Number.call, Number);
}