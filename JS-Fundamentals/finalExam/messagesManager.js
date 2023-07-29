function messagesManagar(data) {
  let possibleMessages = Number(data.shift());
  let users = [];

  for (let line of data) {
    let tokens = line.split("=");
    let command = tokens[0];

    switch (command) {
      case "Add": {
        let username = tokens[1];
        let sentMessages = Number(tokens[2]);
        let receivedMessages = Number(tokens[3]);
        let exists = false;
        for (let element of users) {
          if (element["name"] == username) {
            exists = true;
          }
        }
        if (!exists) {
          users.push({
            name: username,
            sent: Number(sentMessages),
            received: Number(receivedMessages),
          });
        }
        break;
      }
      case "Message": {
        let exists1 = false;
        let exists2 = false;
        let senter = tokens[1];
        let receiver = tokens[2];
        let length = users.length;
        for (let el of users) {
          if (el["name"] == senter) {
            exists1 = true;
          }
          if (el["name"] == receiver) {
            exists2 = true;
          }
        }
        if (exists1 && exists2) {
          for (let i = 0; i < length; i++) {
            if (users[i] !== undefined) {
              let element = users[i];
              if (element["name"] == senter) {
                element["sent"] += 1;
                let sum = element["sent"] + element["received"];
                if (sum >= possibleMessages) {
                  console.log(`${element["name"]} reached the capacity!`);
                  users.splice(i, 1);
                  break;
                }
              }
            }
          }
          for (let i = 0; i < users.length; i++) {
            if (users[i] !== undefined) {
              let element = users[i];
              if (element["name"] == receiver) {
                element["received"] += 1;
                let sum = element["sent"] + element["received"];
                if (sum >= possibleMessages) {
                  console.log(`${element["name"]} reached the capacity!`);
                  users.splice(i, 1);
                  break;
                }
              }
            }
          }
        }
        break;
      }
      case "Empty": {
        let username = tokens[1];
        if (username == "All") {
          users = [];
        } else {
          for (let i = 0; i < users.length; i++) {
            let element = users[i];
            if (username == element["name"]) {
              users.splice(i, 1);
            }
          }
        }
      }
      case "Statistics": {
      }
    }
  }
  console.log(`Users count: ${users.length}`);
  for (let user of users) {
    let name = user["name"];
    let sent = user["sent"];
    let received = user["received"];
    let sum = sent + received;
    console.log(`${name} - ${sum}`);
  }
}
messagesManagar([
  "10",
  "Add=Berg=9=0",
  "Add=Kevin=8=1",
  "Message=Berg=Kevin",
  "Add=Mark=5=5",
  "Statistics",
]);
