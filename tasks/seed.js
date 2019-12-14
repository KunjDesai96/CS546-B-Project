const dbConnection = require('../config/mongoConnection');
const data = require('../data/');
const users = data.users;
const comments = data.comments;
const tags = data.tags;
const notes = data.notes;
const friends = data.friends;
const default_pw = "123";
// const bcrypt = require("bcrypt");
// const saltRounds = 16;
//const default_hashed_pw = await bcrypt.hash(default_pw, saltRounds);
//console.log(typeof(default_hashed_pw));

async function main() {
    try {
        const db = await dbConnection();
        await db.dropDatabase();
      //  const default_hashed_pw = await bcrypt.hash(default_pw, saltRounds);


        //add users
        let sunil_id=await users.createUser("sunil","swarna","sunil@gold.com","phill")
        let sunil2_id=await users.createUser("sunil","kumar","sunil@gmail.com","phill")
        let rahul_id=await users.createUser("Rahul","kampati","Rahul@drinker.com","phill")
        let rahul2_id=await users.createUser("Rahul","kamapati","rahul@kamapati.com","phill")
        let divya_id= await users.createUser("Divya","swarna","divya@gold.com","phill")
      
        let divya2_id=-await users.createUser("Divya","goalla","divya@goalla.com","phill")
        let kunj_id=await users.createUser("kunj","desai","kunj@god.com","phill")
        let kunj1_id=await users.createUser("kunj","kumar","kunj@kumar.com","phill")

        //add avatars
        sunilnote_id= await notes.createNotes(sunil_id,"sunil is fucker","sunil is verified fucker",1200,40.745094,-74.024255,["#traveldudes","#campfire_daily"]);
        sunil2note_id= await notes.createNotes(sunil2_id,"sunil is fucker2","sunil is verified fucker2",1200,40.757500,-74.047690,["#fridaynight","#fridaysforfuture"]);
        sunilnote_id1= await notes.createNotes(sunil_id,"title2","sunil content 2",1200,40.746300,-74.049520,["#nature","#streetstyle"]);
        sunilnote_id2= await notes.createNotes(sunil_id,"title3","sunil content 3",1200,40.745094,-74.024255,["#fridaynight","#fridaysforfuture"]);
        sunilote_id4= await notes.createNotes(sunil_id,"title4","sunil content 4",1200,40.746300,-74.049520,["#fridaynight","#fridaysforfuture"]);
        sunilnote_id5= await notes.createNotes(sunil_id,"title5","sunil content 5",1200,40.746300,-74.049520,["#nature","#streetstyle"]);
        sunilnote_id6= await notes.createNotes(sunil_id,"title6","sunil content 6",1200,40.745094,-74.024255,["#fridaynight","#fridaysforfuture"]);
        sunilote_id7= await notes.createNotes(sunil_id,"title7","sunil content 7",1200,40.746300,-74.049520,["#fridaynight","#fridaysforfuture"]);
        sunilote_id7= await notes.createNotes(rahul_id,"rahul title","rahul content 7",1200,40.746300,-74.049520,["#fridaynight","#fridaysforfuture"]);



        await comments.createComment(sunilnote_id,rahul_id,"I agree with the title")
        await comments.createComment(sunilnote_id,divya_id,"I agree with the title too")
        await comments.createComment( sunil2note_id,kunj1_id,"kunj commented this")

       let sunil=await users.getUserByID(sunil_id)
       let sunil2=await users.getUserByID(sunil2_id)
       let rahul=await users.getUserByID(rahul_id) 
       let rahul2=await users.getUserByID(rahul2_id)    
       let divya=await users.getUserByID(divya_id) 
       let kunj= await users.getUserByID(kunj_id)
       await friends.addFriend(sunil.friendID,sunil_id,sunil2_id)
       await friends.addFriend(sunil.friendID,sunil_id,rahul_id)
        await friends.addFriend(sunil.friendID,sunil_id,divya_id)
        await friends.addFriend(kunj.friendID,kunj_id,sunil_id)
       await friends.approveFriend(rahul.friendID,rahul_id,sunil_id)
      
      
        console.log('Done seeding database');
        console.log('All user have same password "phill"')

        //await db.close();
    } catch (e) {
        console.log(e);
    }
}

main();