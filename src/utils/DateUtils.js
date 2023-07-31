import moment from "moment";

export function DateUtils(day, month, year) {

    let diffMonth;
    let diffYear;
    let diffDay;
    let dayByMonth;
    
    const inputString = `${year}/${month}/${day}`;
    console.log("birth: ", inputString);

    const today = moment(new Date()).format("YYYY/MM/DD");
    console.log("today ", today);

    diffYear =  Math.floor(moment.duration(moment(today, 'YYYY/MM/DD')
        .diff(moment(inputString, 'YYYY/MM/DD'))).asYears());
    console.log("diffyear ", diffYear);

    diffDay = Math.floor(moment.duration(moment(today, 'YYYY/MM/DD')
        .diff(moment(inputString, 'YYYY/MM/DD'))).asDays());
    console.log("diffday: ", diffDay);

    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (moment([year]).isLeapYear()) {
        console.log("1111111");
    }

    // diff year < 1
    // diff year > 1
      // diff month > 1
      // diff month < 1

    if (diffYear < 1) {
        diffYear = 0;
        diffMonth = moment().diff(inputString, 'months');
        console.log("diffmonth ", diffMonth);
        console.log("diffyear1 ", diffYear);
        // diff month will only be less than 12 because if it is over 12 it will be considered a year
        for (var i=0; i<diffMonth; i++) {
            dayByMonth += daysPerMonth[i]
            console.log("here:", dayByMonth);
          }
    } else {
        const diffYearInMonth = diffYear * 12
        diffMonth = (moment().diff(inputString, 'months')) - diffYearInMonth;
        console.log("diffmonth ", diffMonth);
    } 

}