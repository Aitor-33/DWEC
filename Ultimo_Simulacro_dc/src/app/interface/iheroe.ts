import { Istats } from "./istats";

export interface Iheroe {

    id: number,
    heroname: string,
    fullname: string,
    image1: string,
    image2: string,
    image3: string,
    gender: string,
    race: string,
    alignment: string,
    powerstats: Istats;

}
