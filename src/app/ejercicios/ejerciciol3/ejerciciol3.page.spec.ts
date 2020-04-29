import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ejerciciol3Page } from './ejerciciol3.page';

describe('Ejerciciol3Page', () => {
  let component: Ejerciciol3Page;
  let fixture: ComponentFixture<Ejerciciol3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejerciciol3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejerciciol3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
