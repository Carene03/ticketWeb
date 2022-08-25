/* tslint:disable */
import {
  Reply
} from '../index';

declare var Object: any;
export interface SupportTicketInterface {
  "title": string;
  "text"?: string;
  "status": boolean;
  "id"?: number;
  "appUserId"?: number;
  "createdAt"?: Date;
  replies?: Reply[];
}

export class SupportTicket implements SupportTicketInterface {
  "title": string;
  "text": string;
  "status": boolean;
  "id": number;
  "appUserId": number;
  "createdAt": Date;
  replies: Reply[];
  constructor(data?: SupportTicketInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SupportTicket`.
   */
  public static getModelName() {
    return "SupportTicket";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SupportTicket for dynamic purposes.
  **/
  public static factory(data: SupportTicketInterface): SupportTicket{
    return new SupportTicket(data);
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
      name: 'SupportTicket',
      plural: 'SupportTickets',
      path: 'SupportTickets',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "text": {
          name: 'text',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'boolean',
          default: true
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "appUserId": {
          name: 'appUserId',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date',
          default: new Date(0)
        },
      },
      relations: {
        replies: {
          name: 'replies',
          type: 'Reply[]',
          model: 'Reply',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'supportTicketId'
        },
      }
    }
  }
}
