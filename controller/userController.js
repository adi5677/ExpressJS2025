import { usersList } from "../model/userModel.js";

export function handleUsers(req, res) {

    const userData = usersList();

    console.log(userData );
    
    res.render('user',{userData: userData});
}