describe("Kanban Dusky Five - Fluxos principais", () => {
  const url = "https://kanban-dusky-five.vercel.app/";

  beforeEach(() => {
    cy.visit(url);
  });

  it("Deve exibir o título correto", () => {
    cy.get("div.content h1");
    cy.contains("Quadro Kanban").should("be.visible");
  });

  it('Deve permitir adicionar uma lista', () => {
    cy.contains('Adicionar outra lista').click();
    cy.get('div.custom-input input[type="text"]')
      .should('be.visible')
      .type('Nova lista{enter}');
    cy.contains('Nova lista').should('be.visible');
  });

  it('Deve permitir adicionar uma tarefa', () => {
    cy.contains('Adicionar Tarefa').click();
    cy.get('div.custom-input input[type="text"]')
      .should('be.visible')
      .type('Nova tarefa{enter}');
    cy.contains('Nova tarefa').should('be.visible');
  });
});
