import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, RouterOutletMap } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppService} from "../app.service";
import {RouterTestingModule} from '@angular/router/testing'
import {ShowTaskComponent} from "./showTask.component";
import {CommonModule} from '@angular/common';
describe('AppComponent', function () {
    let de: DebugElement;
    let comp: ShowTaskComponent;
    let fixture: ComponentFixture<ShowTaskComponent>;

class MockRouter{

}

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ShowTaskComponent ],
            providers: [{provide:Router,useClass:MockRouter}, RouterOutletMap,AppService],
            imports: [RouterTestingModule,CommonModule,FormsModule,HttpModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowTaskComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined() );

});