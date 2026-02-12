import { Iheroe } from "./iheroe";

export interface Ipages {
    content: Iheroe[],
    totalPages: number,
    totalElements: number,
    first: boolean,
    last: boolean
}
