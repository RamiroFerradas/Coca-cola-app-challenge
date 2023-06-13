"use client";
import { useEffect, useState } from "react";
import { User } from "../models/User";
import { fetchData } from "../services";

export default function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetchData(`users`);

      setUsers(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading };
}
