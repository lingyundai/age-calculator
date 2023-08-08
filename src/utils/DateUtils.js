import moment from "moment";

export function DateUtils(day, month, year) {

    let diffMonth = 0;
    let diffYear = 0;
    let diffDay = 0;

    const inputString = `${year}/${month}/${day}`;
    const stringFormat = 'YYYY/MM/DD';
    const today = moment(new Date()).format(stringFormat);
    console.log("today, ", today);

    diffYear = moment.duration(moment(today, stringFormat)
                    .diff(moment(inputString, stringFormat))).years();
    console.log("diffyear og ", diffYear);
    diffMonth = moment.duration(moment(today, stringFormat)
                    .diff(moment(inputString, stringFormat))).months();
    console.log("diffmonth og ", diffMonth);

    diffDay = moment.duration(moment(today, stringFormat)
                    .diff(moment(inputString, stringFormat))).days();
    console.log("diffday og ", diffDay);

    return { diffDay, diffMonth, diffYear };
}