import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactsPageComponent } from './facts-page.component'
import { MockComponent } from 'ng-mocks';
import { FeatureFactsContainerComponent } from '@pussy-facts/feature-facts';
describe('FactsPage', () => {
  let component: FactsPageComponent;
  let fixture: ComponentFixture<FactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactsPageComponent, MockComponent(FeatureFactsContainerComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(FactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
