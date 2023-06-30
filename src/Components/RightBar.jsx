import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import PropTypes from "prop-types"
import {datas} from "../data"
import React from "react";

export function RightBar({posts}) {
  console.log(posts[0].profileimage)
    return <Box flex={2} sx={{display: {xs: "none", sm: "block"}}}>
        <Box position="fixed" p={2}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={5}>
            <Avatar alt="friend" />
            <Avatar alt="friend" />
            <Avatar alt="friend" />
            <Avatar alt="friend" />
            <Avatar alt="friend" />
            <Avatar alt="friend" />
            <Avatar alt="friend" />
            <Avatar alt="friend" />
            <Avatar alt="friend" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
            {posts.map((posts,i)=> {
                return <ImageListItem key={i}>
                    <img src={posts.profileimage} key={i} />
                </ImageListItem>
            })}
        </ImageList>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
              <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
          />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
              <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
          />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker"  />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
          />
      </ListItem>
    </List>
        </Box>
    </Box>
}

 RightBar.propTypes = {
         posts: PropTypes.string
     }