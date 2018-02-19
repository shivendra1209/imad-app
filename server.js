var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
        'article-one' : {
        title:"Article-One | Shivendra",
        heading:'Article-one',
        date:'Feb-15-2018',
        content:`
        <p>
        This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p>
        <p>
        This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p>
        <p>
        This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p>
            
                     <input type="text" id="cmnt1" placeholder="Add Your Comment Here...."></input>
                    <input type="submit" value="submit" id="submit_btn1"></input>
                    
                    <p id="comment">
                    
                    
                    
                    
                    
                    </p>
                    
            `},
        'article-two' : {
        title:"Article-Two | Shivendra",
        heading:'Article-Two',
        date:'Feb-15-2018',
        content:`
        <p>
        This is the content of my second aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p>
        <p>
        This is the content of my second aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p>
        <p>
        This is the content of my second aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p> `
        },
'article-three': {
             title:"Article-Three | Shivendra",
            heading:'Article-three',
            date:'Feb-15-2018',
            content:`
        <p>
            This is the content of my three aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p>
        <p>
            This is the content of my three aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p>
        <p>
            This is the content of my three aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. This is the content of my first aerticle. 
        </p> `}
        
};
function createTemplate(data) {
    var title = data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate = `
    <html>
     <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
<body>
    <div class="container">
    <div>
        <a href='/'>Home</a>
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
</html> `;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res) {
   counter=counter+1;
   res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function(req,res) {
   var name = req.query.name;  // extracting name from url endpoint
   
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req,res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

var comment1="";
app.get('/article-one/submit-comment',function(req,res) {
    var cmt1 = req.query.cmt1;
    
    comment1=cmt1;
    res.send(JSON.stringify(comment1));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',function(req,res) {
    res.sendFile(path.join(__dirname,'ui','main.js'));
    
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
