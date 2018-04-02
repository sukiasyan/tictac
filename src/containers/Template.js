import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RadioButton';

injectTapEventPlugin();

class Template extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <header>
                        <h1>TicTacGame</h1>
                        <RaisedButton
                            label={'Test button'}
                            primary={true}
                        onTouchTap={()=>console.log('hello there')}
                        />
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Template;