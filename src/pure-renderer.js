export default function PureRender(component) {
    if (typeof component !== "function") {
        throw new TypeError("PureRender: called without a component as the first argument");
    }

    if (component.prototype.shouldComponentUpdate) {
        throw new Error("PureRender: called on a component that already implements shouldComponentUpdate");
    }

    // mutation
    component.prototype.shouldComponentUpdate = function(nextProps, nextState) {
        return !shallowEquals(this.props, nextProps) || !shallowEquals(this.state, nextState);
    };

    return component;
}

// Modified copy from https://github.com/gaearon/react-pure-render
function shallowEquals(objA, objB) {

    if (objA === objB) {
        return true;
    }

    if (typeof objA !== "object" || objA === null ||
        typeof objB !== "object" || objB === null) {
        return false;
    }

    let keysA = Object.keys(objA);
    let keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    let bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (let i = 0; i < keysA.length; i++) {
        if (!bHasOwnProperty(keysA[i]) || !shallowEquals(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
