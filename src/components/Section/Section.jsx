import React from 'react';

export class Section extends React.Component {
    render() {
        const {title, children} = this.props;
        return (
        <section>
            <h2 className="section">{title}</h2>
            {children}
        </section>)
    }
}