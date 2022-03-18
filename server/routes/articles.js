var express = require('express');
var router = express.Router();


router.get("/", function(req, res, next) {
    const articles= [
        {
            id:1,
            image: 'https://picsum.photos/id/1036/4608/3072',
            title: "Post 1",
            date: new Date(),
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
            id:2,
            image: 'https://picsum.photos/id/1036/4608/3072',
            title: "Post 2",
            date: new Date(),
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
            id:3,
            image: 'https://picsum.photos/id/1040/4496/3000/',
            title: "Post 3",
            date: new Date(),
            text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        }
    ]
    res.send(articles);
 });



router.get('/:id', (req, res, next) => {
    const id = req.params.id
    console.debug(req.params);
    if (id) {
        const article = articles.find((a) => a.id === Number.parseInt(id));
        res.send(article);
    } else {
        res.send("Not Found");
    }
});

module.exports = router;

