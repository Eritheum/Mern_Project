import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

import memories from './images/memories.png'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)

    useEffect(()=> { 
        dispatch(getPosts());
    },[currentId, dispatch])
    
    return (
        <div>
            <Container maxWidth='lg'>
                <AppBar className={classes.appBar} position="static" color='inherit'>
                    <Typography className={classes.heading} variant="h2" align='center'>Memories</Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60"/>
                </AppBar>
                <Grow in>
                    <Container >
                        <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form setCurrentId={setCurrentId} currentId={currentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App
