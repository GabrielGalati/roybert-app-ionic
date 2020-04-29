import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ejerciciof2Page } from './ejerciciof2.page';

describe('Ejerciciof2Page', () => {
  let component: Ejerciciof2Page;
  let fixture: ComponentFixture<Ejerciciof2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejerciciof2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejerciciof2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
