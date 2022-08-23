/* tslint:disable */

declare var Object: any;
export interface ReplyInterface {
  "text"?: string;
  "id"?: number;
  "appUserId"?: number;
  "supportTicketId"?: number;
  "createdAt"?: Date;
}

export class Reply implements ReplyInterface {
  "text": string;
  "id": number;
  "appUserId": number;
  "supportTicketId": number;
  "createdAt": Date;
  constructor(data?: ReplyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Reply`.
   */
  public static getModelName() {
    return "Reply";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Reply for dynamic purposes.
  **/
  public static factory(data: ReplyInterface): Reply{
    return new Reply(data);
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
      name: 'Reply',
      plural: 'Replies',
      path: 'Replies',
      idName: 'id',
      properties: {
        "text": {
          name: 'text',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "appUserId": {
          name: 'appUserId',
          type: 'number'
        },
        "supportTicketId": {
          name: 'supportTicketId',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date',
          default: new Date(0)
        },
      },
      relations: {
      }
    }
  }
}
