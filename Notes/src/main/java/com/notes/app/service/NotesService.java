package com.notes.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.notes.app.dao.NoteRepository;
import com.notes.app.entity.Note;

@Component
public class NotesService {
	
	@Autowired
	NoteRepository  noteRepository;
	
	public Note addNote(Note course) {
		Note savedCourse = noteRepository.save(course);
		return savedCourse;
		
	}
	
	public List<Note> listAll(){
		return noteRepository.findAll();
	}

	public Note updateNote(Note note) {
		Note originalNote = noteRepository.findOne(note.getId());
		originalNote.setCompleted(note.getCompleted());
		originalNote.setToDos(note.getToDos());
		originalNote.setName(note.getName());
		return noteRepository.save(originalNote);
	}

	public void deleteNote(String noteId) {
		noteRepository.delete(noteId);
	}

}
