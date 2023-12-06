const users = requre('./models/users.model')
exports.getUsers = (req,res) => {
    res.send('bismillah')
};
exports.saveUser = (req, res)=>{
    const name = req.body.name
    const age = Number(req.body.age)
    const user = {
        name,
        age
    }
    users.push(user)
    res.status(200).send('paisimona')

};