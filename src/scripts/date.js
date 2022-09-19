import { DateTime } from 'luxon';

export const dateToSendToServer = DateTime.now().toUTC().toISO();

export const dateToProcessOnFrontEnd = (ISO_STRING_from_server) => DateTime.fromISO(ISO_STRING_from_server);

export const dateToShowToUser = (ISO_STRING_from_server) => dateToProcessOnFrontEnd(ISO_STRING_from_server).toLocal().toFormat("DDD");
