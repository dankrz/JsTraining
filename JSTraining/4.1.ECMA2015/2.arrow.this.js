// Lexical this
var bob = {
    _name: "Bob",
    _friends: ["Alan", "Bill"],
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
    }
  };

bob.printFriends();