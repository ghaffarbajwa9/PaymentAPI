User.create!([
    {
    name: "Ali",
    email: "email@mail.com",
    password_digest: "123"
},
{
    name: "Ahmad",
    email: "ahmad@mail.com",
    password_digest: "123"
}
])

Account.create!([
    {
        name: "fast",
        balance: 2341,
        user_id: 1
    },
    {
        name: "student",
        balance: 231,
        user_id: 2
    }
])

Payment.create!([
    {
        amount: 45,
        date: Date.now(),
        user_id: 1,
        account_id: 1,
    },
    {
        amount: 234,
        date: Date.now(),
        user_id: 2,
        account_id: 2,
    }
])
