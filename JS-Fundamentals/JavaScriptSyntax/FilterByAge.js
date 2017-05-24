function FilterByAge(minAge, NameA, ageA, NameB, ageB) {
    var Person1 = {name:NameA, age:ageA};
    var Person2 = {name:NameB, age:ageB};
    if (Person1.age >= minAge) console.log(Person1);
    if (Person2.age >= minAge) console.log(Person2);
}

FilterByAge(12, 'Ivan', 15, 'Asen', 9);
