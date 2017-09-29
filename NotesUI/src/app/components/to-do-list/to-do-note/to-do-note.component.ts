import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../../models/note';
import { NotesManagerService } from '../../../services/notes-manager.service';

@Component({
  selector: 'app-to-do-note',
  templateUrl: './to-do-note.component.html',
  styleUrls: ['./to-do-note.component.css']
})
export class ToDoNoteComponent implements OnInit {

  @Input('note')
  note: Note;

  private newTask: string;

  constructor(private notesManagerService: NotesManagerService,) { }

  ngOnInit() {
  }

  removeNote(note: Note) {
    this.notesManagerService.deleteNote(note);
  }

  onRemove(index) {
    const completed = this.note.toDos.splice(index,1,);
    this.notesManagerService.updateNote(this.note);
  }

  onToggle(isSelected, index) {
    if(isSelected) {
      const completed = this.note.toDos.splice(index,1,);
      this.note.completed.push(completed[0]);
    } else {
      const pending = this.note.completed.splice(index,1,);
      this.note.toDos.push(pending[0]);
    }
    this.notesManagerService.updateNote(this.note);
  }

  onSubmit() {
    this.note.toDos.push(this.newTask);
    this.newTask = '';
    this.notesManagerService.updateNote(this.note);    
  }
}
