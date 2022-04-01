var express = require('express');
var router = express.Router();

const options = {
 verbose: console.log()

}
const db = require('better-sqlite3')('articles.sqlite', options);


let articles = [{
    id: 1, image: 'https://picsum.photos/seed/picsum/500', title: "Title", date: new Date(), text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
`
}, {
    id: 2, image: 'https://picsum.photos/seed/picsum/500', title: "Title", date: new Date(), text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
`
}, {
    id: 3, image: 'https://picsum.photos/seed/picsum/500', title: "Title", date: new Date(), text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
`
},];


router.get("/", function (req, res, next) {
    const row = db.prepare('SELECT * FROM article ').all();
    console.log(row);
    res.send(row);

});

router.post("/", (req, res) => {
    const body = req.body;
    //////////////////////////////
    const articles = {
        image: body.image,
        title: body.title,
        date: new Date().toISOString(),
        text: body.text
    }
    const stm = db.prepare('INSERT INTO article (image , title, date, text ) VALUES (?,?,?,?)');
    stm.run(...Object.values(article))
    /* const article = {
        id: articles.length + 1, title: body.title, text: body.text, date: new Date()
    }
    */

  //  articles.push(article);
  //  console.table(articles);
    res.send(article);

});

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    console.debug(req.params);
    if (id) {
        const article = db.prepare('SELECT * FROM article WHERE id = ?').get(id);
        res.send(article);
    } else {
        res.send("Not Found");
    }
});

router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    if (id) {
        const article = db.prepare('SELECT * FROM article WHERE id = ?').get(id);
        if (article) {
            Object.assign(article, body);
            const stm = db.prepare(

                "UPDATE article SET image = ?, title = ?, date = ?, text =? WHERE id=?"
            );
            //const info = stm.run(...Object.values(article));
            stm.run(article.image, article.title, article.date, article.text, parseInt(id));
            console.debug(article);
         //   console.table(articles);
        } else {
            res.sendStatus(404)
        }
        res.send(article);
    } else {
        res.sendStatus(404);
    }
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (id) {
       db.prepare("DELETE FROM article WHERE id = ?").run(id)
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})
module.exports = router;