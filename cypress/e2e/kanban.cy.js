describe("Kanban Dusky Five - Fluxos principais", () => {
  const url = "https://kanban-dusky-five.vercel.app/";

  beforeEach(() => {
    cy.visit(url);
  });

  it("Deve exibir o título correto", () => {
    cy.get("div.content h1");
    cy.contains("Quadro Kanban").should("be.visible");
  });
});
