import React, { Component } from "react";
import { Drawer } from '@material-ui/core';
import '../SideBar/sidebar.scss';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

  export default class Sidebar extends React.Component {
      trash=()=>{
          window.location.href="http://localhost:8000/trash"
      }
      archive=()=>{
        window.location.href="http://localhost:8000/archive"
    }
      render(){
        
    return (
     <div>
     <Drawer className="drawer" variant="persistent"
     open={this.props.isVisibleDrawer}
     width={200}
     >
     <List className="list">
     <div className="notesicon">
        <ListItem>
           <ListItemIcon>
              <EmojiObjectsOutlinedIcon className="Notes1" >
              </EmojiObjectsOutlinedIcon>    
           </ListItemIcon>
           <ListItemText primary='Notes'/>
        </ListItem>
    </div>
    <div className="reminder">
       <ListItem>
           <ListItemIcon>  
               <NotificationsNoneOutlinedIcon className="Reminder">
               </NotificationsNoneOutlinedIcon>
           </ListItemIcon>
          <ListItemText primary='Reminders'/>
       </ListItem>             
    </div>
    <div className="Edit-label">
           <ListItem >
               <ListItemIcon>
                   <CreateOutlinedIcon className="Edit Labels">
                   </CreateOutlinedIcon>
               </ListItemIcon>
               <ListItemText primary='Edit labels' />
           </ListItem>
    </div>
    <div className="archive" onClick={this.archive}>
           <ListItem >
               <ListItemIcon>
                   <ArchiveOutlinedIcon className="Archive">
                   </ArchiveOutlinedIcon>
               </ListItemIcon>
               <ListItemText primary='Archive' />
           </ListItem>
    </div>
    <div className="bin" onClick={this.trash}>
           <ListItem  >
               <ListItemIcon>
                   <DeleteOutlinedIcon  className="Trash">
                   </DeleteOutlinedIcon>
               </ListItemIcon>
               <ListItemText primary='Trash' />
           </ListItem>
    </div>
   </List>
     </Drawer>
      </div>
    );
   }
 }