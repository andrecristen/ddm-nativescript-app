import { Component } from '@angular/core';
import { TextField } from '@nativescript/core';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    moduleId: module.id
})

export class TasksComponent {

    public tasks: Array<string> = [

    ];

    public createTask(newTaskTextField: TextField){
        this.tasks.unshift(newTaskTextField.text);
        newTaskTextField.text = "";
    }

    public deleteTask(args) {
        let taskIndex = args.index;
        this.tasks.splice(taskIndex, 1);
        alert("Tarefa Removida");
    }

}