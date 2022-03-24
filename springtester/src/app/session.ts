import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Session {
    public sessionStatus: String=""
    public sessionId: number = 0
}
