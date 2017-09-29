import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { EnvironmentManagerService } from './services/environment-manager.service';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NotesResolver } from './services/resolvers/notes-resolver';
import { NotesManagerService } from './services/notes-manager.service';
import { ToDoNoteComponent } from './components/to-do-list/to-do-note/to-do-note.component';

const appRoutes: Routes = [
  { path: 'notes', component: ToDoListComponent, resolve: {
    notes: NotesResolver
  } },  
  { path: '**', redirectTo: 'notes' }
];

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true } // <-- debugging purposes only
    ),
  ],
  providers: [
    EnvironmentManagerService,
    NotesManagerService,
    NotesResolver
  ],
  bootstrap: [AppComponent],
  entryComponents: [ToDoNoteComponent]
})
export class AppModule { }
