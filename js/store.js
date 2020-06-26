const store = {
  rooms: [
    {
      idRoom: 101,
      capacity: 2,
      price: 50,
      guest: "44567453H",
      avaliable: false,
    },
    {
      idRoom: 102,
      capacity: 2,
      price: 50,
      guest: "44567453H",
      avaliable: false,
    },
    {
      idRoom: 103,
      capacity: 2,
      price: 50,
      guest: "98763245P",
      avaliable: false,
    },
    {
      idRoom: 104,
      capacity: 3,
      price: 75,
      guest: "98763245P",
      avaliable: false,
    },
    {
      idRoom: 105,
      capacity: 1,
      price: 30,
      guest: "",
      avaliable: true,
    },
    {
      idRoom: 201,
      capacity: 2,
      price: 50,
      guest: "",
      avaliable: true,
    },
    {
      idRoom: 202,
      capacity: 2,
      price: 50,
      guest: "",
      avaliable: true,
    },
    {
      idRoom: 203,
      capacity: 2,
      price: 50,
      guest: "",
      avaliable: true,
    },
    {
      idRoom: 204,
      capacity: 3,
      price: 75,
      guest: "",
      avaliable: true,
    },
    {
      idRoom: 205,
      capacity: 1,
      price: 30,
      guest: "",
      avaliable: true,
    },
  ],
  guests: [
    {
      idFamily: "44567453H",
      surname: "Simpson",
      tlf: 123454545,
      guests: [
        { dni: "44567453H", name: "Homer", lastName: "Simpson", age: 40 },
        {
          dni: "1234M",
          name: "Marge",
          age: 36,
        },
        {
          dni: "",
          name: "Bart",
          age: 10,
        },
        {
          dni: "",
          name: "Lisa",
          age: 8,
        },
      ],

      numRoom: [101, 102],
      checkInDate: 20200609,
    },
    {
      idFamily: "98763245P",
      surname: "Potter",
      tlf: 123454545,
      guests: [
        { dni: "9876H", name: "Harry", lastName: "Potter", age: 40 },
        {
          dni: "1234G",
          name: "Ginny",
          age: 36,
        },
        {
          dni: "",
          name: "James Sirius",
          age: 14,
        },
        {
          dni: "",
          name: "Lily Luna",
          age: 12,
        },
        {
          dni: "",
          name: "Albus Severus",
          age: 10,
        },
      ],

      numRoom: [103, 104],
      checkInDate: 20200609,
    },
  ],
};

export { store };
