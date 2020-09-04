import {
  EmojiFlags,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
  Chat,
  ExpandMore,
} from '@material-ui/icons';
import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import {useFacebookValue} from '../../Context/context';

function Sidebar() {
  const [{user}, dispatch] = useFacebookValue();

  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
      <SidebarRow Icon={EmojiFlags} title='Pages' />
      <SidebarRow Icon={People} title='Friends' />

      <SidebarRow Icon={Chat} title='Message' />

      <SidebarRow Icon={Storefront} title='Markateplace' />

      <SidebarRow Icon={VideoLibrary} title='Videos' />

      <SidebarRow Icon={ExpandMore} title='More' />
    </div>
  );
}

export default Sidebar;
