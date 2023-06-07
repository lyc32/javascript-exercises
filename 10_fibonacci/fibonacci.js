const fibonacci = function(index)
{
    if(Number(index) <= 0)
    {
        return "OOPS";
    }
    else if((Number(index) == 1) || (Number(index) == 2))
    {
        return 1;
    }
    else
    {
        let exNumber1 = 1;
        let exNumber2 = 1;
        let result = 0;
        for(let i = 3; i <= Number(index); i++)
        {
            result = exNumber1 + exNumber2;
            exNumber1 = exNumber2;
            exNumber2 = result;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = fibonacci;
