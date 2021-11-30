import { CheckboxContainer, StyledCheckbox } from "./Checkbox.styles";

export const Checkbox = ({
  onClick,
  checked,
}: {
  onClick: () => void;
  checked: boolean;
}) => {
  return (
    <>
      <CheckboxContainer
        onClick={() => {
          onClick();
        }}
      >
        <StyledCheckbox checked={checked} />
      </CheckboxContainer>
    </>
  );
};
