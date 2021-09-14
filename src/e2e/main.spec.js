const { browser, element, by, ExpectedConditions, ElementFinder } = require("protractor");

describe('E2E: Home Page', function() {

  beforeEach(function() {
    browser.get('http://localhost:4200');
  });

  it('should have a titile', function()  {
    expect(browser.getTitle()).toEqual('AngularElements');
  })
  
  it('should exist section and components', function() {
    let section = element(by.id('welcome'));
    let form = element(by.id('form'));

    expect(element(by.tagName('h1'))).toBeTruthy(); 
    expect(form).toBeTruthy();
    expect(section).toBeTruthy();
  });

  it('form EXISTS', function()  {
    let webElement = element(by.tagName('ae-contact-form'));
    expect(webElement).toBeTruthy();
  });
  
  it('should write on form', function()  {
    let webComponent = {
      name: element(by.css_sr('#form::sr .nameClass')),
      lastName: element(by.css_sr('#form::sr .lastNameClass')),
      country: element(by.css_sr('#form::sr .countryClass')),
      subject: element(by.css_sr('#form::sr #subject')),
      submit: element(by.css_sr('#form::sr #submit')),
    };
    webComponent.name.sendKeys('Adrian');
    webComponent.lastName.sendKeys('Clement');
    webComponent.country.element(by.cssContainingText('option', 'USA')).click();
    webComponent.subject.sendKeys('Hola que tal');
    webComponent.submit.click();
   
    expect(webComponent.name.getAttribute('value')).toEqual('Adrian');
    expect(webComponent.lastName.getAttribute('value')).toEqual('Clement');
    expect(webComponent.country.getAttribute('value').then(value => value.split(': ')[1])).toEqual('USA');
    expect(webComponent.subject.getAttribute('value')).toEqual('Hola que tal');
    // expect(webComponent.submit.click()).toBeTruthy();
  });

});