//counter code
var button=document.getElementById('counter');
//var counter=0;
button.onclick=function(){
    
  
  //create a request to the object
  var request=new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE)  {
        //Take some action
        if(request.status===200){
            var counter=request.responseText
            var span= document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    }
    //if not
  };
  
  //Make the request
  request.open('GET','http://vinay919.imad.hasura-app.io/counter',true);
  request.send(null);
  
};

//submit name

var submit=document.getElementById('submit_button');
submit.onclick=function(){
    //create a request to the object
  var request=new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE)  {
        //Take some action
        if(request.status===200){
             //capture a list of name and render it as a list
            var names=request.responseText;// ['name1','name2','name3','name4'];
            names=JSON.parse(names);
            var list='';
            for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';
            }
            var ul=document.getElementById('nameList');
            ul.innerHTML=list;
        }
    }
    //if not
  };
  
  //Make the request
  var nameInput=document.getElementById('name');
    var name=nameInput.value;
  request.open('GET','http://vinay919.imad.hasura-app.io/submit-name?name='+name,true);
  request.send(null);
    
   
}