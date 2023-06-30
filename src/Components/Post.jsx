import { Favorite, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types"
import { useState } from "react";


export function Post({name, date,profileimage,postimage,posttext}) {
  const [fav,setFav] = useState(false)
    return <Card sx={{margin: 5 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src={profileimage} />
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title={name}
      subheader={date}
    />
    {postimage ? <CardMedia
      component="img"
      height="20%"
      image={postimage}
      alt="post image"
    /> : null}
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {posttext}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton onClick={()=> setFav((prev)=> !prev )} aria-label="add to favorites" style={fav === true ? {color: "red"} : null}>
        <Favorite />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
      <div style={{padding: "0 15px 3px",
    fontSize: "small",
    fontFamily: "ui-monospace",
    textTransform: "capitalize",}}>
        {fav === true ? "1 fav" : ""}
      </div>
  </Card>
}

Post.propTypes = {
    name: PropTypes.string,
    profileimage: PropTypes.string,
    date: PropTypes.string,
    postimage: PropTypes.string,
    posttext: PropTypes.string,
}