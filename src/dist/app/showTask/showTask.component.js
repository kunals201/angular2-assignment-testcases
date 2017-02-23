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
var app_service_1 = require("../app.service");
var router_1 = require("@angular/router");
var ShowTaskComponent = (function () {
    function ShowTaskComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    ShowTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) {
            alert(JSON.stringify(data));
            _this.newTask = data;
        }, function (err) {
            alert(err);
        });
    };
    ShowTaskComponent.prototype.deleteByIndex = function (index) {
        this.service.remove(this.newTask[index]._id).subscribe(function (data) { return alert(JSON.stringify(data)); });
    };
    ShowTaskComponent.prototype.editTask = function (index) {
        this.router.navigate(['CreateTask', this.newTask[index]._id]);
    };
    ShowTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ShowTask',
            templateUrl: './showTask.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService])
    ], ShowTaskComponent);
    return ShowTaskComponent;
}());
exports.ShowTaskComponent = ShowTaskComponent;
//# sourceMappingURL=showTask.component.js.map