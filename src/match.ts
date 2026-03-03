import type {Rating} from "./rating";

export interface Match {
    rate(): Rating[][]
}