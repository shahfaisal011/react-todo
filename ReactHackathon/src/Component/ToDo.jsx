// ToDo.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from './firebase'; // Import Firestore instance

function ToDo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [status, setStatus] = useState('ToDo');
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from Firestore
    const fetchTasks = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'tasks'));
            const taskList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTasks(taskList);
        } catch (error) {
            console.error("Error fetching tasks: ", error);
        }
    };

    // Add a new task
    const handleAddTask = async () => {
        try {
            await addDoc(collection(db, 'tasks'), {
                title,
                description,
                date,
                time,
                status,
            });
            setTitle('');
            setDescription('');
            setDate('');
            setTime('');
            setStatus('ToDo');
            fetchTasks(); // Refresh task list
        } catch (error) {
            console.error("Error adding task: ", error);
        }
    };

    // Update task status
    const handleUpdateStatus = async (taskId, newStatus) => {
        try {
            const taskRef = doc(db, 'tasks', taskId);
            await updateDoc(taskRef, { status: newStatus });
            fetchTasks(); // Refresh task list
        } catch (error) {
            console.error("Error updating status: ", error);
        }
    };

    // Load tasks on component mount
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="container">
                    <div className="row justify-content-center p-4">
                        <div className="col-12 bg-primary text-center text-white">
                            <h3>
                                Welcome to Master ToDo App, You can Add your important tasks here
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row justify-content-between">
                    <div className="col">
                        <input
                            type="text"
                            placeholder="Title Here"
                            className="rounded-1 border-0"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Description Here"
                            className="rounded-1 border-0"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="date"
                            className="rounded-1 border-0"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <input
                            type="time"
                            className="rounded-1 border-0"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        <select
                            name="WorkStatus"
                            id="workStatus"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="ToDo">To Do</option>
                            <option value="In-Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                        <button className="btn btn-primary" onClick={handleAddTask}>
                            Add Task
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h2>To Do</h2>
                        <ul className="list-group">
                            {tasks.filter(task => task.status === 'ToDo').map(task => (
                                <li key={task.id} className="list-group-item">
                                    <h5>{task.title}</h5>
                                    <p>{task.description}</p>
                                    <p>{task.date} {task.time}</p>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => handleUpdateStatus(task.id, 'In-Progress')}
                                    >
                                        Move to In-Progress
                                    </button>
                                    <button
                                        className="btn btn-success ms-2"
                                        onClick={() => handleUpdateStatus(task.id, 'Done')}
                                    >
                                        Move to Done
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h2>In Progress</h2>
                        <ul className="list-group">
                            {tasks.filter(task => task.status === 'In-Progress').map(task => (
                                <li key={task.id} className="list-group-item">
                                    <h5>{task.title}</h5>
                                    <p>{task.description}</p>
                                    <p>{task.date} {task.time}</p>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => handleUpdateStatus(task.id, 'ToDo')}
                                    >
                                        Move to To Do
                                    </button>
                                    <button
                                        className="btn btn-success ms-2"
                                        onClick={() => handleUpdateStatus(task.id, 'Done')}
                                    >
                                        Move to Done
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Done</h2>
                        <ul className="list-group">
                            {tasks.filter(task => task.status === 'Done').map(task => (
                                <li key={task.id} className="list-group-item">
                                    <h5>{task.title}</h5>
                                    <p>{task.description}</p>
                                    <p>{task.date} {task.time}</p>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => handleUpdateStatus(task.id, 'ToDo')}
                                    >
                                        Move to To Do
                                    </button>
                                    <button
                                        className="btn btn-warning ms-2"
                                        onClick={() => handleUpdateStatus(task.id, 'In-Progress')}
                                    >
                                        Move to In-Progress
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDo;
