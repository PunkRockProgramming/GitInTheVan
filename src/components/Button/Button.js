// @flow
import * as React from 'react';
import isEqual from 'react-fast-compare';
import './Button.css';

type Props = {
    children: React.Node,
};

export default class Button extends React.Component<Props> {
    shouldComponentUpdate = (nextProps: Props) => !isEqual(this.props, nextProps);

    render() {
        const {
            children,
            ...rest
        } = this.props;

        return (
            <button type="button" {...rest}>
                {children}
            </button>
        );
    }
}
