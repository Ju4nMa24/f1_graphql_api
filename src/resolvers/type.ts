import { IResolvers } from 'graphql-tools';
import { getValues, getWikipediaMobileUrl } from '../lib/util';

const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => getValues(parent.name),
        circuit: parent => parent.Circuit,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Circuit: {
        id: parent => parent.circuitId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        name: parent => parent.circuitName,
        location: parent => parent.Location
    },
    Driver: {
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        permanentNumber: parent => getValues(parent.permanentNumber),
        code: parent => getValues(parent.code)
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors,
    },
    Constructor: {
        constructorId: parent => parent.constructorId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Location: {
        lng: parent => parent.long
    }
};

export default type;