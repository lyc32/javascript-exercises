const removeFromArray = function(inputArray, ...index)
{
    var solution = [];
    for(let i = 0; i < inputArray.length; i++)
    {
        if (!index.includes(inputArray[i]))
        {
            solution.push(inputArray[i]);
        }
    }
    return solution;
};

// Do not edit below this line
module.exports = removeFromArray;
