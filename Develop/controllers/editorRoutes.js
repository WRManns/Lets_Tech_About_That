const router = require('express').Router();
// const sequelize = require('../config/connection');
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
    BlogPost.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [User]
    }).then(blogPostData => {
        const blogPosts = blogPostData.map(blogPost => blogPost.get({ plain: true }));
        res.render('dashboard', { blogPosts, loggedIn: true });
    }).catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});
router.get('/edit/:id', withAuth, (req, res) => {
    BlogPost.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'blog_text', 'date_created'],
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'date_created'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    }).then(blogPostData => {
        if (!blogPostData) {
            res.status(404).json({ message: 'Invalid ID' });
            return;
        }
        const blogPost = blogPostData.get({ plain: true });
        res.render('edit', { blogPost, loggedIn: true });
    }).catch(err => {
        res.status(500).json(err);
    });
})
router.get('/new', (req, res) => {
    res.render('newPost');
});
module.exports = router;