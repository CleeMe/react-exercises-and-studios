import React from 'react';
import styles from './Ingredients.module.css';
import classes from './Ingredients.module.css';


class RecipeIngredients extends React.Component {
    render() {
        const ingredients = [
            "whole milk",
            "vegetable oil",
            "sugar",
            "yeast",
            "AP flour"
        ];
        return (
            <div>

                <h3>Recipe Ingredients</h3>
                <ul className={
                    StyleSheet.ingredientList
                }>
                    <li>{
                        ingredients[0]
                    }</li>
                    <li>{
                        ingredients[1]
                    }</li>
                    <li>{
                        ingredients[2]
                    }</li>
                    <li>{
                        ingredients[3]
                    }</li>
                    <li>{
                        ingredients[4]
                    }</li>
                </ul>

            </div>

        );
    }
}
export default RecipeIngredients;
