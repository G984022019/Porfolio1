const APPLICATION_KEY = "29272803bed7db0b147a882e76176a4535dcf970fb77413d7781bce424aaf741";
const CLIENT_KEY = "c2bbeac274ba0f7650350108020932c4d08781398b0208595801633d66520c7f";
const ncmb = new NCMB(APPLICATION_KEY,CLIENT_KEY);
const DBName = "SaveMessage";
let TestClass = ncmb.DataStore(DBName);


function Send(){
  var savename = document.getElementById("savename").value;
  var saveemail = document.getElementById("saveemail").value;
  var savesubject = document.getElementById("savesubject").value;
  var savetextarea = document.getElementById("savetextarea").value;
  save(savename, saveemail, savesubject, savetextarea );
  alert("メッセージは送信されました。ご連絡をいただき、誠にありがとうございます。いただいたメールの内容を確認後、通常3日以内に私によりご連絡をさせていただきます！");
}

//データ保存
function save(savename, saveemail, savesubject, savetextarea){
  let savemessage = new TestClass();
  let key1 = "name";
  let key2 = "email";
  let key3 = "subject";
  let key4 = "text";

  savemessage.set(key1, savename)
             .set(key2, saveemail)
             .set(key3, savesubject)
             .set(key4, savetextarea)
             .save()
             .then(function (){
               // 保存に成功した場合の処理
               console.log("保存に成功しました。");
             })
             .catch(function (error){
               // 保存に失敗した場合の処理
               console.log("保存に失敗しました。エラー:" + error);
             });
}
