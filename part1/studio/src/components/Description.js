import React from 'react';
import styles from './Description.module.css';
import classes from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.thepioneerwoman.com/food-cooking/recipes/a11914/cinammon-rolls/";
    let authorPhoto = "https://hips.hearstapps.com/hmg-prod/images/pwspringset2-96-1644080194.jpg?crop=1.00xw:0.336xh;0,0.231xh&resize=1200:*";
    let authorName = "Ree Drummond AKA Pioneer Woman";

    return (
        <div className = {styles.recipeAuthorBlock }>
            <img src={authorPhoto} alt= "Photo of Ree Drummond" className=
            {styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href = {authorLink}>The Pioneer Woman</a>
            </div>
        </div>
    );

}
class RecipeDescription extends React.Component {
    render () {
        return ( 
        <div>
            <div>
                <h1> Cinnamon Rolls</h1>
                <p> These are the most delicious recipe of cinnamon rolls I have ever made.
                </p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }

}

export default RecipeDescription;