import React from 'react';

import { Services, UseCases, Company } from '../Content';
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown';
import { Container, DropdownStyles } from './styles';
import SignUpButton from '../Buttons/SignUpButton'

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Services"
                content={Services}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Use cases"
                content={UseCases}
                backgroundHeight={167}
              />
            </li>
            <li>
              <DropdownOption
                name="Company"
                content={Company}
                backgroundHeight={215}
              />
            </li>
            <SignUpButton name={'Sign Up'} />   
          </ul>       
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
