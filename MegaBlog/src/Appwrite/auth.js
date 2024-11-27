import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;//as a method account cant be defined before client method setendpoint and setproject are defined
    constructor(){
        this.client.setEndpoint(conf.AppWriteEndpoint)
       .setProject(conf.AppWriteProjectId);
        this.account=new Account(this.client);
    }
   async createUser({email,password,name}){
        try {
            const user=await this.account.create(ID.unique(),email,password,name);
            user?this.login({email,password}):user;
        } catch (error) {
            throw error;
        }
   }
   async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
   }
   async getCurrentUser(){
    try{
        return await this.account.get();//returns promise which is accesed using .then
    }catch(error){
        throw error;
    }
    return null;
}
    async logout(){
        try {
            await account.deleteSessions();
        } catch (error) {
            console.log("Appwrite::logout error",error);
        }
    }
    }
 const authService=new AuthService();
 export default authService;
