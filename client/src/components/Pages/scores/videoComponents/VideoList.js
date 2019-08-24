import React from "react";
import styled from "styled-components"

const List = styled.ul` 
list-style:none;
padding:0;
`
const ListItem =styled.li`
img{
border:${props=> props.active ? "10px solid gray" : "10px solid orange"};
border-radius:3px;
cursor:pointer;
:hover{
    border-color:red;
}

}
`

const VideoList = ({children}) => {
    return (
     <List>{children}</List>
    )
}



const VideoListItem = ({ video, selectedVideo, onVideoSelect }) => {
    return (
        <ListItem active={video===selectedVideo}>
          <  img  
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          onClick={() => onVideoSelect(video)}
          />
        </ListItem>
    )
}
export{VideoList, VideoListItem};
