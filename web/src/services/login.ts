import { FieldProp } from "src/types/login";
import api from ".";

export async function loginAPI(body: FieldProp) {
  console.log("res in ts");
  return await api.post("/login", body);
}
