import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ejerciciol1Page } from './ejerciciol1.page';

describe('Ejerciciol1Page', () => {
  let component: Ejerciciol1Page;
  let fixture: ComponentFixture<Ejerciciol1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejerciciol1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejerciciol1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
