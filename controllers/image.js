var sidebar = require("../helpers/sidebar")
var count = 0
module.exports = {
    index: function (req, res) {
        var viewModel = {
            image: {
                uniqueId: 1,
                title: 'Sample Image 1',
                description: 'This is a sample',
                filename: 'sample1.jpg',
                views: 0,
                likes: 0,
                timestamp: Date.now(),
            },
            comments: [
                {
                    image_id: 1,
                    email: 'test@testing.com',
                    name: 'Test Tester',
                    gravatar: 'http://lorempixel.com/75/75/animals/1',
                    comment: 'This is a comment..',
                    timestamp: Date.now(),
                },
                {
                    image_id: 1,
                    email: 'test@testing.com',
                    name: 'Test Tester',
                    gravatar: 'http://lorempixel.com/75/75/animals/2',
                    comment: 'This is a second comment..',
                    timestamp: Date.now(),
                }
            ]
        };
        sidebar(viewModel, function (viewModel) {
            res.render('image', viewModel);
        })

    },
    create: function (req, res) {
        res.send('The image:create POST controller');
    },
    like: function (req, res) {
        count++
        res.json({likes:count})
    },
    comment: function (req, res) {
        res.send('The image:comment POST controller');
    }
};