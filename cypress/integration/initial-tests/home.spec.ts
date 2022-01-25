describe('Home Test', () => {
  it('visiting site should render the NextJS default page', () => {
    cy.visit('/')
    cy.contains('Welcome to')
    cy.contains('Get started by editing pages/index.tsx')
  })
})

export {}
