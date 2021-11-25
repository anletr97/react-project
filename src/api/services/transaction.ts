import axiosClient from '../axiosClient';

export const URL = '/transactions';

const transactionApi = {
  // Fetch all task
  fetch(): Promise<[]> {
    return axiosClient.get(URL);
  },
  // Get task by Id
  getTaskById: (id: string) => {
    return axiosClient.get(`${URL}/${id}`);
  },
  // Delete task
  delete: (id?: string) => {
    return axiosClient.delete(`${URL}/${id}`);
  },
  // Get transaction by date
  getByDate(date: string) {
    return axiosClient.get(`${URL}/${date}`);
  },
  //   // Update task
  //   update: (id, body) => {
  //     return axiosClient.put(`${API_TASK_URL}/${id}`, body);
  //   },
  // Add task
  add(body: any): Promise<any> {
    return axiosClient.post(`${URL}`, body);
  },
};
export default transactionApi;
