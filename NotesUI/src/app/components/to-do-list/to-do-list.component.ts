import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { NotesManagerService } from '../../services/notes-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  notes: Note[];
  responseArgs = {
    msg: '',
    isLoading: true
  };
  constructor(private notesManagerService: NotesManagerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
   this.extractData(this.route.snapshot.data['notes']); 
   this.notesManagerService.deletedNote.subscribe((note) => this.deleteNote(note))  
  }

  private deleteNote(note) {
    this.notes.splice(this.notes.indexOf(note), 1, );
  }
  private extractData(res) {
   this.notes = JSON.parse(res._body);
   this.responseArgs.isLoading = false;
  }

  private handleErrorObservable(error: Response | any) {
   console.error(error.message || error);
   this.responseArgs.msg = error.message;
   this.responseArgs.isLoading = false;
   setTimeout(() => {
     this.responseArgs.msg = '';
   }, 2000);
   return Observable.throw(error.message || error);
 }

 addNote() {
   for(let i=0; ; i++) {
    let isDuplicate = false;
    const defaultName = 'New Note '+i; 
    this.notes.forEach(note => {
      if(note.name === defaultName) {
        isDuplicate = true;
      }
    });
    if(!isDuplicate) {
      const note = new Note()
      note.name = defaultName;
      this.notesManagerService.addNote(note).then((response) => {
        this.notes.push(JSON.parse(response._body));
      });            
      return;  
    }
   }
 }

}
