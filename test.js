const array = [
    {
        name: "khyati",
        surname: "soni",
        age: 22,
        id: "5252552"
    },
    {
        name: "harshil",
        surname: "soni",
        age: 25,
        id: "868686"
    },
    {
        name: "ritik",
        surname: "soni",
        age: 23,
        id: "81550"
    }
];


const ritikNew = {
    name: "hrithik",
    surname: "soni",
    age: 23,
    id: "81550"
}

function update(id) {
    const oldArray = array;
    const newArray = oldArray.map((p) => {
        if (p.id === id) {
            return ritikNew
        }
        return p;
    })
    console.log("newArray", newArray)
}

update("81550")