import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonsList(_: void, __: any, {dataSources}) {
            return await dataSources.seasonsData.getSeasons().then(
                (data: any)  => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_: void, {year}, {dataSources}){
            return await dataSources.races.getYear(year).then(
                (data: any)  => data.MRData.RaceTable.Races
            );
        },
        async raceSelect(_: void, {year, round}, {dataSources}){
            return await dataSources.races.getYearRound(year,round).then(
                (data: any)  => data.MRData.RaceTable.Races[0]
            );
        },
        async driversList(_: void, {limit, page}, {dataSources}){
            return await dataSources.drivers.getDrivers(limit, page).then(
                (data: any)  => data.MRData.DriverTable.Drivers
            );
        },
        async infoDrivers(_: void, {year, career, pilot}, {dataSources}){
            return await dataSources.drivers.getInfoDrivers(year,career,pilot).then(
                (data: any)  => data.MRData.DriverTable.Drivers
            );
        },
        async SeasonPilotRanking(_: void, {year}, {dataSources}){
            return await dataSources.drivers.getSeasonPilotRanking(year).then(
                (data: any)  => data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            );
        },
        async historyCircuits(_: void, {limit, page}, {dataSources}){
            return await dataSources.circuits.getCircuits(limit, page).then(
                (data: any)  => data.MRData.CircuitTable.Circuits
            );
        },
        async circuitSelect(_: void, {id}, {dataSources}){
            return await dataSources.circuits.findCircuit(id).then(
                (data: any)  => data.MRData.CircuitTable.Circuits[0]
            );
        }
    }
};

export default query;