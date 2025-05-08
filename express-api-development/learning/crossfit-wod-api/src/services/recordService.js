// to service the record of the workout to the response back to clients

const Record = require("../database/Record");

const getRecordForWorkout = (workoutId) => {
    try {
        const record = Record.getRecordForWorkout(workoutId);
        return record;
    }

    catch (error) {
        throw error;
    }
};

module.exports = { getRecordForWorkout };