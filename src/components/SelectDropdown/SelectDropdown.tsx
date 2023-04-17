import { StyledSelectDropdown } from "./styles";
import { SelectDropdownProps } from "../../Types/SelectDropdown.interfaces";

const SelectDropdown = ({
  id,
  onChange,
  value,
  children,
}: SelectDropdownProps) => {
  return (
    <StyledSelectDropdown id={id} onChange={onChange} value={value}>
      {children}
    </StyledSelectDropdown>
  );
};

export default SelectDropdown;
