import { DataService } from './../../shared/services/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  // initialize test environment
  beforeEach(async(() => {
    // create a new module, only for testing
    // isolate component and dependencies
    // create a test module, that contains only component, services needed for testing
    TestBed.configureTestingModule({
      imports: [ 
        // other modules
       // material modules
      ],
      declarations: [ CartComponent ], // all the components that may be needed for CartComponent
      providers: [
        DataService, // services
      ]
    })
    .compileComponents(); // jit compiling the html into js 
  }));

  beforeEach(() => {
    // All DI to be resolved
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    // this will let angular to perform dirty check and render template
    // 
    fixture.detectChanges(); 
  });

  // test case/spec
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should be default counter 0", () => {
    expect(component.counter).toBe(0);
    component.incr();
    expect(component.counter).toBe(1);
  })

  it("should be initialize called", () => {
    spyOn(component, 'initialize');
    component.incr();
    expect(component.initialize).toHaveBeenCalled();
    // check if 1 is passed as argument or not
    expect(component.initialize).toHaveBeenCalledWith(1)
  })


  // html functionalitied
 
  it("should be initialize called", () => {
    let element = fixture.nativeElement; // Real HTML DOM
     
    expect(element.querySelectorAll('p')[0].textContent)
          .toContain("Counter: 0"); 

    component.incr(); 

    expect(component.counter).toBe(1)

    // force render html
    fixture.detectChanges();

    expect(element.querySelectorAll('p')[0].textContent)
          .toContain("Counter: 1"); 
  })

  it("Should be empty list ", () => {
    let element = fixture.nativeElement;
    expect(element.querySelectorAll("li").length).toBe(0); 
    component.addItem();
    fixture.detectChanges();
    expect(element.querySelectorAll("li").length).toBe(1); 


    expect(element.querySelectorAll('span')[0].textContent)
          .toContain("Product"); 
  })

 

});
