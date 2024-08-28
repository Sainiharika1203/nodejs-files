var userlist=[]
function adduser(user){
    if(user.username!=null){
        let ind=userlist.findIndex((u)=>u.username==user.username);
        if(ind!=-1){
            return "user already exists"
        }
        else{
            userlist.push(user);
            return "user added successfully"
        }
    }
    else{
    return "enter corect data"
}
    }
   

function checklogin(username,password,mobilenum){
    let ind=userlist.findIndex((u)=>u.username==username&&u.password==password&&u.mobilenum==mobilenum);
    if(ind!=-1){
        return "login succesfull"
    }
    else{
        return "login failed"
    }
}
exports.adduser=adduser;
exports.checklogin=checklogin;