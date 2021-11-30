import { CardHeader, CardDescription, CardContainer } from "./Card.styles";
export const Card = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  return (
    <CardContainer>
      <CardHeader>{header}</CardHeader>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};
