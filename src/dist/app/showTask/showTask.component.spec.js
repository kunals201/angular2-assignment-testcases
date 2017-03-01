"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_service_1 = require("../app.service");
var testing_2 = require('@angular/router/testing');
var showTask_component_1 = require("./showTask.component");
var Observable_1 = require("rxjs/Observable");
describe('ShowTaskComponent should', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var MockRouter = (function () {
        function MockRouter() {
        }
        return MockRouter;
    }());
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [showTask_component_1.ShowTaskComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_2.RouterTestingModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(showTask_component_1.ShowTaskComponent);
        comp = fixture.componentInstance;
        comp.newTask = [{
                _id: '5',
                date: '12/12/12',
                title: 'title1',
                description: 'newDescription1',
                priority: 'high'
            }];
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_service_1.AppService);
    });
    it('it should be able to get data from service', function () {
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]));
        comp.ngOnInit();
        expect(comp.newTask).toEqual([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]);
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('it should be able to generate error in case of error for ngOnInit', function () {
        spyOn(console, 'error');
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.ngOnInit();
        expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
    });
    it('should show list of task', function () {
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                _id: '',
                date: '',
                title: '',
                description: '',
                priority: ''
            }]));
        comp.ngOnInit();
        //expect(console.log).toHaveBeenCalled();
        expect(comp.newTask).toEqual([{
                _id: '',
                date: '',
                title: '',
                description: '',
                priority: ''
            }]);
    });
    it('should delete a task', function () {
        spyOn(window, 'alert');
        spyOn(service, 'remove').and.returnValue(Observable_1.Observable.of([{
                _id: '',
                date: '',
                title: '',
                description: '',
                priority: ''
            }]));
        comp.deleteByIndex(0);
        expect(window.alert).toHaveBeenCalledWith('Task Removed');
    });
    it('it should be able to generate error in case of error for deleting task', function () {
        spyOn(console, 'error');
        spyOn(service, 'remove').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.deleteByIndex(0);
        expect(console.error).toHaveBeenCalled();
    });
    /*it('it should be able to edit data from service', () => {
        comp.editTask(0);
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });
*/
});
//# sourceMappingURL=showTask.component.spec.js.map