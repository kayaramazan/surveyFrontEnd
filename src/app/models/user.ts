export class User {
    id: number;
    username: string;
    authority:number;  
    public static currentUser:User
    public static authReqAdmin = 123123
}
 