import React from "react";

import classes from './MovieList.module.css';

class HobbyLinks extends React.Component {
    render() {
       const hobbyLinks = ["https://en.wikipedia.org/wiki/Reading", "https://www.youtube.com/watch?v=L2HsxaJV7UM",
        "https://www.kingarthurbaking.com/recipes", "https://www.youtube.com/watch?v=DfZI2g9Nfgo"];
       return (
       <div>
          <h3 className = {classes.hobbyHeading}>List of Current Hobbies</h3>
          <ol>
             <a href={hobbyLinks[0]}>Reading</a>
             <a href={hobbyLinks[1]}>Colored Pencil Drawing</a>
             <a href={hobbyLinks[2]}>Baking</a>
             <a href={hobbyLinks[3]}>Granny Square Crochet</a>
          </ol>
       </div>
       );
    }
 }
 
 export default HobbyLinks;