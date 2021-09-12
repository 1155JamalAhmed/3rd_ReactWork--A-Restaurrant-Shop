import classes from './MealSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delievered To you</h2>
      <p>
        Choose your favourit meal from our broad collection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by expertised chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
