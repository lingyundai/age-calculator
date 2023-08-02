import moment from "moment";

export function DateUtils(day, month, year) {

    let diffMonth;
    let diffYear;
    let diffDay;
    let diffDayByYear = 0;
    let diffDayByMonth;

    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const inputString = `${year}/${month}/${day}`;
    const today = moment(new Date()).format("YYYY/MM/DD");

    diffYear =  Math.floor(moment.duration(moment(today, 'YYYY/MM/DD')
                    .diff(moment(inputString, 'YYYY/MM/DD'))).asYears());
    console.log("diffyear1 ", diffYear);

    diffDay = Math.floor(moment.duration(moment(today, 'YYYY/MM/DD')
                    .diff(moment(inputString, 'YYYY/MM/DD'))).asDays());
    console.log("diffday1 ", diffDay);


    // if (moment([year]).isLeapYear()) {
    //     console.log("1111111");
    // }

    if (diffYear < 1) {
        diffYear = 0;
        diffMonth = moment().diff(inputString, 'months');
        console.log("diffmonth ", diffMonth);
        // diff month should be < 12, 12 month is a year
        if (diffMonth === 12) {
            diffYear = 1;
            diffMonth = 0;
        }
        console.log("diffyear2 ", diffYear);

        diffDayByMonth = daysPerMonth.slice(0, diffMonth).reduce((acc, cur) => acc + cur, 0);
        console.log("diffdaybymonth ", diffDayByMonth);
        // including the fist day and last day
        diffDay = diffDay - diffDayByMonth; 
        console.log("diffday2 ", diffDay);
    } else {
        const diffYearInMonth = diffYear * 12;

        for (let i = 0; i < diffYear * 12; i++) {
            diffDayByYear += daysPerMonth[i%daysPerMonth.length];
        }
        console.log("diffyearinmonth ", diffYearInMonth);

        diffMonth = (moment().diff(inputString, 'months')) - diffYearInMonth;
        console.log("diffmonth2 ", diffMonth);

        diffDayByMonth = daysPerMonth.slice(0, diffMonth).reduce((acc, cur) => acc + cur, 0);
        console.log("diffdaybymonth ", diffDayByMonth);

        diffDay = diffDay - diffDayByYear - diffDayByMonth;
        console.log("diffday3 ", diffDay);
    }

    // console.log({ diffDay, diffMonth, diffYear });
    return { diffDay, diffMonth, diffYear };
}