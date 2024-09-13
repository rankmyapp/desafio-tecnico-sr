import { ComponentProps } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface StarshipCard extends ComponentProps<"div"> {
  ss: any;
}

export function StarshipCard({ ss, ...props }: StarshipCard) {
  return (
    <Card key={ss.url} {...props}>
      <CardHeader>
        <CardTitle>{ss.name}</CardTitle>
        <CardDescription>{ss.model}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Pilotos: {ss.pilots.length}</p>
        <p>Filmes: {ss.films.length}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start">
        <p>Criado em: {new Date(ss.created).toLocaleDateString("pt-br")}</p>
        <p>Editado em: {new Date(ss.edited).toLocaleDateString("pt-br")}</p>
      </CardFooter>
    </Card>
  );
}
