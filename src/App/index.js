import React, { Component } from 'react';
import './styles/App.css';
// import Welcome from './components/Settings/WelcomeMassage';
import AppLayout from './components/App/AppLayout';
import AppBar from './components/App/AppBar';
import { AppProvider } from './components/App/AppProvider';
import Settings from './components/Settings';
import Content from './components/Shared/Content';
import Dashboard from './components/Dashboard';


class App extends Component {
    render() {
        return (
            <AppLayout>
                <AppProvider>
                    <AppBar />
                    <Content>
                        <Settings />
                        <Dashboard />
                    </Content>
                </AppProvider>
            </AppLayout>
        );
    }
}

export default App;
