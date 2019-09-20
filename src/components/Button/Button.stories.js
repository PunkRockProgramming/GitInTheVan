import Button from './Button';
import React from 'react';
import { storiesOf } from '@storybook/react';


const click = () => {
    if (!!window) {
        alert('Aye! you clicked me!');
    }
}

storiesOf('Button', module)

    .add('without props', () => <Button>Hello World</Button>)
    .add('with a click', () => <Button onClick={click}>Hello World</Button>)
    .add('disabled', () => <Button disabled>Hello World</Button>)
