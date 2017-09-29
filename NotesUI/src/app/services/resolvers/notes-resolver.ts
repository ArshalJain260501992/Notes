import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Note} from '../../models/note';
import { Observable } from 'rxjs';
import { NotesManagerService } from '../notes-manager.service';

@Injectable()
export class NotesResolver implements Resolve<Note[]>{

  constructor(private notesManagerService: NotesManagerService) { }

  resolve(route: ActivatedRouteSnapshot): any {
    return this.notesManagerService.getAllNotes();
  }
}
