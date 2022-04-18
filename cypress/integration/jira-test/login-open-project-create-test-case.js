describe('Loggin, search poject and create ticket', () => {
  it('Loggin, search poject and create ticket', async () => {
    cy.visit(Cypress.env('loginURL'));
    cy.get('input[name="username"]').type(Cypress.env('login'));
    cy.get('button[id="login-submit"]').click()
    cy.get('input[name="password"]').should('be.visible').type(Cypress.env('password'));
    cy.get('button[id="login-submit"]').click();
    cy.get('a[href="https://triori.atlassian.net/secure/BrowseProjects.jspa?selectedProjectType=software"]').should('be.visible').click();
    cy.get('button[id="createGlobalItemIconButton"]').should('be.visible').click();
    cy.get('input[id="summary-field"]').should('be.visible').type('Some text');
    cy.get('.pm-table-resizing-plugin').should('be.visible').click().type('Some text ');
    cy
      .get('input[data-testid="media-picker-file-input"]')
      .then(($inputForFile) => {
        cy.wrap($inputForFile[0]).selectFile('cypress/fixtures/img/testImg.png', { force: true });
        cy.wrap($inputForFile[1]).selectFile('cypress/fixtures/img/testImg.png', { force: true });
      })
      .then(() => {
        cy.wait(5000)
        cy
          .get('button[form="issue-create.ui.modal.create-form"]').click();
      });
  });
})