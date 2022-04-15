describe('Loggin, search poject and create ticket', () => {
  it('Visit JIRA login page and add login', () => {
    cy.visit('https://id.atlassian.com/login');
    cy.get('input[name="username"]').type("triori@gmail.com");
    cy.get('button[id="login-submit"]').click()
    cy.get('input[name="password"]').should('be.visible').type('3263985Trolls');
    cy.get('button[id="login-submit"]').click();
    cy.get('button[data-testid="switcher-btn"]').should('be.visible').click();
    // cy.get('a[data-testid="switcher-item__JIRA_SOFTWAREtriori"]').should('be.visible')
  });
  it('Try to 0Auth by Google acc', () => {
    cy.get('section[data-testid="switchTo__section"]').should('be.visible')
    cy.get('a[data-testid="switcher-item__JIRA_SOFTWAREtriori"]').should('be.visible').click()
  });
  // it('Input login', () => {
  //   cy.get('input[id="identifierId"]').type('triori')
  // })
  // it('Input login', () =>{
    // cy.get('input[name="username"]').click();
    // cy.get('input[name="username"]').type("triori@gmail.com");
  // });
  // it('Click "Next"', () => {
  //   cy.get('button[id="login-submit"]').click()
  // });
  // it('Input password', () => {
  //     cy.get('input[name="password"]').should('be.visible').type('3263985Trolls');
  // });
  // it('Click "Login', () => {
  //     cy.get('button[id="login-submit"]').click();
  // });
  // it('Find login error', () => {
  //     cy.get('*[role="alert"]').should('be.visible').then(() => {
          
  //     });
  // });
  //xX4o4qKFle3h2MnQG2HAA127
})