const router = require('express').Router();
const { Comment } = require('../../models');


router.get('/', (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/:id',  async (req, res) => {
    try {
        const newComment = await Comment.create({
        ...req.body,
                blog_id: req.body.blog_id,
                user_id: req.session.user_id,
            })
            res.status(200).json(newComment);
            }catch(err) {

                res.status(400).json(err);
            }   
});

// router.put('/:id', (req, res) => {
//     Comment.update({
//         text: req.body.comment_text
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(commentData => {
//         if (!commentData) {
//             res.status(404).json({ message: 'No comment found with this id' });
//             return;
//         }
//         res.json(commentData);
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.delete('/:id', (req, res) => {
//     Comment.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(commentData => {
//         if (!commentData) {
//             res.status(404).json({ message: 'No comment found with this id' });
//             return;
//         }
//         res.json(commentData);
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });
module.exports = router;