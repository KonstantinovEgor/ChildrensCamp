const BaseController = require('./BaseController');

const helperService = require('../services/HelperService');
const ApiError = require('../errors/ApiError');

class TrainingSessionsController extends BaseController {
    constructor() {
        super();
    }

    async add(req, res, next) {
        try {
            const pool = req.body;

            helperService.itContains(pool, ['group_id'], next);
            await super.add('DBCW_TrainingSessions', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async get(req, res, next) {
        try {
            const pool = req.query;
            helperService.itContains(pool, ['id'], next);

            await super.getAll('DBCW_TrainingSessions', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async getAll(req, res, next) {
        try {
            await super.getAll('DBCW_TrainingSessions', { }, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async delete(req, res, next) {
        try {
            const pool = req.body;
            helperService.itContains(pool, ['id'], next);

            const candidate = await super.getOne(
                'DBCW_TrainingSessions',
                { id: pool.id },
                req, res, next, false);
            if (!candidate)
                return next(ApiError.badRequest(`Занятия с id=${pool.id} не найдено`))

            await super.del('DBCW_TrainingSessions', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }
}

module.exports = () => {
    const trainingSessionsController = new TrainingSessionsController();
    return {
        add: trainingSessionsController.add,
        get: trainingSessionsController.get,
        getAll: trainingSessionsController.getAll,
        delete: trainingSessionsController.delete
    }
};