/* tslint:disable */
import {
  Account,
  SupportTicket,
  Reply
} from '../index';

declare var Object: any;
export interface AppUserInterface {
  "firstName": string;
  "lastName": string;
  "locked": boolean;
  "id"?: number;
  "accountId"?: number;
  "createdAt"?: Date;
  account?: Account;
  tickets?: SupportTicket[];
  replies?: Reply[];
}

export class AppUser implements AppUserInterface {
  "firstName": string;
  "lastName": string;
  "locked": boolean;
  "id": number;
  "accountId": number;
  "createdAt": Date;
  account: Account;
  tickets: SupportTicket[];
  replies: Reply[];
  constructor(data?: AppUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AppUser`.
   */
  public static getModelName() {
    return "AppUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AppUser for dynamic purposes.
  **/
  public static factory(data: AppUserInterface): AppUser{
    return new AppUser(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'AppUser',
      plural: 'AppUsers',
      path: 'AppUsers',
      idName: 'id',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "locked": {
          name: 'locked',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "accountId": {
          name: 'accountId',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date',
          default: new Date(0)
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'accountId',
          keyTo: 'id'
        },
        tickets: {
          name: 'tickets',
          type: 'SupportTicket[]',
          model: 'SupportTicket',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'appUserId'
        },
        replies: {
          name: 'replies',
          type: 'Reply[]',
          model: 'Reply',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'appUserId'
        },
      }
    }
  }
}
