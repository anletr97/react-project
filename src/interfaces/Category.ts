interface ICategory {
  id: number;
  name: string;
  parent_id?: number;
  created_at: string; // TODO will be number later
  children?: ICategory[]
}

export default ICategory;
