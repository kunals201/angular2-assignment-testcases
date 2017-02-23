"use strict";
var Task = (function () {
    function Task(taskId, taskDate, taskTitle, taskDescription, taskPriority) {
        if (taskId && taskDate && taskTitle && taskDescription && taskPriority) {
            this._id = taskId;
            this.date = taskDate;
            this.title = taskTitle;
            this.description = taskDescription;
            this.priority = taskPriority;
        }
        else {
            this._id = '';
            this.date = '';
            this.title = '';
            this.description = '';
            this.priority = '';
        }
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map