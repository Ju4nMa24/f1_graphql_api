import { pagination } from "../lib/util";
import { F1 } from "./data-source";

export class CircuitsData extends F1 {
    constructor() {
        super();
    }
    async getCircuits(limit: number = -1, page: number = -1) {
        return await this.get(`circuits.json?${pagination(limit, page)}`, {
            cacheOptions: { ttl: 60 }
        });
    }
    async findCircuit(id: string) {
        return await this.get(`circuits/${id}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }
}
