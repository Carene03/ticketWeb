


export class Role{
    #id:number;
    #roleName:string;
    constructor(){  
        Object.defineProperties(this,{
            id:{
                get:()=>this.#id,
                set:(id:number)=>this.#id=id,
                enumerable:true
            },
            roleName:{
                get:()=>this.#roleName,
                set:(roleName:string)=>this.#roleName=roleName,
                enumerable:true
            }
        })
    }

}
export class User{
    #id:number;
    #userName:string;
    #role:Role;  
    constructor(){  
        Object.defineProperties(this,{
            id:{
                get:()=>this.#id,
                set:(id:number)=>this.#id=id,
                enumerable:true
            },
            userName:{
                get:()=>this.#userName,
                set:(userName:string)=>this.#userName=userName,
                enumerable:true
            },
            role:{
                get:()=>this.#role,
                set:(role:Role)=>this.#role=role,
                enumerable:true
            }
        })
    }     
}

export class Ticket{
    #id:number;
    #title:string;
    #owner:User;
    #createAt:Date;
    #reply:Array<Reply>;
    #file:Array<any>;
    #status:"open"|"close"="open";
    constructor(){  
        Object.defineProperties(this,{
            id:{
                get:()=>this.#id,
                set:(id:number)=>this.#id=id,
                enumerable:true
            },
            title:{
                get:()=>this.#title,
                set:(title:string)=>this.#title=title,
                enumerable:true
            },
            status:{
                get:()=>this.#status,
                set:(status:"open"|"close")=>this.#status=status,
                enumerable:true,
            },
            owner:{
                get:()=>this.#owner,
                set:(owner:User)=>this.#owner=owner,
                enumerable:true
            },
            createAt:{
                get:()=>this.#createAt,
                set:(createAt:Date)=>this.#createAt=createAt,
                enumerable:true
            },
            reply:{
                get:()=>this.#reply,
                set:(reply:Reply[])=>this.#reply=reply,
                enumerable:true
            },
            file:{
                get:()=>this.#file,
                set:(file:File[])=>this.#file=file,
                enumerable:true
            }
        })
    }
}

export class Reply{
    #id:number;
    #ticket:Ticket;
    #user:User;
    #text:string;
    #file:Array<any>;
    constructor(){  
        Object.defineProperties(this,{
            id:{
                get:()=>this.#id,
                set:(id:number)=>this.#id=id,
                enumerable:true
            },
            ticket:{
                get:()=>this.#ticket,
                set:(ticket:Ticket)=>this.#ticket=ticket,
                enumerable:true
            },
            user:{
                get:()=>this.#user,
                set:(user:User)=>this.#user=user,
                enumerable:true
            },
            text:{
                get:()=>this.#text,
                set:(text:string)=>this.#text=text,
                enumerable:true
            },
            file:{
                get:()=>this.#file,
                set:(file:File[])=>this.#file=file,
                enumerable:true
            }
        })
    }
}