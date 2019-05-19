pm.test("Response status is OK", function(){
    pm.response.to.be.ok;
});

pm.test("There are three users", function(){
   var users = pm.response.json();
   pm.expect(users.length).to.be.equal(3);
});

pm.test("Gigel has a .net email", function(){
   var users = pm.response.json();
   pm.expect(users[2].email).to.be.equal("gigel@net.com");
});

pm.test("There are 6 questions created by Alex M", function(){
   var questions = pm.response.json();
   var result = 0;
   //questionNumber.stream.filter(x => x.user === "Alex M").length;
   for(var i = 0; i < questions.length; i++)
   {
       if (questions[i].user === "Alex M")
       {
           result++;
       }
   }
   pm.expect(result).to.be.equal(6);
});

pm.test("There is a question which is related to SD", function(){
    var questions = pm.response.json();
    var result = 0;
    for(var i = 0; i < questions.length; i++)
    {
        if(questions[i].title.includes("SD"))
        {
            result++;
        }
    }
    pm.expect(result).to.be.equal(1);
});

pm.test("Someone didn't use optionals", function(){
    var questions = pm.response.json();
    var result = 0;
    for(var i = 0; i < questions.length; i++)
    {
        if(questions[i].text.includes("optional"))
        {
            result++;
        }
    }
    pm.expect(result).to.be.gt(0);
});
