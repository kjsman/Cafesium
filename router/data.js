// Published With MIT License, 2018.
// Details on LICENSE

const express   = require('express'); // Express
let router      = express.Router();

let klunch      = require('k-lunch');
let find_domain = require('./domain.js')

router.get('/', function(req, res) {
    let today = new Date();

    let form = {
        year:   req.query.year   ? req.query.year   : today.getFullYear(),
        // January == 0
        month:  req.query.month  ? req.query.month  : today.getMonth() + 1,
        day:    req.query.day    ? req.query.day    : today.getDate(),
        time:   req.query.time   ? req.query.time   : 2,
        code:   process.env.SCHOOL_CODE,
        domain: find_domain(process.env.SCHOOL_CODE),
        phase:  process.env.PHASE
    };
    try {
        klunch.getLunch(form, (error_meal, output_meal) => {
            if (error_meal) res.send([{error: error_meal}]);
            else res.send(output_meal);
        });
    }
    catch (e) {
        res.send([{error: "Unexpected Error. Generally Wrong Input Data."}])
    }
});

module.exports = router;
