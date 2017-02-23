"use strict";
var createTask_component_1 = require("./createTask/createTask.component");
var showTask_component_1 = require("./showTask/showTask.component");
exports.routes = [{
        path: 'CreateTask',
        component: createTask_component_1.CreateTaskComponent
    }, {
        path: 'ShowTask',
        component: showTask_component_1.ShowTaskComponent
    },
    {
        path: 'CreateTask/:indexSent',
        component: createTask_component_1.CreateTaskComponent
    }];
//# sourceMappingURL=app.router.js.map