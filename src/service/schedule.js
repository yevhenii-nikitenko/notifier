import ConsoleQueue from '../queue/index.js';
import { getTimelineDifference } from '../helpers/datetime.js';

const consoleQueue = new ConsoleQueue();

consoleQueue.attachProcessor(job => console.log(job.data.message));

const scheduleService = async (req, res, next) => {
    try {
        const diff = getTimelineDifference(req.query.time);
        
        if (diff < 0) {
            throw new RangeError('Past event can not be scheduled');
        }

        const taskId = await consoleQueue.enqueue({ message: req.query.message }, diff);

        console.log('task is scheduled with id ', taskId);

        res.status(200).send(`task with id = ${taskId} is enqueued successfuly`);
    } catch (err) {
        console.error('Error occured', err);

        res.status(400).send(err.message);
    }
};

export default scheduleService;