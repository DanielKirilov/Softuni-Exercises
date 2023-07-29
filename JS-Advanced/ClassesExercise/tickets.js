function tickets(data, criteria) {
    class Ticket {
        constructor(d, p, s) {
            this.destination = d;
            this.price = p;
            this.status = s;
        }
    }
  const clonedData = [...data];
  const splitArr = clonedData.map((x) => x.split("|"));
  const ticketsList = splitArr.map(
    ([d, p, s]) => new Ticket(d, Number(p), s)
  );
  const sortedTickets = ticketsList.sort((a, b) => {
    return typeof a[criteria] == "number"
      ? a[criteria] - b[criteria]
      : a[criteria].localeCompare(b[criteria]);
  });
  return sortedTickets;
}
tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
// [ Ticket { destination: 'Boston',
//  price: 126.20,
//  status: 'departed' },
//  Ticket { destination: 'New York City',
//  price: 95.99,
//  status: 'available' },
//  Ticket { destination: 'New York City',
//  price: 95.99,
//  status: 'sold' },
//  Ticket { destination: 'Philadelphia',
//  price: 94.20,
//  status: 'available' } ]
