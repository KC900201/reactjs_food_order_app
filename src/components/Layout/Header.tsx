import * as React from 'react'
import { Fragment } from 'react'
import styled from 'styled-components'

import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const HeaderProp = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`
const ImageSection = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`

const Header = ({ showCart }: { showCart: () => void }) => {
  return (
    <Fragment>
      <HeaderProp>
        <h1>React Meals</h1>
        <HeaderCartButton showCart={showCart} />
      </HeaderProp>
      <ImageSection>
        <img
          src={mealsImage}
          alt="meals"
          width="110%"
          height="100%"
          style={{
            objectFit: 'cover',
            transform: 'rotateZ(-5deg) translateY(-4rem) translateX(-1rem)',
          }}
        />
      </ImageSection>
    </Fragment>
  )
}

export default Header
