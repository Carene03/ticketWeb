/* tslint:disable */

declare var Object: any;
export interface FilefInterface {
  "file"?: string;
  "recource": string;
  "recourceId": number;
  "id"?: number;
  "createdAt"?: Date;
}

export class Filef implements FilefInterface {
  "file": string;
  "recource": string;
  "recourceId": number;
  "id": number;
  "createdAt": Date;
  constructor(data?: FilefInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Filef`.
   */
  public static getModelName() {
    return "Filef";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Filef for dynamic purposes.
  **/
  public static factory(data: FilefInterface): Filef{
    return new Filef(data);
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
      name: 'Filef',
      plural: 'Filefs',
      path: 'Filefs',
      idName: 'id',
      properties: {
        "file": {
          name: 'file',
          type: 'string'
        },
        "recource": {
          name: 'recource',
          type: 'string'
        },
        "recourceId": {
          name: 'recourceId',
          type: 'number'
        },
        "id": {
          name: 'id',
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
