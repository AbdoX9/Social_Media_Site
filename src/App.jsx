import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import { Navbar } from "./Components/Navbar"
import { SideBar } from "./Components/SideBar"
import { Feed } from "./Components/Feed"
import { RightBar } from "./Components/RightBar"
import { Add } from "./Components/Add"
import { useState } from "react"
import {datas} from "./data"

function App() {
  const [posts,setPosts] = useState(datas)
  const [mode,setMode] = useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#FF6347",
        light: "#c4e6ff",
      },
      secondary: {
        main: "#ffcccb",
      },
      otherColor: {
        main: "skyblue",
      },
    },
  });
  
  
  return  <ThemeProvider theme={theme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
  <Navbar />
  <Stack direction="row">
  <SideBar mode={mode} setMode={setMode}/>
  <Feed posts={posts}/>
  <RightBar posts={posts} />
  </Stack>
  <Add setPosts={setPosts}/>
    </Box>
  </ThemeProvider>
  
}

export default App
