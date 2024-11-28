/// <reference types="cypress" />

describe('ReqRes API - Update User', () => {
    
    it('should update a user\'s information', () => {
        const updatedData = {
            name: 'John Doe',
            job: 'Software Engineer'
        };

        cy.request('PUT', 'https://reqres.in/api/users/2', updatedData).then((response) => {
            // Memastikan status response adalah 200
            expect(response.status).to.eq(200);
            // Memastikan bahwa body respons memiliki properti yang diharapkan
            expect(response.body).to.have.property('name', updatedData.name);
            expect(response.body).to.have.property('job', updatedData.job);
            expect(response.body).to.have.property('updatedAt'); // Memastikan ada timestamp pembaruan
        });
    });

    it('should verify the updated user information', () => {
        cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
            // Memastikan status response adalah 200
            expect(response.status).to.eq(200);
            // Memastikan bahwa data pengguna memiliki properti yang diharapkan
            expect(response.body.data).to.have.property('first_name', 'Janet'); // Nama depan tidak berubah
            expect(response.body.data).to.have.property('last_name', 'Weaver'); // Nama belakang tidak berubah
            expect(response.body.data).to.have.property('job', 'Software Engineer'); // Memastikan job diperbarui
        });
    });

    it('should return 404 for updating a non-existent user', () => {
        const updatedData = {
            name: 'Non Existent User',
            job: 'Ghost'
        };

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/23', // ID yang tidak ada
            body: updatedData,
            failOnStatusCode: false // Mencegah Cypress gagal pada status 404
        }).then((response) => {
            // Memastikan status response adalah 404
            expect(response.status).to.eq(404);
            // Memastikan bahwa body tidak mengandung data
            expect(response.body).to.be.empty;
        });
    });

});