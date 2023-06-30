import { Mail, Notifications, Recommend } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import { useState } from "react";


export function Navbar() {
    const [open, setOpen] = useState(false)
    const [searching, setSearching] = useState("")
    const Icons = styled("div")(({ theme }) => ({
        display: "none",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: { display: "flex" },
    }))
    const ProfilePhoto = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: { display: "none" },
    }))
    return <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                Social Media
            </Typography>
            <Recommend sx={{ color: "white", display: { xs: "block", sm: "none" } }} />
                <div style={{background: "white",
        borderRadius: "3px",
        width: "40%",
        padding: "0 10px",}}>

                <InputBase value={searching} onChange={(e) => {
                    setSearching(e.target.value)
                }} placeholder="Search" sx={{ width: "100%", "& input::placeholder": { color: "black" } }} />

                </div>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail sx={{ color: "white", cursor: "pointer" }} />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications sx={{ color: "white", cursor: "pointer" }} />
                </Badge>
                <Avatar src="https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg" sx={{ width: "30px", height: "30px", cursor: "pointer" }} onClick={() => setOpen(true)} />
            </Icons>
            <ProfilePhoto>
                <Avatar src="https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg" sx={{ width: "30px", height: "30px", cursor: "pointer" }} onClick={() => setOpen(true)} />
                <Typography variant="span" fontWeight="100">Seth lion</Typography>
            </ProfilePhoto>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
}