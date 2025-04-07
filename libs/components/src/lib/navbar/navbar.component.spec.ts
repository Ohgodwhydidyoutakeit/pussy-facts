import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFacade } from '@pussy-facts/auth';
import { getTranslocoModule } from '@pussy-facts/transloco';
import { MockModule, MockProvider } from 'ng-mocks';
import { NavbarComponent } from './navbar.component';

describe('ComponentsComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, getTranslocoModule(), MockModule(ReactiveFormsModule)],
      providers: [
        MockProvider(AuthFacade, {
          isLoggedIn: signal(false)
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
