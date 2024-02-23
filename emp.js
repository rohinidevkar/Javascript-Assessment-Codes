// Write down a nested object to store data of company employees

const companyEmployees = {
    employees: [
      {
        id: 1,
        name: 'Rohini Devkar',
        position: 'Software Engineer',
        department: 'Engineering',
        contact: {
          email: 'rjd123@gmail.com',
          phone: '123-456-7890',
        },
      },
      {
        id: 2,
        name: 'Komal More',
        position: 'AWS',
        department: 'Cloud',
        contact: {
          email: 'komal.more@gmail.com',
          phone: '987-654-3210',
        },
      },
    ],
    companyInfo: [
        {
            name: 'Amdocs',
            location: 'Canada',
            foundedYear: 2000,
        },
        {
            name : 'TCS',
            location : 'Pune',
            foundedYear :1983,
        },
    ]
  };
  
  console.log(companyEmployees.employees[0].name); 
  console.log(companyEmployees.companyInfo[1].location); 
  