/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Account } from '../../models/Account';
import { AppUser } from '../../models/AppUser';
import { SupportTicket } from '../../models/SupportTicket';
import { Reply } from '../../models/Reply';
import { Filef } from '../../models/Filef';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Account: Account,
    AppUser: AppUser,
    SupportTicket: SupportTicket,
    Reply: Reply,
    Filef: Filef,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
