import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { King } from './king';

@Injectable()
export class KingService {
    private kingsUrl = 'api/kings';  // URL to web api
    
    constructor(private http: Http) { }
      
    getKings(): Promise<King[]> {
        return this.http.get(this.kingsUrl)
               .toPromise()
               .then(response => response.json().data as King[])
               .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
  
    getKing(id: number): Promise<King> {
        return this.getKings()
                .then(kings => kings.find(king => king.id === id));
    }
}
