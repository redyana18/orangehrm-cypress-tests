describe("OrangeHRM Login Tests", () => {
  const baseUrl = "https://opensource-demo.orangehrmlive.com";

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit(baseUrl);
  });

  it("TC_Login_01: Login with valid credentials", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "contain",
      "Dashboard"
    );
  });

  it("TC_Login_02: Login with invalid credentials", () => {
    cy.get('input[name="username"]').type("InvalidUser");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
  });

  it("TC_Login_03: Login with empty username", () => {
    cy.get('input[name="username"]').clear(); // Ensure username is empty
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    // Find the error message directly under the username field
    cy.get('input[name="username"]')
      .closest(".oxd-input-group")
      .find(".oxd-input-field-error-message", { timeout: 10000 })
      .should("contain", "Required");
  });

  it("TC_Login_04: Login with empty password", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').clear(); // Ensure password is empty
    cy.get('button[type="submit"]').click();
    // Find the error message directly under the password field
    cy.get('input[name="password"]')
      .closest(".oxd-input-group")
      .find(".oxd-input-field-error-message", { timeout: 10000 })
      .should("contain", "Required");
  });

  it("TC_Login_05: Login with special characters", () => {
    cy.get('input[name="username"]').type("Admin@123");
    cy.get('input[name="password"]').type("admin@123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
  });
});
