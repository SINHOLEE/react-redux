/// <reference types="Cypress" />
import '@testing-library/cypress/add-commands';

context('todos', () => {
  describe('e2e test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000', {
        onLoad: (contentWindow) => {
          console.log(contentWindow);
        },
      });
    });
    it('findAllByRole 시도', () => {
      // 두개 이상의 원가 발견될때는 all을쓰고 하나만 있을때는 all을 뺀다.
      cy.findAllByRole('button', { name: '삭제' });
    });

    it('init data가  랜더링이 잘 되어 있는가?', () => {
      cy.get('[data-testid="todo__text"]').should('have.length', 2);

      cy.findByText('123').should('exist');

      cy.findByText('123')
        .parent()
        .findByTestId('todo__input')
        .should('be.checked');

      cy.findByText('무야호').should('exist');
      cy.findByText('무야호')
        .should('exist')
        .siblings('input')
        .should('not.be.checked');
    });

    it('삭제버튼을 누르면 리스트에서 해당 아이템이 삭제된다.', () => {
      cy.findByText('무야호').should('exist');
      cy.findByText('무야호')
        .parent()
        .within(() => {
          cy.findByRole('button').click();
        });

      cy.findByText('무야호').should('not.be.exist');
    });

    it('checkbox를 누르면 해당 상태가 토글된다.', () => {
      cy.get('[data-testid="todo__1"]')
        .findByTestId('todo__input')
        .should('be.checked');
      cy.get('[data-testid="todo__1"]').findByTestId('todo__input').click();
      cy.get('[data-testid="todo__1"]')
        .findByTestId('todo__input')
        .should('not.be.checked');
    });
    it('input에 새로운 text를 입력하고 엔터를 누르면 todos에 등록된다.', () => {
      cy.get('form').findByTestId('todos__form__input').type('배고파{enter}');
      cy.get('.todos');
    });
  });
});
