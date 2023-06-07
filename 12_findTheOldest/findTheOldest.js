const findTheOldest = function(peopleArray)
{
    return peopleArray.reduce(getMax);
};

function getMax(people1, people2)
{
    let people1Age = 0;
    if(people1.yearOfDeath != null)
    {
        people1Age = people1.yearOfDeath - people1.yearOfBirth;
    }
    else
    {
        let date = new Date();
        people1Age = date.getFullYear() - people1.yearOfBirth;
    }
    let people2Age = 0;
    if(people2.yearOfDeath != null)
    {
        people2Age = people2.yearOfDeath - people2.yearOfBirth;
    }
    else
    {
        let date = new Date();
        people2Age = date.getFullYear() - people2.yearOfBirth;
    }
    return people2Age > people1Age? people2: people1;
}

// Do not edit below this line
module.exports = findTheOldest;
