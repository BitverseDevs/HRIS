import { ofType } from 'redux-observable';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import axios, { AxiosProgressEvent } from 'axios';
import { 
  processPayroll,
    processPayrollFailure,
    processPayrollProgress,
    processPayrollSuccess,
    viewPayrollList,
    viewPayrollListFailure,
    viewPayrollListProgress,
    viewPayrollListSuccess,
} from '../actions/payroll';
import { Epic } from 'redux-observable';
import store from '../configureStore';
import { ProcessPayroll } from '@/types/types-pages';

const processPayrollApiCall = async (payload: ProcessPayroll): Promise<string> => {
  console.log(payload, "pumasok?11111")
  const response = await axios.post("http://172.16.168.155:8000/api/create_payrolls/",
  payload, 
  {
      onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
        if(progressEvent.total){
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          store.dispatch(processPayrollProgress(progress));
        }
      }
    }
  );
  return response.data;
};

const viewPayrollListApiCall = async () => {
    const response = await axios.get("http://172.16.168.155:8000/api/payroll", 
    {
        onDownloadProgress: (progressEvent) => {
          if(progressEvent.total){
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            store.dispatch(viewPayrollListProgress(progress));
          }
        }
      }
    );
    return response.data;
};

export const viewPayrollListEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(viewPayrollList.type),
    switchMap(() =>
      from(
        viewPayrollListApiCall()
      ).pipe(
        map((data) => {
          return viewPayrollListSuccess(data);
        }),
        catchError((error) => {
          if (error.response && error.response.data && error.response.data.error) {
            return of(viewPayrollListFailure(error.response.data.error)); 
          } else {
            return of(viewPayrollListFailure(error.message)); 
          }
        })
      )
    )
);

export const processPayrollEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(processPayroll.type),
    switchMap((action: ReturnType<typeof processPayroll>) =>
      from(
        processPayrollApiCall(action?.payload)
      ).pipe(
        map((data) => {
          return processPayrollSuccess(data);
        }),
        catchError((error) => {
          // console.log(error, "123092138")
          // console.log(error.response, "maeeeeee111owww");
          if (error.response && error.response.data && error.response.data['Error Message']) {
            return of(processPayrollFailure(error.response.data['Error Message'])); // Extract error message from the response
          } else {
            return of(processPayrollFailure(error.message)); // If there is no custom error message, use the default one
          }
        })
      )
    )
);