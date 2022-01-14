const getTimelineDifference = (time) => {
    const result = new Date(time) - new Date();

    if (isNaN(result)) throw new Error('parse time error');

    return result;
}

export {
    getTimelineDifference
};
