import { Box} from "@mui/material";
import { Post } from "./Post";
import PropTypes from "prop-types"

export function Feed({posts}) {
    return <Box flex={4}>
         {posts.map((data,i) => {
            return <Post key={i} name={data.name} profileimage={data.postimage} postimage={data.profileimage} posttext={data.posttext} date={data.date} />
         })}
    </Box>
}



Feed.propTypes = {
    posts: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
}