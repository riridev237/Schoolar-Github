// import * as jwt_decode from "jwt-decode";

// interface JwtPayload {
//   role?: string;
//   authorities?: { authority: string }[];
//   // add other fields if needed
// }

// export function getUserRole() {
//   const token = localStorage.getItem("token");
//   if (!token) return null;
//   try {
//     const decoded = jwt_decode<JwtPayload>(token);
//     return decoded.role || decoded.authorities?.[0]?.authority || null;
//   } catch {
//     return null;
//   }
// }