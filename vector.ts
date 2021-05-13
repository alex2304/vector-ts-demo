// since vector is mathematical by the task restriction, it can only contain numeric elements
type NumericElementType = number;

class Vector<T extends NumericElementType> {
    private readonly storage: Array<T>;

    constructor() {
        this.storage = [];
    }

    push(...e: T[]) {
        this.storage.push(...e)
    }

    get(i: number): T {
        return this.storage[i];
    }

    length(): number {
        return this.storage.length;
    }

    dotProduct(v: Vector<T>): number {
        let result = 0;
        this.storage.forEach((value: T, index, _) => {
            const anotherElement = v.get(index);
            if (anotherElement && value) {
                result += value * v.get(index);
            }
        });
        return result;
    }

    crossProduct(v: Vector<T>): number {
        let result = 0;
        this.storage.forEach((value: T) => {
            for (let i = 0; i < v.length(); i++) {
                result += v.get(i) * value;
            }
        });
        return result;
    }

}

export default Vector;
