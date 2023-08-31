import React, { ReactNode } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styled from "styled-components"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Main = styled.main`
  flex: 1;
`