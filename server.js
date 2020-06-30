
	var express=require("express"); 
	var bodyParser=require("body-parser");   
	 
	var app=express() ;  
	  
	app.use(bodyParser.json());  
	app.use(bodyParser.urlencoded({ 
	    extended: true
	})); 
	
	app.use(express.static(__dirname+ '/public'));
	  
	app.post('/registratie', function(req,res){ 
        var name = req.body.name; 
        var lastname = req.body.lastname;
	    var email =req.body.email; 
	    var pass1 = req.body.password1; 
	var pass2 =req.body.password2;
	var vol =req.body.vooropleiding;  
	var aok =req.body.andereopleidingkeuze;
	  
	    var data = { 
	        "name": name, 
            "email":email,
            "lastname":lastname, 
        "password1":pass1, 
			"password2":pass2 ,
			"vooropleiding":vol,
			"andereopleidingkeuze":aok
    } ;

	    console.log(data);
	          
       
        

        if(pass1 == pass2){
             return res.redirect('registratie.html'); 
        }else{
            return res.redirect('unsuccesVol.html');
        }
	}) ;
  
	  
	app.get('/',function(req,res){ 
	res.set({ 
	    'Access-control-Allow-Origin': '*'
    }); 
    return res.redirect('index.html');
    37.	}).listen(3000) ;
