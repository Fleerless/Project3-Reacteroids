const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')


router.get('/', (req, res, next) => {

    console.log(req.user)
    if (req.user) {

        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in now', req.user);
        var userInfo = {
            username: req.user.username,
            password: req.user.password,
            shipColor: req.user.shipColor
        };
        // res.json(userInfo);
        console.log('we are hitting this poibt')
        res.json(req.user)
    }
)
router.put('/highscore', (req, res) => {

    console.log(req.body);

    User.findOneAndUpdate({ username: req.body.username }, { highScore: req.body.score }, err => {

        console.log('hello')



    })


})





router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})



router.get('/scorehigh', (req, res, next) => {
    console.log('high scores')
    console.log(res);


    User.find().sort({ highScore: -1 }).then(data=>{
        console.log(data);
        res.json({
            scores: data
        })
    }).catch(error=>{
        console.log(error);
        res.send(error);

    })
       
    
})

router.put('/storeupdate', (req, res, next) => {
    console.log('store upgrade')
    console.log(res);


    User.update(
        { "username": req.body.username },{$set: {"shipColor": colors}}).then(data=>{
        console.log(data);
        res.json({
            colors: data
        })
    }).catch(error=>{
        console.log(error);
        res.send(error);

    })
       
    
})


module.exports = router