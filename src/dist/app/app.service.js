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
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
require('rxjs/add/observable/of');
var http_1 = require("@angular/http");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.taskArray = [];
    }
    AppService.prototype.delete = function (index) {
        this.taskArray.splice(index, 1);
    };
    AppService.prototype.add = function (task) {
        if (this.taskArray.indexOf(task) == -1) {
            this.taskArray.push(task);
        }
    };
    AppService.prototype.update = function (index, task) {
        if (this.taskArray.indexOf(task) == -1) {
            this.taskArray[index] = task;
        }
    };
    AppService.prototype.getData = function () {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var obj = {
            date: 'hgfjhk',
            title: 'kunal',
            description: 'assddfgjgj',
            priority: 'low'
        };
        return this.http.get('http://localhost:9000/get/all', { headers: jsonHeader })
            .map(function (response) {
            return _this.extractData(response);
        })
            .catch(function (e) {
            return _this.handleError(e);
        });
    };
    AppService.prototype.addData = function (task) {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json' });
        var obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        return this.http.post('http://localhost:9000/add', obj, { headers: jsonHeader })
            .map(function (response) {
            return _this.extractData(response);
        })
            .catch(function (e) {
            return _this.handleError(e);
        });
    };
    AppService.prototype.remove = function (id) {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http.get('http://localhost:9000/remove/' + id, { headers: jsonHeader })
            .map(function (response) {
            return _this.extractData(response);
        })
            .catch(function (e) {
            return _this.handleError(e);
        });
    };
    AppService.prototype.updateData = function (task) {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json' });
        var obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority,
            _id: task._id
        };
        return this.http.post('http://localhost:9000/update', obj, { headers: jsonHeader })
            .map(function (response) {
            return _this.extractData(response);
        })
            .catch(function (e) {
            return _this.handleError(e);
        });
    };
    AppService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    AppService.prototype.handleError = function (error) {
        var errMsg;
        try {
            if (JSON.parse(error._body).message) {
                errMsg = JSON.parse(error._body).message;
            }
            else {
                errMsg = 'something is wrong Please check it';
            }
        }
        catch (e) {
            errMsg = 'something is going wrong so check it again';
        }
        return Rx_1.Observable.throw(new Error(errMsg));
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map