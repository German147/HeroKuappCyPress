/// <reference types="cypress"/>

context("Practice On first Tests", () => {
  
  it("Add/Remove Elements ", () => {

    cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");

    function AddingButtons(){ 
        for (let btn = 1; btn <= 8; btn++) { 
          cy.get("button")
            .first()
            // .should("have.text", "Add Element")
            .click({ multiple: true });
        } 
    }
    AddingButtons()
  
   
    function deleteButtons() { 
         for (let btn = 8; btn >= 1; btn--) {
             cy.get("button")
               .last()
               .should("have.text", "Delete")
               .click({ multiple: true });
         } 
    }
   deleteButtons()

  });
  it('Checks URL status code 200', () => { 

    cy.visit("https://the-internet.herokuapp.com/");
    //aqui checkeamos si la url /abtest esta habilitada con un status code 200
    cy.request('/abtest').then((response) => {
      expect(response.status).to.eq(200)
    })
    //aqui checkeamos si la url /abtest esta habilitada con un status code 200
    if (cy.request('/abtest').then((response) => {
        expect(response.status).to.eq(200)
      })) {
        cy.visit("https://the-internet.herokuapp.com/abtest");
        cy.get('a').should('exist')
      }

  })
  it('Should Open a new Tap', () => {
    cy.visit("https://the-internet.herokuapp.com/abtest");
    cy.get('a').invoke("removeAttr", "target");
    cy.get('a').should('have.text', 'Elemental Selenium');
    cy.get("a").click("right", { multiple: true });
    
  })

})
