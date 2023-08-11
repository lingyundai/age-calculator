import moment from "moment";

export function DateUtils(day, month, year) {

    let diffMonth = 0;
    let diffYear = 0;
    let diffDay = 0;

    const inputString = `${year}/${month}/${day}`;
    const stringFormat = 'YYYY/MM/DD';
    const today = moment(new Date()).format(stringFormat);

    diffYear = moment.duration(moment(today, stringFormat)
                    .diff(moment(inputString, stringFormat))).years();

    diffMonth = moment.duration(moment(today, stringFormat)
                    .diff(moment(inputString, stringFormat))).months();

    diffDay = moment.duration(moment(today, stringFormat)
                    .diff(moment(inputString, stringFormat))).days();

    return { diffDay, diffMonth, diffYear };
}