import Queue from 'bull';
import config from 'config';

export default class ConsoleQueue {
    constructor(name) {
        this.consoleQueue = new Queue(name || config.queue.defaultName, {
            redis: config.redis
        });
    }

    attachProcessor(processor) {
        this.consoleQueue.process(processor);
    }

    async enqueue(job, delay) {
        const task = await this.consoleQueue.add(job, {
            ...config.queue.jobOptions,
            delay
        });

        return task.id;
    }
}