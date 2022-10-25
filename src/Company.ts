import faker from 'faker';
import { MarkerToAdd } from './CustomMap';

export class Company implements MarkerToAdd {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    color: string = 'orange';
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    displayContent(): string {
        return `
         <div>
            <h1>User name is:${this.companyName}</h1>
            <h3>Catchphrase is:${this.catchPhrase}</h3>
        </div>
        `;
    }
}
