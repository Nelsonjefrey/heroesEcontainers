import {Powerstats} from "./interfaces/powerstats";
import {Appearance} from "./interfaces/appearance";
import {Biography} from "./interfaces/biography";
import {Work} from "./interfaces/work";
import {Connections} from "./interfaces/connections";
import {Images} from "./interfaces/images";

export interface Heroe {
  "id": number,
  "name": string,
  "slug": string,
  "powerstats": Powerstats[],
  "appearance": Appearance[],
  "biography": Biography,
  "work": Work,
  "connections": Connections,
  "images": Images
}
