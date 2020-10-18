/* 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    <li>YYYY-MM-DD HH:mm eg. 20120-01-02 07:05</li> */

    let date = new Date();
    
    let YYYYMMDD = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;

    console.log(YYYYMMDD);