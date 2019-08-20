import React, { Component } from 'react';
import './App.css';
import Userbox from './Components/UserBox';
import { Container, Heading, Section } from 'react-bulma-components/full';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

      render()
      {
        return (
          <div className="app">
            <Section>
              <Container fluid>
                <Heading size={5} renderAs="p">
                  My Git's Profile
                </Heading>
                <Heading subtitle renderAs="p">
                  Using with React and Axios
                </Heading>
              </Container>
            </Section>
            <Section>
              <Container Fluid>
                <Userbox />
              </Container>
            </Section>
          </div>
        );
      }
    }
export default App;

