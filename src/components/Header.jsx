import { useState } from 'react';
import Container from './Container';
import Logo from './Logo';
import HamMenu from './HamMenu';
import Nav from './Nav';

const Header = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);
  return (
    <header className="bg-cBlue h-20 font-barlow sticky top-0 z-50 border-b-2 border-cBlack/20">
      <Container className="flex justify-between items-center h-full">
        <Logo />
        <div>
          <HamMenu
            checkboxValue={checkboxValue}
            setCheckboxValue={setCheckboxValue}
          />
          <Nav
            checkboxValue={checkboxValue}
            setCheckboxValue={setCheckboxValue}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
