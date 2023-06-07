const sumAll = function(a,b)
{
    if((typeof a === 'number') && ( typeof b === 'number') && (a > 0) && (b > 0))
    {

        return b>a ? ((a + b)*(b - a + 1)/2) : ((a + b)*(a - b + 1)/2) ;
    }
    else
    {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
