import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useHistory, useParams } from 'react-router-dom'
import mocklogo from '../components/companylogo.png';
import Image from '../components/image';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import TsunamiOutlinedIcon from '@mui/icons-material/TsunamiOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ApprovalOutlinedIcon from '@mui/icons-material/ApprovalOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import CustomizedTables from '../components/tabs/table';
import Link from '@mui/material/Link';
import data from './companyData.json';


const drawerWidth = 240;

const icons  = [
  <InboxIcon />,
  <EnergySavingsLeafIcon />,
  <SocialDistanceIcon />,
  <TsunamiOutlinedIcon />,
  <AssuredWorkloadOutlinedIcon />,
  <ConnectWithoutContactOutlinedIcon />,
  <ApprovalOutlinedIcon />,
  <CardMembershipOutlinedIcon />
]

const tabs  = [
  "Company Summary",
  <CustomizedTables />,
  'Social Impact', 
  'Climate Action',
  'Governance Performance', 
  'Method of Sustainability Communication', 
  'Frameworks signatory',
  'Certifications'
]

const pics = {
  1 : require("../components/images/bata.png"),
  2: require( "../components/images/bayer.png"),
  3 : require("../components/images/interloop.png"),
  4: require("../components/images/artistic.png"),
  5: require("../components/images/colgate.png"),
  6 : require("../components/images/dalda.png"),
  7 : require("../components/images/daraz.png"),
  8 : require("../components/images/baf.png"),
  9 : require("../components/images/atlas.png"),
  10: require("../components/images/mayfair.png"),
  11 : require("../components/images/archroma.png"),
  12 : require("../components/images/packages.png"),
  13 : require( "../components/images/dawlence.png")
}

function CompanyPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [ textState, setTextState ] = React.useState(0);
  const { id } = useParams();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Image src={pics[id]} />
      <List>
        {['Company Summary', 'Environmental Impact', 'Social Impact', 'Climate Action',
         'Governance Performance', 'Method of Sustainability Communication', 
        'Frameworks signatory', 'Certifications'].map((text, index) => (
          <ListItem button key={text} onClick={() => setTextState(index)}>
            <ListItemIcon>
              {icons[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor : '#7C947F'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {
              data.filter( x => x.id == id)[0].name
            }
          </Typography>
          <Box 
            sx={{
              right : "5%",
              position: 'absolute',
              display : 'flex'
            }}
          >
          <Typography 
            variant="h6" 
            component="div"
            sx={{
              marginRight : '30%'
            }}
          >
            <Link href="/" underline="none" color="inherit">
            Home
            </Link>
          </Typography>
          <Typography 
            variant="h6" 
            component="div"
          >
            Directory
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, 
              flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              bgcolor : '#b6aa637a'  
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, 
          p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, bgcolor : '#C3CA84' }}
      >
        <Toolbar />
        <Typography paragraph >
          {
            tabs[textState]
          }
        </Typography>
      </Box>
    </Box>
  );
}

CompanyPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default CompanyPage;
