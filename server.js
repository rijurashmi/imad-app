var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;

var config = {
    user: 'rijurashmi',
    database: 'rijurashmi',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

/*var articles ={
    'article-one': {
        title:'Article One | Riju',
        heading: 'Article One',
        date: '3rd Aug, 2017',
        content: `
                <p>
                    Hi!! This is the first article that I am putting up on the site.
                    Its cool to learn web app development. Thanks to this course.
                </p>
                <p>
                    Hope I am able to use it for developing some interesting apps.
                </p>
                <p>
                    Thank You!
                </p>`
        },
    'article-two': {
        title:'Article Two | Riju',
        heading: 'Article Two',
        date: '5th Aug, 2017',
        content: `
                <p>
                    Hi!! This is the second article.
                </p>
                <p>
                    Thank You!
                </p>`
        },
    'article-three': {
        title:'Article Three | Riju',
        heading: 'Article Three',
        date: '6th Aug, 2017',
        content: `
                <p>
                    Hi!! This is the third article that I am putting up on the site.
                </p>
                <p>
                    Bye!
                </p>`
        }
};*/


function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate =`<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class='container'>
                <div>
                    <a href='/'> Home </a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
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


var pool = new Pool(config);
app.get('/test-db', function(req,res){
    // Make a select request to the database
    // Return a response with the results
    pool.query('SELECT * from test', function(err,result){
       if(err) {
           res.status(500).send(err.toString());
       }
       else{
           res.send(JSON.stringify(result.rows));
       }
    });
});


var counter = 0;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});


/*var names=[];
app.get('/submit-name', function (req,res) { // URL : /submit-name?name=xxxxx
    // Get the name from the request
    var name = req.query.name; 
    
    names.push(name);
    
    //JSON: Java Object Notation
    res.send(JSON.stringify(names));
});*/

app.get('/articles/:articleName', function(req,res){
   // articleName == article-one
   // articles[articleName] == {} content object for article one
   
   
   // SELECT * from article WHERE title='article-one'
   pool.query("SELECT * FROM article WHERE title = '" + req.params.articleName + "'", function(err,result){
       
       res.send('test');
       if (err){
           res.status(500).send(err.toString());
       }
       else{
           if(result.rows.length === 0){
               res.status(404).send(err.toString());
           }
           else{
               var articleData = result.rows(0);
               res.send(createTemplate(articleData)); 
           }
           
       }
       
   });*/
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
