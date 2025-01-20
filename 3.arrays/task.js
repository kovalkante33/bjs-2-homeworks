function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const ages = users.filter(user => user.gender === gender).map(user => user.age);

    if (ages.length === 0) {
        return 0;
    }

    const totalAge = ages.reduce((acc, age) => acc + age, 0);
    const averageAge = totalAge / ages.length;


    return averageAge;
}