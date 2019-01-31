import React from 'react';
import Link from './link.js';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.google.com">Google</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
    // Trigger the callback
    tree.props.onMouseEnter();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Trigger the callback again
    tree.props.onMouseLeave();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
