"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_service_1 = require("../app.service");
var testing_2 = require('@angular/router/testing');
var showTask_component_1 = require("./showTask.component");
var common_1 = require('@angular/common');
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    var MockRouter = (function () {
        function MockRouter() {
        }
        return MockRouter;
    }());
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [showTask_component_1.ShowTaskComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_2.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(showTask_component_1.ShowTaskComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=showTask.component.spec.js.map