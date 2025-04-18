import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { getTranslocoModule } from '@pussy-facts/transloco';
import { MockModule } from 'ng-mocks';
import { RedirectPageComponent } from './redirect-page.component';

describe('FactsPage', () => {
  let component: RedirectPageComponent;
  let fixture: ComponentFixture<RedirectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectPageComponent, getTranslocoModule(), MockModule(RouterModule), MockModule(MatButtonModule)],
    }).compileComponents();

    fixture = TestBed.createComponent(RedirectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
