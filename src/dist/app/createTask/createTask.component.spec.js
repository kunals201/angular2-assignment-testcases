"use strict";
var router_1 = require("@angular/router");
var testing_1 = require("@angular/router/testing");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require('@angular/platform-browser');
var app_service_1 = require("../app.service");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var createTask_component_1 = require("./createTask.component");
describe('CreateTaskComponent', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var route;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () {
            return Promise.resolve(true);
        };
        return MockRouter;
    }());
    var MockActivatedRoute = (function () {
        function MockActivatedRoute() {
            this.params = Observable_1.Observable.of({ 'indexSent': '1' });
        }
        return MockActivatedRoute;
    }());
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [createTask_component_1.CreateTaskComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter },
                { provide: router_1.ActivatedRoute, useClass: MockActivatedRoute }, app_service_1.AppService],
            imports: [testing_1.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(createTask_component_1.CreateTaskComponent);
        comp = fixture.componentInstance;
        comp.task = {
            date: '12/10/17',
            title: 'Title',
            description: 'kunal',
            priority: 'low',
            _id: '101'
        };
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
        route = fixture.debugElement.injector.get(router_1.ActivatedRoute);
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('it should be able to get data from service', function () {
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                date: 'kunal',
                title: '',
                description: '',
                priority: ''
            }]));
        comp.ngOnInit();
        expect(comp.newTask).toEqual([{
                date: 'kunal',
                title: '',
                description: '',
                priority: ''
            }]);
    });
    it('it should be able to generate error in case of error', function () {
        spyOn(console, 'error');
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.ngOnInit();
        expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
    });
    it('it should be able to update data in case of getting router parameter', function () {
        comp.index = '0';
        spyOn(window, 'alert');
        spyOn(service, 'updateData').and.returnValue(Observable_1.Observable.of([{
                date: 'kunal',
                title: '',
                description: '',
                priority: ''
            }]));
        comp.addTask();
        expect(window.alert).toHaveBeenCalledWith('Task Updated');
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
    it('it should be able to generate error in case of on data to update', function () {
        comp.index = '0';
        spyOn(console, 'error');
        spyOn(service, 'updateData').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.addTask();
        expect(console.error).toHaveBeenCalled();
    });
});
//# sourceMappingURL=createTask.component.spec.js.map