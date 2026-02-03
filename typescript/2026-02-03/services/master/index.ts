export interface MasterI {
    getId: () => number
    getName: () => string
    setName: (name: string) => void
}

export class Master implements MasterI {
    private id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    setName(name: string): void {
        this.name = name
    }

    public getId(): number {
        return this.id
    }

    public getName(): string {
        return this.name
    }
}
