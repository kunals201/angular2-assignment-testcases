"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require("../task");
var app_service_1 = require("../app.service");
var router_1 = require("@angular/router");
var CreateTaskComponent = (function () {
    function CreateTaskComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.task = new task_1.Task('', '', '', '', '');
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.index = data.indexSent;
            if (_this.index) {
                _this.service.getData().subscribe(function (data) {
                    _this.newTask = data;
                    _this.task = _this.newTask.filter(function (task) { return task._id === _this.index; })[0];
                }, function (err) { return console.error(err); });
            }
        });
    };
    CreateTaskComponent.prototype.addTask = function () {
        var _this = this;
        if (this.index) {
            this.service.updateData(this.task).subscribe(function (data) {
                alert('Task Updated');
            }, function (err) {
                console.error(err);
            });
        }
        else {
            this.service.addData(this.task).subscribe(function (data) {
                alert('Task Added');
                _this.router.navigate(['ShowTask']);
            }, function (err) {
                console.error(err);
            });
        }
    };
    CreateTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'CreateTask',
            templateUrl: './createTask.component.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.ActivatedRoute, router_1.Router])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());
exports.CreateTaskComponent = CreateTaskComponent;
//# sourceMappingURL=createTask.component.js.map