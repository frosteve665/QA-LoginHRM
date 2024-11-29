// cypress/integration/resetPassword.spec.js

import ResetPasswordPage from '../../../pom/Login/ResetPasswordPage.cy';

describe('Reset Password Page', () => {
    beforeEach(() => {
        ResetPasswordPage.visit();
    });

    it('should display the reset password page title', () => {
        ResetPasswordPage.verifyResetPasswordPageTitle();
    });

    it('should allow user to enter email', () => {
        ResetPasswordPage.enterEmail('test@example.com');
        ResetPasswordPage.verifySubmitButtonVisible();
    });

    it('should display success message after submitting', () => {
        ResetPasswordPage.enterEmail('test@example.com');
        ResetPasswordPage.submit();
        cy.get('.oxd-text.oxd-text--p').should('be.visible');
    });

    it('should display the email field', () => {
        ResetPasswordPage.verifyEmailFieldVisible();
    });
});