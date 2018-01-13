// @flow

import type {Project} from '../stores/ProjectSearchStore.js';
import type {LinkInfo} from '../../components/forms/LinkInfo.jsx'
import type {FileInfo} from '../common/FileInfo.jsx'

type ProjectAPIData = {|
  +id: number,
  +project_description: string,
  +project_issue_area: $ReadOnlyArray<{|+name: string|}>,
  +project_location: string,
  +project_name: string,
|};

export type ProjectDetailsAPIData = {|
  +id: number,
  +project_description: string,
  +project_url: string,
  +project_issue_area: $ReadOnlyArray<{|+name: string|}>,
  +project_location: string,
  +project_name: string,
  +project_thumbnail: FileInfo,
  +project_links: $ReadOnlyArray<LinkInfo>,
  +project_files: $ReadOnlyArray<FileInfo>,
|};

class ProjectAPIUtils {
  static projectFromAPIData(apiData: ProjectAPIData): Project {
    return {
      description: apiData.project_description,
      id: apiData.id,
      issueArea:
        apiData.project_issue_area && apiData.project_issue_area.length != 0
          ? apiData.project_issue_area[0].name
          : 'None',
      location: apiData.project_location,
      name: apiData.project_name,
    };
  }
  
  static fetchProjectDetails(id: number, callback: (ProjectDetailsAPIData) => void): void {
    fetch(new Request('/api/project/' + id + '/'))
      .then(response => response.json())
      .then(projectDetails => callback(projectDetails))
  }
}

export default ProjectAPIUtils