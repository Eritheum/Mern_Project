import React from "react";
import {useDispatch} from 'react-redux'
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import * as icons from "@material-ui/icons";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/posts";

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={()=> setCurrentId(post._id)}>
          <icons.MoreHorizRounded fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={()=> dispatch(likePost(post._id))}>
          <icons.ThumbUpAlt fontSize='small' />
          &nbsp;like&nbsp;
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={()=> dispatch(deletePost(post._id))}>
          <icons.Delete fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
