/// <reference types="cypress" />

describe('ReqRes API - List Users', () => {
    
    it('should get the first page of users', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=1').then((response) => {
            // Memastikan status response adalah 200
            expect(response.status).to.eq(200);
            // Memastikan ada data pengguna dalam respons
            expect(response.body.data).to.have.length.greaterThan(0);
            // Memastikan bahwa data pengguna memiliki properti yang diharapkan
            expect(response.body.data[0]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
        });
    });

    it('should get the second page of users', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length.greaterThan(0);
            expect(response.body.data[0]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
        });
    });

    it('should verify total number of users', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=1').then((response) => {
            expect(response.body.total).to.eq(12); // Total pengguna yang tersedia
        });
    });

    it('should verify the last user on the first page', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=1').then((response) => {
            const lastUser  = response.body.data[response.body.data.length - 1];
            expect(lastUser ).to.have.property('id', 6); // ID pengguna terakhir di halaman pertama
            expect(lastUser ).to.have.property('first_name', 'Tracey'); // Nama depan pengguna terakhir
        });
    });

    it('should return an empty array for non-existent page', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=3').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length(0); // Memastikan tidak ada pengguna di halaman yang tidak ada
        });
    });

});