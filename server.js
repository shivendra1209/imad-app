var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config={
    user:'shivendra12091999',
    database:'shivendra12091999',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

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
      
                
                    
    

</body>
</html> `;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool=new Pool(config);
app.get('/test-db',function(req,res){
   //make a select request
   ////return a response with the result
   
   pool.query('SELECT * FROM test',function(err,result){
       
   if(err){
       res.status(500).send(err.toString());
   }else{
       res.send(JSON.stringify(result));
   }
   });
   
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

var comment1="";
app.get('/submit-comment',function(req,res) {
    
    
        var cmt1 = req.query.cmt1;
        comment1=cmt1;
        res.send(JSON.stringify(comment1));
});


app.get('/:articleName',function(req,res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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
