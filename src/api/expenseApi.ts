import { IExpense } from "../models";
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
  // Delete task
  delete: (id?: string) => {
    return axiosClient.delete(`${URL}/${id}`);
  },
  //   // Update task
  //   update: (id, body) => {
  //     return axiosClient.put(`${API_TASK_URL}/${id}`, body);
  //   },
  // Add task
  add(body: IExpense): Promise<IExpense> {
    return axiosClient.post(`${URL}`, body);
  },
};
export default expenseApi;
