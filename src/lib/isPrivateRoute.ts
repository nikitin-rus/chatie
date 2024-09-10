import { privatePaths } from "@/paths";

export function isPrivateRoute(pathName: string) {
  for (const privatePath of Object.values(privatePaths)) {
    if (pathName === privatePath || pathName.startsWith(privatePath + "/")) {
      return true;
    }
  }

  return false;
}
