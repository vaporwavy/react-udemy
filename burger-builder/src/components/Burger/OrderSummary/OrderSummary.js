import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = props => {
    const ingredientSummary = Object.entries(props.ingredients).map(([ingredient, amount]) =>
            <li key={ingredient}>
                <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {amount}
            </li>);

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </>
    );
}

OrderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default OrderSummary;