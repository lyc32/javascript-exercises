const caesar = function(inputString, index)
{
    let stringArray = inputString.split("");
    let result = '';
    for(let i = 0; i < stringArray.length; i++)
    {
        result = result + getCaesar(stringArray[i],index);
    }
    return result
};

getCaesar = function (letter, index)
{
    //(asc2 >= 65 && asc2 <= 90) || (asc2 >= 97 && asc2 <= 122)
    let asc2 = letter.toLowerCase().charCodeAt();
    if(asc2 >= 97 && asc2 <= 122)
    {
        while( index > 26)
        {
            index = index - 26;
        }

        while(index < -26)
        {
            index = index + 26;
        }

        if( (asc2 + index) >= 97 && (asc2 + index) <= 122)
        {
            if(letter.charCodeAt() >= 97)
            {
                return String.fromCharCode(asc2 + index);
            }
            else
            {
                return String.fromCharCode(asc2 + index).toUpperCase();
            }
        }
        else
        {
            //left
            if(index < 0)
            {
                if(letter.charCodeAt() >= 97)
                {
                    return String.fromCharCode(asc2 + index + 26);
                }
                else
                {
                    return String.fromCharCode(asc2 + index + 26).toUpperCase();
                }
            }
            //right
            else
            {
                if(letter.charCodeAt() >= 97)
                {
                    return String.fromCharCode(asc2 + index - 26);
                }
                else
                {
                    return String.fromCharCode(asc2 + index - 26).toUpperCase();
                }
            }
        }
    }
    else
    {
        return letter;
    }
}

// Do not edit below this line
module.exports = caesar;
