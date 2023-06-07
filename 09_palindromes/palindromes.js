const palindromes = function (inputString)
{
    let string1 = inputString.toLowerCase().replace(/[`:_.~!@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~！@#￥%……&*（）—— \+ ={}|《》？：“”【】、；‘’，。、]/g, '');
    let string2 = string1.split("").reverse().join("");
    if(string1 === string2)
    {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
