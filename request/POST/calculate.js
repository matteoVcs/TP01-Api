const express = require("express");
const router = express.Router();

function calculate(x, y, operator) {
    var result = 0;

    if (isNaN(x) || isNaN(y)) {
        return {
            error: "Invalid input"
        }
    }
    switch (operator) {
        case 'addition':
            result = x + y;
            break;
        case 'soustraction':
            result = x - y;
            break;
        case 'multiplication':
            result = x * y;
            break;
        case 'division':
            if (y == 0) {
                return{ 
                    error: "Cannot divide by zero"
                }
            }
            result = x / y;
            break;
        }
    return { result: result };
}

router.get('/', (req, res) => {
    var x = req.query.x;
    var y = req.query.y;
    var operator = req.query.operator;

    result = calculate(parseInt(x), parseInt(y), operator);

    res.send(
        result,
    )
});

module.exports = router;