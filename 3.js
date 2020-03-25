function User ( name ) {
    this.name = name
    User.counter++
    this.id = User.counter
}
User.counter = 0

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]