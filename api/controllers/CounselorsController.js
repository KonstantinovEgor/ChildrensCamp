const BaseController = require('./BaseController');

const helperService = require('../services/HelperService');
const ApiError = require('../errors/ApiError');

class CounselorsController extends BaseController {
    constructor() {
        super();
    }

    async add(req, res, next) {
        try {
            const pool = req.body;

            helperService.itContains(pool, ['full_name', 'age'], next);
            const candidate = await super.getOne(
                'DBCW_Counselors',
                { full_name: pool.full_name },
                req, res, next, false);
            if (candidate)
                return next(ApiError.badRequest(`Вожатый по имени ${pool.full_name} уже существует`));
            await super.add('DBCW_Counselors', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async get(req, res, next) {
        try {
            const pool = req.query;
            helperService.itContains(pool, ['id'], next);

            await super.getAll('DBCW_Counselors', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async getAll(req, res, next) {
        try {
            await super.getAll('DBCW_Counselors', { }, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async delete(req, res, next) {
        try {
            const pool = req.body;
            helperService.itContains(pool, ['id'], next);

            const candidate = await super.getOne(
                'DBCW_Counselors',
                { id: pool.id },
                req, res, next, false);
            if (!candidate)
                return next(ApiError.badRequest(`Вожатого с id=${pool.id} не найдено`))

            await super.del('DBCW_Counselors', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }
}

module.exports = () => {
    const counselorsController = new CounselorsController();
    return {
        add: counselorsController.add,
        get: counselorsController.get,
        getAll: counselorsController.getAll,
        delete: counselorsController.delete
    }
};