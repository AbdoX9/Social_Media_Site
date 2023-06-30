import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material";
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types"

export function Add({setPosts}) {
    const [open,setOpen] = useState(false)
    const [value,setValue] = useState("")
    const [image,setImage] = useState()
    function handleClick() {
      const datenow = new Date()
      const month = datenow.toLocaleString("default", {month: "long"})
      const day = datenow.getDay()
      const year = datenow.getFullYear()
      const newPost =[ {
          profileimage: image,
          name: "Seth Lion",
          date: `${month} ${day},${year}`,
          postimage: "https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg",
          posttext: value,
        
      }]
      setPosts((prev) => value || image !== "" ? [...newPost,...prev] : [...prev]
       )
      setOpen(false)
      setValue("")
      }
    const HandleChange = (event) => {
        setValue(event.target.value);
      }
    const handleImage = (event) => {
      setImage(URL.createObjectURL(event.target.files[0]))
      console.log(image)
    }
    const UserPosting = styled(Box)({
        display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
    })
    const UserimageUpload = styled("label")({
      zIndex: "9999", 
      width: "18px",
      height:"18px",
      display: "block",
      position: "absolute",
      top: "3px",
      left: "3px",
      cursor: "pointer"
    })

    return( <>
    <Tooltip title="Post" onClick={()=> setOpen(true)} 
     sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "calc(50% - 25px)", md: 30 },
      }}
    >
    <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
    </Tooltip>
        <Modal
        sx={{ display: "flex",
        justifyContent: "center",
        alignItems: "center",}}
        open={open}
    onClose={()=> setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
        <Box  width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}>
 <UserPosting>
 <Avatar
              src="https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg"
              sx={{ width: 30, height: 30 }}
              />
            <Typography fontWeight={500} variant="span">
              Seth Lion
            </Typography>
</UserPosting>
              
              <TextField 
              onChange={HandleChange}
              value={value}
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="......."
              variant="standard"
              />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <div style={{position: "relative"}}>
            <UserimageUpload htmlFor="file"></UserimageUpload>
            <input type="file" id="file" style={{display: "none"}} onChange={handleImage}/>
            <Image color="secondary" sx={{cursor: "pointer"}} /> 
            </div>
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            >
            <Button  onClick={handleClick}>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
          
              </Box>
        </Modal>
    </>)
}

Add.propTypes = {
  setPosts: PropTypes.func,
}