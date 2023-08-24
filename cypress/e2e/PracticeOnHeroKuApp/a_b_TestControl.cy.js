/// <reference types="cypress"/>

context("Open new page", () => {
  
  it("Add/Remove Elements ", () => {

    cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");

    function AddingButtons(){ 
      if (cy.get("button").first().should('exist')) {
       
        for (let btn = 8; btn <= 8; btn++)
          cy.get("button")
            .first()
            .should("have.text", "Add Element")
            .click({ multiple: true });
        btn++;
      }
    }
    AddingButtons()
   
    // function deleteButtons() { 
    //   for (let btn = 8; btn != 1; btn--)
    //       cy.get("button")
    //   .last()
    //   .should("have.text", "Delete")
    //   .click({ multiple: true });
    // }

  });


  it('Open a new tap into the same tap', () => { 

    cy.visit("https://the-internet.herokuapp.com/");
    //aqui checkeamos si la url /abtest esta habilitada con un status code 200
    cy.request('/abtest').then((response) => {
      expect(response.status).to.eq(200)
    })
    //aqui checkeamos si la url /abtest esta habilitada con un status code 200
    if (cy.request('/abtest').then((response) => {
        expect(response.status).to.eq(404)
      })) {
        cy.visit("https://the-internet.herokuapp.com/abtest");
        cy.get('a').should('exist')
      }
 
    // cy.get('a').invoke("removeAttr", "target");
    // cy.get('a').should('have.text', 'Elemental Selenium').click();
    // cy.get("a").click("right", { multiple: true });')

  })
   

})
