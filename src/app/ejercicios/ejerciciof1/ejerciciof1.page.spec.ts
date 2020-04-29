import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ejerciciof1Page } from './ejerciciof1.page';

describe('Ejerciciof1Page', () => {
  let component: Ejerciciof1Page;
  let fixture: ComponentFixture<Ejerciciof1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejerciciof1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejerciciof1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
