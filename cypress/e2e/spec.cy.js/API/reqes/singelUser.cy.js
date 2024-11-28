/// <reference types="cypress" />

describe('ReqRes API - Single User', () => {
    
    it('should get a specific user by ID', () => {
        cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
            // Memastikan status response adalah 200
            expect(response.status).to.eq(200);
            // Memastikan data pengguna tidak null
            expect(response.body.data).to.not.be.null;
            // Memastikan data pengguna memiliki properti yang diharapkan
            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
            // Memastikan ID pengguna adalah 2
            expect(response.body.data).to.have.property('id', 2);
            // Memastikan nama depan pengguna adalah "Janet"
            expect(response.body.data).to.have.property('first_name', 'Janet');
        });
    });

    it('should return 404 for a non-existent user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23', // ID yang tidak ada
            failOnStatusCode: false // Mencegah Cypress gagal pada status 404
        }).then((response) => {
            // Memastikan status response adalah 404
            expect(response.status).to.eq(404);
            // Memastikan bahwa body tidak mengandung data
            expect(response.body).to.be.empty;
        });
    });

});