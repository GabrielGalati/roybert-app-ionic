import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ejerciciol5Page } from './ejerciciol5.page';

describe('Ejerciciol5Page', () => {
  let component: Ejerciciol5Page;
  let fixture: ComponentFixture<Ejerciciol5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejerciciol5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejerciciol5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
