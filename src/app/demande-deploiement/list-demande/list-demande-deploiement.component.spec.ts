import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeDeploiementComponent } from './list-demande-deploiement.component';

describe('IconsComponent', () => {
  let component: ListDemandeDeploiementComponent;
  let fixture: ComponentFixture<ListDemandeDeploiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandeDeploiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeDeploiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
