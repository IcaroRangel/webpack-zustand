import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Container, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { pantsModule } from '../modules/pantsModule';
import { shirtsModule } from '../modules/shirtsModule';
import { ChevronDownIcon } from '@chakra-ui/icons';

type TMenu = {
  title: string;
  path: string;
  submenus: [
    {
      label: string;
      path: string;
    }
  ];
};

const Menu = () => {
  const [menu, setMenu] = useState<TMenu[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const loadMenus = useCallback(async () => {
    const pantsMenu: any = await pantsModule.getMenus();
    const shirtsMenu: any = await shirtsModule.getMenus();

    setMenu([...pantsMenu, ...shirtsMenu]);
  }, []);

  useEffect(() => {
    loadMenus();
  }, []);

  return (
    <Container className="container">
      <nav>
        <Box border={'1px solid #111'} p={6} w={100} mb={12}>
          Menu
          <Button
            border={'none'}
            borderRadius={'50%'}
            ml={6}
            p={2}
            onClick={() => setIsOpen(!isOpen)}
            cursor={'pointer'}
          >
            <ChevronDownIcon />
          </Button>
        </Box>
        {isOpen &&
          menu.map((route: any, index: any) => (
            <>
              {route.submenus && (
                <Box>
                  <Button borderRadius={4} p={2} cursor={'pointer'}>
                    <Link
                      key={`${index}`}
                      to={route.path}
                      style={{ textDecoration: 'none', color: '#111' }}
                    >
                      {route.title}
                    </Link>
                  </Button>
                  {route.submenus.map((submenu: any) => (
                    <Box key={submenu.path} pl={8} pb={10}>
                      <Link
                        style={{ textDecoration: '#909090', color: '#111' }}
                        to={submenu.path}
                      >
                        {submenu.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              )}
            </>
          ))}
      </nav>
    </Container>
  );
};

export default Menu;
