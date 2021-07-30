const router = require('express').Router()

const { getAllJobs, getJob, createJob, updatJob, deleteJob } = require('../controllers/jobs')

router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').get(getJob).delete(deleteJob).patch(updatJob)

module.exports = router