import axiosClient from "./axiosClient";

export const EXPENSES_API_URL = "http://localhost:5000/expenses";

const expenseApi = {
  // Fetch all task
  fetch: () => {
    return axiosClient.get(EXPENSES_API_URL);
  },
  // Get task by Id
  getTaskById: (id: string) => {
    return axiosClient.get(`${EXPENSES_API_URL}/${id}`);
  },
  //   // Delete task
  //   delete: (id) => {
  //     return axiosClient.delete(`${API_TASK_URL}/${id}`);
  //   },
  //   // Update task
  //   update: (id, body) => {
  //     return axiosClient.put(`${API_TASK_URL}/${id}`, body);
  //   },
  //   // Add task
  //   add: (body) => {
  //     return axiosClient.post(`${API_TASK_URL}`, body);
  //   },
};
export default expenseApi;
