import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SvgIconProps } from '@mui/material';

interface ItemType {
  path?: string,
  text: string,
  Icon: (props: SvgIconProps) => JSX.Element;
}

interface LangItemType {
  lngCode: string,
  text: string,
}

const Item: React.FunctionComponent<ItemType> = ({
  path, text, Icon,
}) => path ?
  <ListItem disablePadding>
    <ListItemButton component={Link} to={path}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem> :
  <ListItem>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>;

const LanguageItem: React.FunctionComponent<LangItemType> = ({
  text, lngCode,
}) => {
  const { i18n } = useTranslation();
  const changeLanguage: () => void = () => {
    i18n.changeLanguage(lngCode);
  };
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={changeLanguage}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};


const MenuList: React.FunctionComponent<{}> = ({
}) => {
  const { t } = useTranslation('menu');
  return (
    <>
      <List>
        <Item
          text={t('languages')}
          Icon={TranslateIcon}
        />
      </List>
      <Divider />
      <List>
        <LanguageItem
          text='English'
          lngCode='en'
        />
        <LanguageItem
          text='Español'
          lngCode='es'
        />
      </List>
    </>);
};

export default MenuList;
