import React from 'react';
import {Content, Box, Media, Image} from 'react-bulma-components/full';

const Userbox = (props) => {
    return(
        <Box>
            <Media>
                <Media.Item renderAs="figure" position="left">
                    <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png"/>
                </Media.Item>
                <Media.Item>
                    <Content>
                        <p>
                            <strong> John Smith</strong> <small> @johnsmit</small>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque 
                            tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odioquis feugiat facilisis.
                        </p>
                    </Content>
                </Media.Item>
            </Media>
        </Box>
    );               
}
export default Userbox;

