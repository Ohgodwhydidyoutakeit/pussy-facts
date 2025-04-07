import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { MockModule, MockProvider } from 'ng-mocks'
import { AuthFacade } from '@pussy-facts/auth';
import { ReactiveFormsModule, } from '@angular/forms';

import { getTranslocoModule } from '@pussy-facts/transloco'


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent, MockModule(ReactiveFormsModule), getTranslocoModule()],
      providers: [
        MockProvider(AuthFacade),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
