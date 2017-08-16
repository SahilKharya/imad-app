var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles {
    'article-one' = {
        title: 'Article One | Sahil Kharya',
        heading: 'Article-One',
        date: 'Aug 17, 2017',
        content:`
        <p>New to this world . what to do now. I'm in trouble</p>
                    <p>Someone is here.</p>
                    
                    <p>Someone : "Hi! I am Sahil.I'm a web developer."</p>`
    };
    'article-two' = {
        title: 'Article Two | Sahil Kharya',
        heading: 'Article-Two',
        date: 'Aug 19, 2017',
        content:`
    <p>Hi! I am Sahil.I'm a web developer.Hi! I am Sahil.I'm a web developer .Hi! I am Sahil.I'm a web developer 
                    Hi! I am Sahil.I'm a web developer .Hi! I am Sahil.I'm a web developer .</p>
                    
                    <p>Hi! I am Sahil.I'm a web developer.Hi! I am Sahil.I'm a web developer .Hi! I am Sahil.I'm a web developer 
                    Hi! I am Sahil.I'm a web developer .Hi! I am Sahil.I'm a web developer .</p>
                    `
    };
    'article-three' = {
        title: 'Article Three | Sahil Kharya',
        heading: 'Article-Three',
        date: 'Sep 17, 2017',
        content:`
        <p>New to this world . what to do now.</p>
                    <p>Hello World.I'm a web developer.Hi! </p>
                    <p>I am Sahil.I'm a web developer .Hi! I am Sahil.I'm a web developer 
                    Hi! I am Sahil.I'm a web developer .Hi! I am Sahil.I'm a web developer .</p>
                    
                    <p>Hi! I am Sahil.I'm a web developer.Hi! I am Sahil.I'm a web developer .Hi! I am Sahil.I'm a web developer 
                    Hi! I am Sahil.I'm a web developer .Hi! I am Sahil.I'm a web developer .</p>`
    };
}

function createTemplate (data) {
    var title =data.title;
    var date = data.date;
    var heading =data.heading;
    var content = data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr>
                <h3>${heading}</h3>
                <div>${date}</div>
                <div>
                    ${content}
                </div>
            </div>
            
        </body>
    </html>
    `;
    return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});

app.get('/article-three', function (req, res) {
  res.send(createTemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
