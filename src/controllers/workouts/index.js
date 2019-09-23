const workouts = {
    userId: 0,
    currentWorkout: "A",
    sets: [
        { key: 1, workout: "A", title: "Squats", sets: [false, false, false, false, false] },
        { key: 2, workout: "A", title: "Shoulder Press", sets: [false, false, false, false, false] },
        { key: 3, workout: "A", title: "Biceps", sets: [false, false, false, false, false] },
        { key: 4, workout: "B", title: "Bench Press", sets: [false, false, false, false, false] },
        { key: 5, workout: "B", title: "Barbell Row", sets: [false, false, false, false, false] },
        { key: 6, workout: "B", title: "Triceps", sets: [false, false, false, false, false] },
        { key: 7, workout: "C", title: "Squats", sets: [false, false, false, false, false] },
        { key: 8, workout: "C", title: "Deadlifts", sets: [false, false, false, false, false] },
        { key: 9, workout: "C", title: "Abs", sets: [false, false, false, false, false] }
    ],
    category: [
        { workout: "A", title: "Legs & Shoulders" },
        { workout: "B", title: "Chest & Back" },
        { workout: "C", title: "Legs & arms" }
    ],
    history: [],

    addWorkout(workout, title) {
        let workouts = this.workouts;
        let lastWorkout = workouts[workouts.length - 1];
        workouts.push({ key: lastWorkout.id + 1, workout: workout, title: title, sets: [false, false, false, false, false] });
    },
    removeWorkout(id) {
        let filteredWorkouts = this.workouts.filter(item => item.key !== id)
        this.workouts = filteredWorkouts;
    }

};
export default workouts;
