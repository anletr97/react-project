import { IExpense, ListResponse } from "../models";
import axiosClient from "./axiosClient";

export const URL = "/expenses";

const expenseApi = {
  // Fetch all task
  fetch(): Promise<IExpense[]> {
    return axiosClient.get(URL);
  },
  // Get task by Id
  getTaskById: (id: string) => {
    return axiosClient.get(`${URL}/${id}`);
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
