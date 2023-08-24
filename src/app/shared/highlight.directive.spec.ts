import {  Component, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `
  <h2 appHighlight>Something highlight</h2>
  <h2>No highlight</h2>
  `
})
class TestComponent {}


describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];  // the three elements w/ the directive
  let bareH2: DebugElement; // the <h2> w/o the directive


  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));

    bareH2 = fixture.debugElement.query(By.css('h2:not([appHighlight])'));

    it('should have on highlighted element', () => {
      expect(des.length).toBe(1);
    });

    it('should color 1st <h2> background "yellow"', () => {
      const bgColor = des[0].nativeElement.style.backgroundColor;
      expect(bgColor).toBe('yellow');
    });

    it('should color 2nd <h2> background w/ default color', () => {
      const dir = des[1].injector.get(HighlightDirective) as HighlightDirective;
      const bgColor = des[1].nativeElement.style.backgroundColor;
      expect(bgColor).toBe('white');
    });
});
});
