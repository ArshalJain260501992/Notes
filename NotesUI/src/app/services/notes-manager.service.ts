import { Injectable } from '@angular/core';
import { Note } from '../models/note'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Subject } from 'rxjs';
import { EnvironmentManagerService } from '../services/environment-manager.service';

@Injectable()
export class NotesManagerService {

  env;
  deletedNote: Subject<Note> = new Subject<Note>();

  constructor(private http: Http, private envManager: EnvironmentManagerService) {
    this.env = this.envManager.env;
  }

  private getOptions() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const options = new RequestOptions({
      headers: headers
    });
    return options;
  }
  public getAllNotes(): Promise<any>{
    return this.http.get(this.env.contextPath + 'note', this.getOptions())
    .toPromise();
  }

  public addNote(note): Promise<any>{
    return this.http.post(this.env.contextPath + 'note', note, this.getOptions())
    .toPromise();
  }
  public updateNote(note): Promise<any>{
    return this.http.put(this.env.contextPath + 'note', note, this.getOptions())
    .toPromise();
  }
  public deleteNote(note): Promise<any>{
    this.deletedNote.next(note);
    return this.http.delete(this.env.contextPath + 'note/'+note.id, this.getOptions())
    .toPromise();
  }
}
