import { DateTime } from "luxon";

export const dateToSendToServer = DateTime.now().toUTC().toISO();

export const dateToProcessOnFrontEnd = DateTime.fromISO("ISO_STRING_from_server");

export const dateToShowToUser = dateToProcessOnFrontEnd.toLocal().toFormat("DDD");
