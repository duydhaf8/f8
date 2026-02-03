import { Master, MasterI } from "./Master";

export interface CustomerI extends MasterI {
    receiveMsg: (msg: string) => void
}

export class Customer extends Master implements CustomerI {
    public receiveMsg(msg: string): void {
        console.log(`${this.getName()} have received the msg: ${msg}`)
    }
}
