package com.notes.app.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

@Document(collection = "notes")
public class Note {

	@Id
	private String id;

	@Indexed(unique = true)
	private String name;

	private List<String> toDos;

	private List<String> completed;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getToDos() {
		return toDos;
	}

	public void setToDos(List<String> toDos) {
		this.toDos = toDos;
	}

	public List<String> getCompleted() {
		return completed;
	}

	public void setCompleted(List<String> completed) {
		this.completed = completed;
	}

	@Override
	public String toString() {
		return "Note [id=" + id + ", name=" + name + ", toDos=" + toDos + ", completed=" + completed + "]";
	}

}
