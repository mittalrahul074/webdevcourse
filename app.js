var l1 = document.getElementById("link1");
console.log(l1);
var li = document.createElement("UL");
li.setAttribute('id',"sdfsfgsf");
li.appendChild(document.createTextNode("sdfsfgsf"));
l1.appendChild(li);


var db = firebase.firestore();

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});