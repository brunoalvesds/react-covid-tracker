import { useState, Component, createRef } from 'react'
import { Sidebar, Avatar, Button, Nav } from 'grommet';
import { Help, Projects, Clock } from 'grommet-icons';

class Header extends Component {

    state = {
        totalReactPackages: 0
    }
    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.npms.io/v2/search?q=react');
        const data = await response.json();
        this.setState({ totalReactPackages: data.total })
        console.log("res: ", data.total);
    }

    render() {
        return (
            <div className='world-data'>
                <Sidebar background="brand" round="small"
                    header={
                        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                    }
                    footer={
                        <Button icon={<Help />} hoverIndicator />
                    }
                >
                    <Nav gap="small">
                        <Button icon={<Projects />} hoverIndicator />
                        <Button icon={<Clock />} hoverIndicator />
                    </Nav>
                </Sidebar>
            </div>
        );
    }
}

export default Header
