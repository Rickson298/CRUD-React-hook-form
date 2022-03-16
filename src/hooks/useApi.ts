import axios from "axios";
import { useCallback, useState } from "react";

export const api = axios.create({
  baseURL: "http://186.226.58.246:3030/",
});

type Response = {
  getData: (endPoint: string) => Promise<void>;
  postData: (endPoint: string, data: any) => Promise<void>;
  putData: (endPoint: string, data: any) => Promise<void>;
  deleteData: (endPoint: string) => Promise<void>;
  data: any;
  isLoading: boolean;
};

export function useApi(): Response {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = useCallback(async (endPoint: string): Promise<void> => {
    if (endPoint)
      try {
        setIsLoading(true);
        let { data } = await api.get(endPoint);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
  }, []);

  const postData = useCallback(
    async (endPoint: string, data: any): Promise<void> => {
      if (endPoint)
        try {
          await api.post(endPoint, data);
        } catch (error) {
          console.log(error);
        }
    },
    []
  );

  const putData = useCallback(
    async (endPoint: string, data: any): Promise<void> => {
      if (endPoint)
        try {
          await api.put(endPoint, data);
        } catch (error) {
          console.log(error);
        }
    },
    []
  );
  const deleteData = useCallback(async (endPoint: string): Promise<void> => {
    if (endPoint)
      try {
        await api.delete(endPoint);
      } catch (error) {
        console.log(error);
      }
  }, []);

  return { getData, data, isLoading, postData, deleteData, putData };
}
