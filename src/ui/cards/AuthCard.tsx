import { PropsWithChildren } from "react";

interface AuthCardProps extends PropsWithChildren {
  title: string;
}

export function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
