import LoginPage from "../../../pom/Login/login.cy";
import DirectoryPage from "../../../pom/Login/DirectoryPage.cy";

describe('User Directory Page', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.enterUsername('Admin'); // Ganti dengan username yang valid
        LoginPage.enterPassword('admin123'); // Ganti dengan password yang valid
        LoginPage.submit();
        DirectoryPage.visit();
        cy.viewport(1280, 800);
    });

    it('should search for Peter Mac Anderson with job title and location', () => {
        // Pastikan elemen dengan kelas --toggle terbuka
        DirectoryPage.verifyToggleVisible();
        // Langkah 3: Mencari pengguna "Peter"
        DirectoryPage.searchUser('Peter Mac Anderson');
        // Langkah 4: Memilih job title
        DirectoryPage.selectJobTitle('Chief Financial Officer');
        // Langkah 5: Memilih lokasi
        DirectoryPage.selectLocation('New York');
        // Langkah 6: Klik tombol pencarian
        DirectoryPage.clickSearchButton();
        // Langkah 7: Verifikasi bahwa pengguna ditemukan
        DirectoryPage.verifyUserFound('Peter Mac Anderson');
    });
});