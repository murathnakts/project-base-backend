const logger = require("./loggers");
let instance = null;
class LoggerClass {
    constructor() {
        if(!instance)
            instance = this
    }

    #createLogObject(email, location, proc_type, log) {
        return {
            email, location, proc_type, log
        }
    }

    info(email, location, proc_type, log) {
        let logg = this.#createLogObject(email, location, proc_type, log);
        logger.info(logg);
    }
    warn(email, location, proc_type, log) {
        let logg = this.#createLogObject(email, location, proc_type, log);
        logger.warn(logg);
    }
    error(email, location, proc_type, log) {
        let logg = this.#createLogObject(email, location, proc_type, log);
        logger.error(logg);
    }
    verbose(email, location, proc_type, log) {
        let logg = this.#createLogObject(email, location, proc_type, log);
        logger.verbose(logg);
    }
    silly(email, location, proc_type, log) {
        let logg = this.#createLogObject(email, location, proc_type, log);
        logger.silly(logg);
    }
    http(email, location, proc_type, log) {
        let logg = this.#createLogObject(email, location, proc_type, log);
        logger.http(logg);
    }
    debug(email, location, proc_type, log) {
        let logg = this.#createLogObject(email, location, proc_type, log);
        logger.debug(logg);
    }
}

module.exports = new LoggerClass();