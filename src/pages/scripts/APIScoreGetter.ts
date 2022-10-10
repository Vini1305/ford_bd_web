import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Trajeto } from "@prisma/client";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class APIScoreGetter{
    baseURL = 'http://localhost:3000/trajeto';

    constructor(private http: HttpClient){ }

    getTrajeto(): Observable<Trajeto[]>{
        return this.http.get<Trajeto[]>(this.baseURL)
    }

}

