import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
  import { MdPhoneIphone } from 'react-icons/md';
  import { SiNintendo } from 'react-icons/si';
  import { BsGlobe } from 'react-icons/bs';
  import { HStack, Icon } from "@chakra-ui/react";
  import { IconType } from "react-icons";
  
  interface Props {
    platform: string;
  }
  
  const PlatformIcon = ({ platform }: Props) => {
    const iconMap: { [key: string]: IconType } = { 
      pc: FaWindows,
      playstation: FaPlaystation,
      xbox: FaXbox,
      nintendo: SiNintendo,
      mac: FaApple,
      linux: FaLinux, 
      android: FaAndroid,
      ios: MdPhoneIphone,
      web: BsGlobe
    }
  
    return (
      <HStack marginY={1}> 
          <Icon  as={iconMap[platform]} color='gray.500' fontSize={20}/>
      </HStack>
    );
  };
  
  export default PlatformIcon;