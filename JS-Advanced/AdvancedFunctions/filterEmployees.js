function filterEmployees(input, criteria) {
  let data = JSON.parse(input);
  let [neededProperty, neededPropertyValue] = criteria.split("-");
  let counter = 0;

  for (let obj of data) {
    const firstName = obj["first_name"];
    const lastName = obj["last_name"];
    const email = obj["email"];
    if (criteria == "all") {
      console.log(`${counter}. ${firstName} ${lastName} - ${email}`);
      counter++;
      continue;
    }
    if (obj[neededProperty] == neededPropertyValue) {
      console.log(`${counter}. ${firstName} ${lastName} - ${email}`);
      counter++;
    }
  }
}
filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
   {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
  "gender-Female"
);
