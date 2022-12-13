const persons = [
    { name:'Tom Swayer', birthdate: 1876, death: 1945 },
    { name:'Bart Simpson', birthdate: 1989 },
    { name:'Doctor Strange', birthdate: 1930, death: 2020 },
    { name:'Peter Griffin', birthdate: 1999, death: 2017 },
    { name:'Ragnar Lothbrok', birthdate: 760, death: 800 },
]


//Példa a tömb bejárására, hagyományosan for ciklussal 
const _for = () => {
    for (let i = 0 ; i< persons.length; i++) {
        console.log(i,persons[i].name);
    }    

}

// Példa a tömb bejárására a forEach utasitással  
const _forEach = () => {
    persons.forEach ((value,index) => {
       console.log(index,value.death-value.birthdate)
    })   
}

// Példa tömb és objektum értékeinek kiolvosására, bejárására

const _for_of = () => {
    for (person of persons) {
        console.log(person);
    }

}

// Példa tömb és objektum indexének mezőinek kiolvasására, bejárársára
const _for_in = () => {
    for (property in persons) {
        console.log(property,persons[property] );
    }
}

//Példa Objektumtömb teljes bejárására 
const teljesBejaras  = () => {
    for (const person of persons) {
        for (property in person) {
            console.log(property+':',person[property]);
        }
    }
 }
 //teljesBejaras()

// Irassunk ki véletszerűen egy nevet a Persons tömbből!

const feladat_1 = () => {
        console.log(persons[Math.floor(Math.random()*persons.length)].name)

}
feladat_1()
