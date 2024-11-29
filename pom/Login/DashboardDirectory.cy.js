class DirectoryPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
    }

    verifyToggleVisible() {
        cy.get('.--toggle').should('be.visible');
    }

    searchUser(name) {
        cy.get('.oxd-table-filter input[placeholder="Type for hints..."]').clear().type('Peter');
        cy.wait(5000); // Wait for 5 seconds
        // Click on the first auto-complete option
        cy.get('.oxd-autocomplete-option').first().click();
    }

    selectJobTitle(jobTitle) {
        cy.get('.oxd-select-text--active').first().click(); // Open job title dropdown
        cy.get('.oxd-select-dropdown').contains('Chief Financial Officer').click(); // Select job title
    }

    selectLocation(location) {
        cy.get('.oxd-select-text--active').eq(1).click();
        cy.get('.oxd-select-dropdown').contains(location).click();
    }

    clickSearchButton() {
        cy.get('.oxd-table-filter button[type="submit"]').click(); // Click the submit button
    }

    verifyUserFound(name) {
        cy.get('.oxd-grid-4').should('contain', name);
    }
}

export default new DirectoryPage();
