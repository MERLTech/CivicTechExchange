// @flow

import type {Project} from '../stores/ProjectSearchStore.js';
import type {LinkInfo} from '../../components/forms/LinkInfo.jsx'
import type {FileInfo} from '../common/FileInfo.jsx'
import {PositionInfo} from "../forms/PositionInfo.jsx";

// TODO: Refactor these common types into separate file
export type APIResponse = {|
  +status: number
|};

export type APIError = {|
  +errorCode: number,
  +errorMessage: string
|};

// TODO: Update this definition
export type UserAPIData = {|
  +id: number,
  +email: string,
  +first_name: string,
  +last_name: string
|};

class UserAPIUtils {
  static fetchUserDetails(id: number, callback: (UserAPIData) => void, errCallback: (APIError) => void): void {
    fetch(new Request('/api/user/' + id + '/'))
      .then(response => {
        if(!response.ok) {
          throw Error();
        }
        return response.json();
      })
      .then(projectDetails => callback(projectDetails))
      .catch(response => errCallback && errCallback({
        errorCode: response.status,
        errorMessage: JSON.stringify(response)
      }));
  }
  
  // TODO: Refactor generic code into separate file
  static post(url: string, body: {||},successCallback: (APIResponse) => void, errCallback: (APIError) => void) {
    const doError = (response) => errCallback && errCallback({
      errorCode: response.status,
      errorMessage: JSON.stringify(response)
    });

    fetch(new Request(url, {method:"POST", body:JSON.stringify(body), credentials:"include", headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },}))
      .then(response => UserAPIUtils.isSuccessResponse(response) ? successCallback() : doError(response))
      .catch(response => doError(response));
  }

  static isSuccessResponse(response:APIResponse): boolean {
    return response.status < 400;
  }
}

export default UserAPIUtils