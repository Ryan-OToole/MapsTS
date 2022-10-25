import faker, { fake } from 'faker';
import { MarkerToAdd } from './CustomMap';

 export class User implements MarkerToAdd {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    color: string = 'red';
    
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    displayContent(): string {
        return `User name is ${this.name}`
    }
}
