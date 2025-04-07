import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { getTranslocoModule } from '@pussy-facts/transloco'
import { MockComponent } from 'ng-mocks';
import { NavbarComponent } from '@pussy-facts/components';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([]), getTranslocoModule(), MockComponent(NavbarComponent)],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
