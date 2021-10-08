import { put, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { fetchJobDescription } from '../../services/fetchJobDescription'
import { getJobDescription, setJobDescription } from './actions'
import { TQueryParams } from '../../common/models/queryParams'
import { TJob } from '../../common/models/job'

function* getJobsDescriptionSaga({ payload }: PayloadAction<TQueryParams>) {
  try {
    const data: TJob = yield fetchJobDescription(payload)
    yield put(setJobDescription(data))
  } catch (error) {
    console.error(error)
  }
}

function* jobDescriptionSaga() {
  yield takeEvery(getJobDescription, getJobsDescriptionSaga)
}

export default jobDescriptionSaga
