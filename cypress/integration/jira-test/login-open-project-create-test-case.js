describe('Loggin, search poject and create ticket', () => {
  before(() => {
    cy.visit(Cypress.env('loginURL'));
    cy.get('input[name="username"]').type(Cypress.env('login'));
    cy.get('button[id="login-submit"]').click()
    cy.get('input[name="password"]').should('be.visible').type(Cypress.env('password'));
    cy.get('button[id="login-submit"]').click();
    cy.url().should('contain', 'start');
  })
  beforeEach(() => {
    Cypress.Cookies.preserveOnce(['cloud.session.token', 'ajs_anonymous_id', 'atlassian.xsrf.token', '__aid_user_id', '__cid'], 'remember_token');
  });
  it('Make new task', () => {
    cy.get('a[href="https://triori.atlassian.net/secure/BrowseProjects.jspa?selectedProjectType=software"]').should('be.visible').click();
    cy.get('button[id="createGlobalItemIconButton"]').should('be.visible').click();
    cy.url().should('contain', 'projects');
  });
  it('Add text', () => {
    cy.get('input[id="summary-field"]').should('be.visible').type('Some text');
    cy.get('.pm-table-resizing-plugin').should('be.visible').click().type('Some text ');
  });
  it('Add pictures', () => {
    cy
      .get('input[data-testid="media-picker-file-input"]')
      .then(($inputForFile) => {
        cy.wrap($inputForFile[0]).selectFile('cypress/fixtures/img/testImg.png', { force: true });
        cy.wrap($inputForFile[1]).selectFile('cypress/fixtures/img/testImg.png', { force: true });
      });
  });
  it('Click create', () => {
    cy.wait(2000)
    cy.get('button[form="issue-create.ui.modal.create-form"]').click();
  });
});