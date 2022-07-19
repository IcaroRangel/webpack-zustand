import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
    <Container ml={124} mr={124}>
      <Box
        border={'1px solid #00ff7f'}
        p={6}
        w={100}
        mb={12}
        borderRadius={12}
        background={'#f8fff7'}
      >
        Menu
        <Button
          border={'none'}
          borderRadius={'50%'}
          ml={6}
          p={2}
          cursor={'pointer'}
          background={'#111'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDownIcon color={'#f8fff7'} />
        </Button>
      </Box>
      {isOpen &&
        menu.map((route: any, index: any) => (
          <>
            {route.submenus && (
              <Box p={8}>
                <Button
                  p={4}
                  borderRadius={4}
                  cursor={'pointer'}
                  background={'#111'}
                  color={'#f8fff7'}
                >
                  <Link
                    key={`${index}`}
                    to={route.path}
                    style={{ textDecoration: 'none', color: '#f8fff7' }}
                  >
                    {route.title}
                  </Link>
                </Button>
                {route.submenus.map((submenu: any) => (
                  <Box
                    key={submenu.path}
                    ml={8}
                    mb={10}
                    p={3}
                    border={'1px solid #00ff7f'}
                    borderRadius={4}
                    background={'#f8fff7'}
                  >
                    <Link
                      style={{ textDecoration: 'none', color: '#111' }}
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
    </Container>
  );
};

export default Menu;
