import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  registerUsingAPI(user: User) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient:HttpClient) {

   }
   SendFile(file:FormData){
       return this.httpclient.post("http://127.0.0.1:7000/",file)
   }

}
