/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
export default function Home() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    // Add new todo
    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: newTodo }]);
            setNewTodo("");
        }
    };

    // Delete a todo
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Start editing a todo
    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    // Update the edited todo
    const handleUpdate = () => {
        setTodos(
            todos.map((todo) =>
                todo.id === editId ? { ...todo, text: editText } : todo
            )
        );
        setEditId(null);
        setEditText("");
    };
    return (
        <div className="bg-white h-screen text-black">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    className="border text-black"
                />
                <button onClick={handleAddTodo} className="rounded-sm border p-2">
                    Add
                </button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex gap-2 p-2">
                        {editId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={handleUpdate}>Save</button>
                            </>
                        ) : (
                            <>
                                {todo.text}
                                <button onClick={() => handleEdit(todo.id, todo.text)}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
