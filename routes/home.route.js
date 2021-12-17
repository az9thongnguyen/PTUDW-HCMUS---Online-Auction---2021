import express from 'express';
import passport from 'passport';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render('home');
    });

router.route('/login')
    .get((req, res) => {
        res.render('login');
    })
    .post(passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));


router.route('/logout')
    .get((req, res) => {
        req.session.auth = false;
        req.session.user = null;
        res.redirect('/login');
    });


router.route('/signup')
    .get((req, res) => {
        res.render('signup');
    });


router.route('/register')
    .get((req, res) => {
        res.render('register');
    });


router.route('/about')
    .get((req, res) => {
        res.render('about');
    });


export default router;