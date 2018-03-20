import React, { Component } from 'react';

class OutsideAlerter extends Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            debugger;
            alert('You clicked outside of me!');
        }
    }

    render() {
        return (
            <div ref={this.setWrapperRef}>
                {this.props.children}
            </div>
        );
    }
}

// OutsideAlerter.propTypes = {
//     children: React.PropTypes.element.isRequired
// }

export default OutsideAlerter;