const schedule = require('node-schedule')
const { start } = require('repl')
// at a particular date & time
// const someDate = new Date('2022-08-11T13:06:00')

// schedule.scheduleJob('monitoing', someDate, () => {
//     console.log('job ran at ', new Date().toString())
// })

/**
node node-schedule.js
job ran at  Thu Aug 11 2022 13:06:00 GMT+0530 (India Standard Time) 
 */

// at recurrent intervals
// schedule.scheduleJob('monitoringJob', '*/2 * * * * *', () =>{
//     console.log('I just ran the job')
//     schedule.cancelJob('monitoringJob')
// })

// cancelling jobs

// const cronJob = schedule.scheduleJob('*/1 * * * *', () =>{
//     console.log('Job is initiated')
//     cronJob.cancel()
// })


/**
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
 */

const rule = new schedule.RecurrenceRule();
rule.minute = 1;
const cronJob = schedule.scheduleJob(rule, () =>{
    console.log('Job is initiated')
    // want to trigger the app.js
})
