import { checkYear, isEmpty, pagination } from "../lib/util";
import { F1 } from "./data-source";

export class DriversData extends F1 {
    constructor() {
        super();
    }
    async getDrivers(limit: number = -1, page: number = -1) {
        return await this.get(`drivers.json?${pagination(limit, page)}`, {
            cacheOptions: { ttl: 60 }
        });
    }
    async getInfoDrivers(year: string = '', career: number = -1, pilot: string = '') {
        let url = '';
        if (isEmpty(pilot))
            url = (career !== -1) ? `${checkYear(year)}/${career}/drivers.json` : `${checkYear(year)}/drivers.json`;
        else
            url = `drivers/${pilot}.json`;
        return await this.get(url, {
            cacheOptions: { ttl: 60 }
        });
    }
    async getSeasonPilotRanking(year: string) {
        return await this.get(`${checkYear(year)}/driverStandings.json`, {
            cacheOptions: { ttl: 60 }
        });
    }
}
