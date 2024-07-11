const express = require('express');
const moment = require('moment');
const Response = require('../lib/Response');
const AuitLogs = require('../db/models/AuditLogs');
const router = express.Router();


router.post("/", async (req, res) => {
    let body = req.body;
    try {
        let query = {};
        let skip = body.skip;
        let limit = body.limit;
        if (typeof body.skip !== "numeric") skip = 0;
        if (typeof body.limit !== "numeric" || body.limit > 500) limit = 500;
        if (body.begin_date && body.end_date) {
            query.created_at = {
                $gte: moment(body.begin_date),
                $lte: moment(body.end_date)
            }
        } else {
            query.created_at = {
                $gte: moment().subtract(1, "day").startOf("day"),
                $lte: moment()
            }
        }

        let auditlogs = await AuitLogs.find(query).sort({ created_at: -1 }).skip(skip).limit(limit);
        res.json(Response.successResponse(auditlogs));
    } catch (error) {
        let errorResponse = Response.errorResponse(error)
        res.status(errorResponse.code).json(errorResponse);
    }
});

module.exports = router;