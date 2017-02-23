"use strict";
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_service_1 = require("./app.service");
var testing_2 = require('@angular/router/testing');
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            providers: [router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_2.RouterTestingModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map