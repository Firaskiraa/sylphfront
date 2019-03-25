import { Client } from "./client";
import { User } from "./user";
import {Action} from "./action";
export class Compterendu {
idcr:number;
client : Client; 
user: User;
date : Date;
actions: Action[] ;
commentaires : string;


}