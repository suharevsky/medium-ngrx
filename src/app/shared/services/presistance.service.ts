import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {
    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.log('Fail saving data to localStorage', error);
        }
    }

    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (error) {
            console.log('Fail getting data from localStorage', error);
            return null;
        }
    }
}