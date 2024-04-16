import React from 'react';
import InputMask from 'react-input-mask';

//компонент, ввод номера
class Input extends React.Component {
    state = {
        value: ''
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    beforeMaskedValueChange = (newState, oldState, userInput) => {
        var { value } = newState;
        var selection = newState.selection;
        var cursorPosition = selection ? selection.start : null;

        // keep minus if entered by user
        if (value.endsWith('-') && userInput !== '-' && !this.state.value.endsWith('-')) {
            if (cursorPosition === value.length) {
                cursorPosition--;
                selection = { start: cursorPosition, end: cursorPosition };
            }
            value = value.slice(0, -1);
        }

        return {
            value,
            selection
        };
    }

    render() {
        return <InputMask
         mask="+7 (999) 999-99-99"
        maskChar='_'
        alwaysShowMask={true}
        value={this.state.value}
        onChange={this.onChange}
        beforeMaskedValueChange={this.beforeMaskedValueChange}
        className='bg-black text-white md:text-4xl sm:text-2xl rounded-2xl mr-2 p-2 mt-1 w-3/4  max-w-full '
        />;
    }
}

export default Input;