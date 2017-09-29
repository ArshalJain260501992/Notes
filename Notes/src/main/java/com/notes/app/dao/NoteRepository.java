package com.notes.app.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.notes.app.entity.Note;

public interface NoteRepository extends MongoRepository<Note, String>{

}
