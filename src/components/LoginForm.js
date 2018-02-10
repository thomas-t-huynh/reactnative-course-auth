import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './commons';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        placeholder='user@gmail.com'
                     />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;
