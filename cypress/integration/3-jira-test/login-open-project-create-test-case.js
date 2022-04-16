describe('Loggin, search poject and create ticket', () => {
  it('Visit JIRA login page and add login', async () => {
    cy.visit('https://id.atlassian.com/login');
    cy.get('input[name="username"]').type("triori@gmail.com");
    cy.get('button[id="login-submit"]').click()
    cy.get('input[name="password"]').should('be.visible').type('3263985Trolls');
    cy.get('button[id="login-submit"]').click();
    cy.get('a[href="https://triori.atlassian.net/secure/BrowseProjects.jspa?selectedProjectType=software"]').should('be.visible').click();
    cy.get('button[id="createGlobalItemIconButton"]').should('be.visible').click();
    cy.get('input[id="summary-field"]').should('be.visible').type('Some text');
    cy.get('.pm-table-resizing-plugin').should('be.visible').click().type('Some text ');
    //aria-label="Файлы и изображения"
    cy
      .get('input[data-testid="media-picker-file-input"]')
      .then(($inputForFile) => {
        cy.wrap($inputForFile[0]).selectFile('testImg.png', { force: true });
        cy.wrap($inputForFile[1]).selectFile('testImg.png', { force: true });
      })
      .then(() => {
        cy.wait(5000)
        cy
          .get('button[form="issue-create.ui.modal.create-form"]').click();
      });
    // .then(() => {
    //   cy.get('button[form="issue-create.ui.modal.create-form"]').click();
    // });
    // cy.get('@inputForFile').selectFile('testImg.png');
    //selectFile('testImg.png');
    // cy.get('input[data-testid="media-picker-file-input"]').click();
    // cy.get('#uploaded-files').contains('evening.png');
    // cy.get('div').contains('Jira Software').should('be.visible');
    // cy.get('button[data-testid="switcher-btn"]').should('be.visible').click();
    // cy.get('a[data-testid="switcher-item__JIRA_SOFTWAREtriori"]').should('be.visible')
  });
  // it('Try to 0Auth by Google acc', () => {
  //   cy.get('a[href="https://triori.atlassian.net/secure/BrowseProjects.jspa?selectedProjectType=software"]').should('be.visible');
  // });
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