/// <reference types="Cypress" />
import '@testing-library/cypress/add-commands';

context('counter', () => {
  describe('e2e counter', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
    it('초기 랜더링 값은 0이다.', () => {
      cy.findByTestId('counter__value').should('have.text', '0');
    });
    it('+1 버튼을 누르면 한 번당 1씩 증가한다.', () => {
      cy.findAllByRole('button').within(() => {
        // 장점 -> 사용자가 보는 관점에서 찾는것이므로 조금 더 직관적
        // 단점 -> 텍스트가 똑같이 +1인 노드가 하나라도 있을경우 깨질 수 있음.
        cy.findByText('+1').click();
      });
      cy.findByTestId('counter__value').should('have.text', '1');
      cy.findAllByRole('button').within(() => {
        cy.findByText('+1').click();
      });
      cy.findByTestId('counter__value').should('have.text', '2');
    });
    it('-1 버튼을 누르면 한 번당 1씩 감소한다.', () => {
      cy.get('.counter').within(() => {
        cy.findByTestId('counter__dec-btn').click();
      });
      // cy.findByTestId('counter__dec-btn').click();
      cy.findByTestId('counter__value').should('have.text', '-1');
      cy.get('.counter').within(() => {
        cy.findByTestId('counter__dec-btn').click();
      });
      cy.findByTestId('counter__value').should('have.text', '-2');
    });
  });
});
