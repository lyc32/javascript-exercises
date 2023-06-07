const repeatString = function(token,number)
{
    if(number >= 0)
    {
        var solution = '';
        for(let i = 1; i <= number; i++)
        {
            solution = solution + token;
        }
        return solution;
    }
    else
    {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;
