import React, { useState } from 'react';

const ExerciseTracker = () => {
    const [weight, setWeight] = useState(180);
    const [exerciseDuration, setExerciseDuration] = useState(0);

    const handleExerciseChange = (e) => {
        const duration = parseInt(e.target.value);
        setExerciseDuration(duration);
    };

    const exercise = () => {
        const caloriesBurned = exerciseDuration * 5;
        const weightLost = caloriesBurned / 3500;
        setWeight(weight - weightLost);
    };

    return (
        <div>
            <h2>Exercise Tracker</h2>
            <p>Current Weight: {weight} lbs</p>
            <label>
                Exercise Duration (minutes):
                <input type="number" value={exerciseDuration} onChange={handleExerciseChange} />
            </label>
            <button onClick={exercise}>Exercise</button>
        </div>
    );
};

export default ExerciseTracker;
