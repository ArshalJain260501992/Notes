package com.notes.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.notes.app.entity.Note;
import com.notes.app.service.NotesService;

@RestController("/note")
public class NotesController {
	
	@Autowired
	NotesService notesService;
	
	@RequestMapping(method = RequestMethod.POST)
	public Note addCource(@RequestBody Note note ) {
		Note savedCourse = notesService.addNote(note);
		return savedCourse;
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Note> listAll() {
		return notesService.listAll();
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public Note updateNote(@RequestBody Note note ) {
		Note savedNote = notesService.updateNote(note);
		return savedNote;
	}	
	
	@RequestMapping(value="/note/{noteId}", method = RequestMethod.DELETE)
	public void deleteNote(@PathVariable("noteId") String noteId ) {
		notesService.deleteNote(noteId);
	}

}
