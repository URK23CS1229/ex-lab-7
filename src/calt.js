import React, { useState } from "react";
import "./calt.css";

export default function CalorieTracker() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");
  const [total, setTotal] = useState(null);
  const [remaining, setRemaining] = useState(null);

  const handleCalculate = () => {
    if (
      !name ||
      !goal ||
      !breakfast ||
      !lunch ||
      !dinner ||
      !snacks ||
      goal <= 0 ||
      breakfast < 0 ||
      lunch < 0 ||
      dinner < 0 ||
      snacks < 0
    ) {
      alert("Please fill all fields with positive values!");
      return;
    }

    const totalCalories =
      Number(breakfast) + Number(lunch) + Number(dinner) + Number(snacks);
    const remainingCalories = Number(goal) - totalCalories;

    setTotal(totalCalories);
    setRemaining(remainingCalories);
  };

  return (
    <div className="tracker-container">
      <h2>🍎 Calorie Tracker App</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Daily Calorie Goal:</label>
        <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} />

        <label>Breakfast Calories:</label>
        <input type="number" value={breakfast} onChange={(e) => setBreakfast(e.target.value)} />

        <label>Lunch Calories:</label>
        <input type="number" value={lunch} onChange={(e) => setLunch(e.target.value)} />

        <label>Dinner Calories:</label>
        <input type="number" value={dinner} onChange={(e) => setDinner(e.target.value)} />

        <label>Snacks Calories:</label>
        <input type="number" value={snacks} onChange={(e) => setSnacks(e.target.value)} />

        <button onClick={handleCalculate}>Calculate Calories</button>
      </div>

      {total !== null && (
        <div className="results">
          <h3>Results</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Daily Calorie Goal:</strong> {goal}</p>
          <p><strong>Total Calories Consumed:</strong> {total}</p>
          <p>
            <strong>Remaining Calories:</strong>{" "}
            <span className={remaining < 0 ? "warning" : "success"}>
              {remaining}{" "}
              {remaining < 0
                ? "⚠️ You exceeded your daily calorie goal!"
                : "✅ You are within your daily goal!"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
