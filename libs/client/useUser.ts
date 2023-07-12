import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter");
        } // 로그인 상태가 아니라면 enter페이지로 이동
        setUser(data.profile); // 로그인 상태라면 data.profile을 user에 넣어줌
      });
  }, [router]);
  return user;
}
