const BaseController = require('./BaseController');

const helperService = require('../services/HelperService');
const ApiError = require('../errors/ApiError');

class KidsController extends BaseController {
    constructor() {
        super();
    }

    async add(req, res, next) {
        try {
            const pool = req.body;

            helperService.itContains(pool, ['group_id', 'full_name', 'age'], next);
            const candidate = await super.getOne(
                'DBCW_Kids',
                { full_name: pool.full_name },
                req, res, next, false);
            if (candidate)
                return next(ApiError.badRequest(`Ребёнок с именем ${pool.full_name} уже существует`));
            await super.add('DBCW_Kids', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async get(req, res, next) {
        try {
            const pool = req.query;
            helperService.itContains(pool, ['id'], next);

            await super.getAll('DBCW_Kids', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async getAll(req, res, next) {
        try {
            await super.getAll('DBCW_Kids', { }, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async delete(req, res, next) {
        try {
            const pool = req.body;
            helperService.itContains(pool, ['id'], next);

            const candidate = await super.getOne(
                'DBCW_Kids',
                { id: pool.id },
                req, res, next, false);
            if (!candidate)
                return next(ApiError.badRequest(`Группы с id=${pool.id} не найдено`))

            await super.del('DBCW_Kids', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }
}

module.exports = () => {
    const kidsController = new KidsController();
    return {
        add: kidsController.add,
        get: kidsController.get,
        getAll: kidsController.getAll,
        delete: kidsController.delete
    }
};