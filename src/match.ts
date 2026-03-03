import type {Rating} from "./rating";

export interface Match {
    rate(): [Rating,Rating]
}

export class DefaultMatch implements Match {
    constructor(private player1: Rating, private player2: Rating) {}
    rate(): [Rating,Rating] {
        return [{
            mu: this.player1.mu+1,
            sigma: this.player1.sigma
        },
            {
                mu:this.player2.mu-1,
                sigma: this.player2.sigma
            }]
    }
}